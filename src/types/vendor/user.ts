/**
 * GitHubのユーザーを表す型です。
 */
export type User = {
  /** ユーザーのログイン名 */
  login: string;
  /** ユーザーのID */
  id: number;
  /** ユーザーのノードID */
  node_id: string;
  /** ユーザーのアバター画像のURL */
  avatar_url: string;
  /** ユーザーのグラバターID */
  gravatar_id: string;
  /** ユーザーのAPI URL */
  url: string;
  /** ユーザーのHTML URL */
  html_url: string;
  /** ユーザーのフォロワー一覧のURL */
  followers_url: string;
  /** ユーザーがフォローしているユーザー一覧のURL */
  following_url: string;
  /** ユーザーが作成したGist一覧のURL */
  gists_url: string;
  /** ユーザーがスターリングしたリポジトリ一覧のURL */
  starred_url: string;
  /** ユーザーが購読しているリポジトリ一覧のURL */
  subscriptions_url: string;
  /** ユーザーが所属する組織一覧のURL */
  organizations_url: string;
  /** ユーザーが作成または所有するリポジトリ一覧のURL */
  repos_url: string;
  /** ユーザーが発生させたイベント一覧のURL */
  events_url: string;
  /** ユーザーに送られたイベント一覧のURL */
  received_events_url: string;
  /** ユーザーの種類（UserまたはOrganization） */
  type: string;
  /** サイト管理者かどうか */
  site_admin: boolean;
};
