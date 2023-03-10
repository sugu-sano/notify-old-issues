import { get_chatwotk_name } from './get-chatwork-name';
import { group_by } from './group-by';
import { ChatworkMapping } from './types/chatwork-mapping';
import { Issue } from './types/vendor';

/**
 * 期限切れのissueを通知するメッセージを作成する関数
 *
 * @param days_ago issueが期限切れと判断される日数
 * @param mapping GitHubユーザーとChatworkユーザーの対応表
 * @param expired_issues 期限切れと判断されたissueの配列
 * @returns Chatwork用のメッセージ文字列
 */
export function build_message(
  days_ago: number,
  mapping: ChatworkMapping,
  expired_issues: Issue[]
): string {
  const grouped_issues = group_by(expired_issues, (i) => i.user.login);
  const message_body = build_message_body(mapping, grouped_issues);
  return `[info]
[title]
以下の issue は最初の open から ${days_ago} 日以上経過しています
[/title]
${message_body}
[/info]

Powered by notify-old-issues https://github.com/sugu-sano/notify-old-issues`;
}

/**
 * メッセージ本文を作成する関数
 *
 * @param mapping GitHubユーザーとChatworkユーザーの対応表
 * @param grouped_issues GitHubユーザーごとにグループ化されたissueの連想配列
 * @returns メッセージ本文文字列
 */
function build_message_body(
  mapping: ChatworkMapping,
  grouped_issues: Record<string, Issue[]>
): string {
  return Object.entries(grouped_issues)
    .map(([user, issues]) => {
      const chatwork_name = get_chatwotk_name(mapping, user);
      const issue_list = build_issue_list(issues);
      return `${chatwork_name}\n${issue_list}`;
    })
    .join('\n[hr]\n');
}

/**
 * issueリストを作成する関数
 *
 * @param issues issueオブジェクトの配列
 * @returns issueリスト文字列
 */
function build_issue_list(issues: Issue[]): string {
  return issues
    .map(
      (i) =>
        `title: ${i.title}
html_url: ${i.html_url}
created_at: ${i.created_at.toLocaleString('ja-JP')}`
    )
    .join('\n');
}
