import { get_chatwotk_name } from './get-chatwork-name';
import { group_by } from './group-by';
import { ChatworkMapping } from './types/chatwork-mapping';
import { Issue } from './types/vendor';

export function build_message(
  valid_days: number,
  mapping: ChatworkMapping,
  expired_issues: Issue[]
): string {
  return (
    '[info]\n' +
    '[title]\n' +
    `以下の issue は最初の open から ${valid_days} 日以上経過しています` +
    '[/title]' +
    Object.entries(group_by(expired_issues, (i) => i.user.login)).map(
      ([user, issues]) =>
        `${get_chatwotk_name(mapping, user)}\n` +
        issues.map(
          (i) =>
            `title: ${i.title}\n` +
            `html_url: ${i.html_url}\n` +
            `created_at: ${i.created_at.toString()}\n`
        ) +
        '[hr]\n'
    ) +
    '[/info]'
  );
}
