import commandLineArgs, { OptionDefinition } from 'command-line-args';
import { Args } from './types/args';

const optionDefinitions: OptionDefinition[] = [
  { name: 'owner', type: String },
  { name: 'repository', type: String },
  { name: 'valid-days', type: String },
  { name: 'issue-state', type: String, defaultValue: 'open' },
  { name: 'chatwork-room-id', type: String },
];

export function get_args(): Args {
  const options = commandLineArgs(optionDefinitions);

  return {
    owner: options['owner'],
    repository: options['repository'],
    valid_days: options['valid-days'],
    issue_state: options['issue-state'],
    chatwork_room_id: options['chatwork-room-id'],
    chatwork_mapping: options['chatwork-mapping'],
  };
}
