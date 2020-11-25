import { ChatworkMapping } from './types/chatwork-mapping';

export function get_chatwotk_name(
  mapping: ChatworkMapping,
  github_user_name: string
): string {
  return (
    mapping[github_user_name] ||
    'Github のユーザ名と Chatwork のユーザ名がマッピングされていません'
  );
}
