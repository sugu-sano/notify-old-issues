import { escape } from 'querystring';
import fetch from 'isomorphic-unfetch'

/**
 * ルームIDからURLを生成する関数
 *
 * @param room_id - チャットワークのルームID
 * @returns メッセージ送信用のURL
 */
function buildUrl(room_id: string): string {
  return `https://api.chatwork.com/v2/rooms/${room_id}/messages`;
}

/**
 * APIトークンからヘッダーを生成する関数
 *
 * @param api_token - チャットワークのAPIトークン
 * @returns POSTリクエスト用のヘッダー
 */
function buildHeaders(api_token: string): Record<string, string> {
  return {
    'X-ChatWorkToken': api_token,
    'Content-Type': 'application/x-www-form-urlencoded',
  };
}

/**
 * メッセージと自分への未読フラグからボディを生成する関数
 *
 * @param message - 送信するメッセージ
 * @param self_unread - 自分への未読フラグ（0または1）
 * @returns POSTリクエスト用のボディ
 */
function buildBody(message: string, self_unread: 0 | 1): string {
  return `body=${escape(message)}&self_unread=${self_unread}`;
}

/**
 * チャットワークにメッセージを通知する非同期関数
 *
 * @param api_token - チャットワークのAPIトークン
 * @param room_id - チャットワークのルームID
 * @param message - 送信するメッセージ
 * @param self_unread - 自分への未読フラグ（0または1、デフォルトは1）
 * @param fetcher - fetch関数（外部から注入される）
 * @returns Responseオブジェクト（Promiseでラップされる）
 */
export async function notify(
  api_token: string,
  room_id: string,
  message: string,
  self_unread: 0 | 1 = 1,
  fetcher: typeof fetch
): Promise<Response> {

  // 抽出した関数を使ってURL、ヘッダー、ボディを取得する
  const url = buildUrl(room_id);
  const headers = buildHeaders(api_token);
  const body = buildBody(message, self_unread);

  // 注入されたfetcher関数を使ってリクエストを行う
  return await fetcher(url, { method: 'POST', headers, body });
}
