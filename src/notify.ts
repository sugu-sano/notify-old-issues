import { escape } from 'querystring';

export async function notify(
  api_token: string,
  room_id: string,
  message: string,
  self_unread?: 0 | 1
): Promise<Response> {
  return await fetch(`https://api.chatwork.com/v2/rooms/${room_id}/messages`, {
    method: 'POST',
    headers: {
      'X-ChatWorkToken': api_token,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `body=${escape(message)}&self_unread=${
      typeof self_unread === 'undefined' ? 1 : self_unread
    }`,
  });
}
