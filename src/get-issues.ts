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
        Authorization: `Bearer: ${api_token}`,
      },
    }
  );
  return (await response.json()) as Issue[];
}
