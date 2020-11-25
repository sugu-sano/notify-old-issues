import { State } from './state';

export type Milestone = {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  description: null | string;
  open_issues: number;
  closed_issues: number;
  state: State;
  created_at: Date;
  updated_at: Date;
  due_on: null;
  closed_at: null;
};
