import sourceMapSupport from 'source-map-support';

import * as actions from '@actions/core';

import { build_message } from './build-message';
import { calc_expiry_date } from './calc-expiry-date';
import { get_args } from './get-args';
import { get_issues } from './get-issues';
import { notify } from './notify';
import { ChatworkMapping } from './types/chatwork-mapping';

sourceMapSupport.install();

async function main() {
  try {
    const args = get_args();
    console.log(`command line args: ${JSON.stringify(args, null, '  ')}`);

    const issues = await get_issues(
      args.owner,
      args.repository,
      process.env.GITHUB_API_TOKEN,
      args.issue_state
    );
    console.log(`fetched issues: ${JSON.stringify(issues, null, '  ')}`);

    const expiry_date = calc_expiry_date(args.valid_days);
    console.log(`expiry_date: ${expiry_date}`);

    const expired_issues = issues.filter(
      (i) => new Date(i.created_at) < expiry_date
    );

    const chatwork_mapping = JSON.parse(
      actions.getInput('chatwork-mapping') || args.chatwork_mapping
    ) as ChatworkMapping;
    console.table(
      `chatwork_mapping: ${JSON.stringify(chatwork_mapping, null, '  ')}`
    );

    const message = build_message(
      args.valid_days,
      chatwork_mapping,
      expired_issues
    );
    console.log(`message: ${message}`);

    const response = await notify(
      process.env.CHATWORK_API_TOKEN,
      args.chatwork_room_id,
      message
    );
    console.log(`response: ${JSON.stringify(await response.json())}`);
  } catch (error) {
    console.error(error);
  }
}

main();
