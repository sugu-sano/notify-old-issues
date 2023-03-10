/**
 * GitHubのプルリクエストを表す型です。
 */
export type PullRequest = {
  /** プルリクエストのAPI URL */
  url: string;
  /** プルリクエストのHTML URL */
  html_url: string;
  /** プルリクエストの差分ファイルのURL */
  diff_url: string;
  /** プルリクエストのパッチファイルのURL */
  patch_url: string;
};