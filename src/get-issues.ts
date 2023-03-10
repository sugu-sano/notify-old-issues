import fetch from 'isomorphic-unfetch';
import { Issue, State } from './types/vendor';

const BASE_URL = `https://api.github.com/repos`;
const ACCEPT_HEADER = 'application/vnd.github.v3+json';

type GetIssuesOptions = {
  owner: string;
  repository: string;
  api_token: string;
  state: State;
};

/**
 * GitHub APIからissueを取得する関数
 * @param options - issueを取得するためのオプション
 * @param fetcher - fetch関数の代替品（テスト用）
 * @returns issueの配列
 * @throws GitHub APIへのアクセスに失敗した場合やレスポンスが不正な場合にエラーを投げる
 */
export async function get_issues(
  options: GetIssuesOptions,
  fetcher: typeof fetch
): Promise<Issue[]> {
  const url = build_url(options);
  const headers = build_headers(options);
  const response = await fetcher(url, { headers });
  if (response.status != 200) {
    throw new Error(
      `GitHub API にアクセスできませんでした: ${JSON.stringify(
        await response.json(),
        null,
        '  '
      )}`
    );
  }
  const data = await parse_response(response);
  return data as Issue[];
}

/**
 * issueを取得するためのURLを生成する関数
 * @param options - issueを取得するためのオプション
 * @returns URL文字列
 */
function build_url(options: GetIssuesOptions): string {
  return `${BASE_URL}/${options.owner}/${options.repository}/issues?state=${options.state}`;
}

/**
 * issueを取得するためのヘッダーを生成する関数
 * @param options - issueを取得するためのオプション
 * @returns ヘッダーのオブジェクト
 */
function build_headers(options: GetIssuesOptions): Record<string, string> {
  return {
    Authorization: `token ${options.api_token}`,
    Accept: ACCEPT_HEADER,
  };
}

/**
 * レスポンスからデータをパースする関数
 * @param response - レスポンスオブジェクト
 * @returns パースされたデータ（issueの配列）
 */
async function parse_response(response: Response): Promise<any[]> {
  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error(`GitHub API のレスポンスが不正です`);
  }
  return data;
}
