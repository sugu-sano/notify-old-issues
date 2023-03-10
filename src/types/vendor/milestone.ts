import { State } from './state';

/**
 * GitHubのマイルストーンを表す型です。
 */
export type Milestone = {
  /** マイルストーンのAPI URL */
  url: string;
  /** マイルストーンのHTML URL */
  html_url: string;
  /** マイルストーンに関連するラベル一覧のURL */
  labels_url: string;
  /** マイルストーンのID */
  id: number;
  /** マイルストーンのノードID */
  node_id: string;
  /** マイルストーンの番号 */
  number: number;
  /** マイルストーンのタイトル */
  title: string;
  /** マイルストーンの説明（null可能）*/
  description: null | string;
  /** マイルストーンに属する未解決の課題数 */
  open_issues: number;
  /** マイルストーンに属する解決済みの課題数 */
  closed_issues: number;
  /** マイルストーンの状態（open, closed, all） */
  state: State;
  /** マイルストーンが作成された日時 */
  created_at: Date;
  /** マイルストーンが更新された日時 */
  updated_at: Date;
  /** マイルストーンが期限切れになる日時（null可能）*/
  due_on: null;
  /** マイルストーンが閉じられた日時（null可能）*/
  closed_at: null;
};
