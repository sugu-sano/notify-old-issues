import { State } from './vendor';

export type Args = {
  owner: string;
  repository: string;
  valid_days: number;
  issue_state: State;
  chatwork_room_id: string;
  chatwork_mapping: string;
};
