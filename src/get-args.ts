import commandLineArgs from 'command-line-args';
import { optionDefinitions } from './option-definitions';
import { Args } from './types/args';

/**
 * コマンドライン引数を取得する関数。
 *
 * @returns 引数のオブジェクト
 */
export function get_args(): Args {
  const parsedArgs = commandLineArgs(optionDefinitions);
  return {
    owner: parsedArgs['owner'],
    repository: parsedArgs['repository'],
    valid_days: parsedArgs['valid-days'],
    issue_state: parsedArgs['issue-state'],
    chatwork_room_id: parsedArgs['chatwork-room-id'],
    chatwork_mapping: parsedArgs['chatwork-mapping']
  }
}
