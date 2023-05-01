import sourceMapSupport from 'source-map-support';

import * as actions from '@actions/core';

import { build_message } from './build-message';
import { calc_past_date } from './calc_past_date';
import { get_args } from './get-args';
import { get_issues } from './get-issues';
import { notify } from './notify';
import { ChatworkMapping } from './types/chatwork-mapping';
import fetch from 'isomorphic-unfetch';

sourceMapSupport.install();

async function main() {
  try {
    const args = get_args();
    console.log(`command line args: ${JSON.stringify(args, null, '  ')}\n`);

    console.log(`GITHUB_API_TOKEN: ${mask(process.env.GITHUB_API_TOKEN)}`)

    const issues = await get_issues(
      {
        owner: args.owner,
        repository: args.repository,
        api_token:
          process.env.GITHUB_API_TOKEN,
        state: args.issue_state
      },
      fetch
    );

    console.log(
      `fetched issues: ${JSON.stringify(
        issues.map((i) => ({
          user: i.user.login,
          title: i.title,
          created_at: new Date(i.created_at),
        })),
        null,
        '  '
      )}\n`
    );

    const expiry_date = calc_past_date(args.valid_days);
    console.log(`expiry_date: ${expiry_date}\n`);

    const expired_issues = issues.filter(
      (i) => new Date(i.created_at) < expiry_date
    );

    console.log(`CHATWORK_API_TOKEN: ${mask(process.env.CHATWORK_API_TOKEN)}`)

    if (expired_issues.length === 0) {
      const msg = `${args.valid_days} 日以上経過した issue はありませんでした。`;
      await notify(process.env.CHATWORK_API_TOKEN, args.chatwork_room_id, msg, 1, fetch);
      console.log(msg);
      return;
    }

    const chatwork_mapping = JSON.parse(
      actions.getInput('chatwork-mapping') || args.chatwork_mapping
    ) as ChatworkMapping;
    console.log(
      `chatwork_mapping: ${JSON.stringify(chatwork_mapping, null, '  ')}\n`
    );

    const message = build_message(
      args.valid_days,
      chatwork_mapping,
      expired_issues
    );
    console.log(`message: ${message}\n`);

    const response = await notify(process.env.CHATWORK_API_TOKEN, args.chatwork_room_id, message, 1, fetch);
    console.log(`response: ${JSON.stringify(await response.json())}\n`);
  } catch (error) {
    const args = get_args();
    const msg = `$GitHub の古い issue 通知 でエラーが発生しました。\n${(error as Error).stack
      }\n`;
    await notify(process.env.CHATWORK_API_TOKEN, args.chatwork_room_id, msg, 1, fetch);
    console.error(msg);
    throw error;
  }
}

function mask(val: string) {
  return val.slice(0, 4) + '*'.repeat(val.length - 4);
}

main();
