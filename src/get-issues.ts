import fetch from 'isomorphic-unfetch';
import { Issue, State } from './types/vendor';

export async function get_issues(
  owner: string,
  repository: string,
  api_token: string,
  state: State
): Promise<Issue[]> {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repository}/issues` +
      `?state=${state}`,
    {
      headers: {
        Authorization: `token ${api_token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );
  if (response.status != 200) {
    throw new Error(
      `GitHub API にアクセスできませんでした: ${JSON.stringify(
        await response.json(),
        null,
        '  '
      )}`
    );
  }
  return (await response.json()) as Issue[];
}
