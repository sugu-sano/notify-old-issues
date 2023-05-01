import { ChatworkMapping } from './types/chatwork-mapping';

/**
 * デフォルトのメッセージ。Github のユーザ名と Chatwork のユーザ名がマッピングされていない場合に返す。
 */
const DEFAULT_MESSAGE = 'Github のユーザ名と Chatwork のユーザ名がマッピングされていません';

/**
 * Github のユーザ名から Chatwork のユーザ名を取得する関数。
 *
 * @param mapping - Github と Chatwork のユーザ名のマッピングオブジェクト
 * @param github_user_name - Github のユーザ名
 * @returns Chatwork のユーザ名。マッピングされていない場合はデフォルトのメッセージを返す。
 */
export function get_chatwotk_name(
  mapping: ChatworkMapping,
  github_user_name: string
): string {
  return mapping[github_user_name] ?? (`${DEFAULT_MESSAGE}: ${github_user_name}`);
}
