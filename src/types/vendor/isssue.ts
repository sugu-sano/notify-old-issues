import { AuthorAssociation } from './authorassociation';
import { Label } from './label';
import { Milestone } from './milestone';
import { PullRequest } from './pullrequest';
import { State } from './state';
import { User } from './user';

/**
 * GitHub上で発行される問題や要望を表す型です。
 */
export type Issue = {
  /** IssueへのURL */
  url: string;
  /** Issueが属するリポジトリへのURL */
  repository_url: string;
  /** Issueに関連するラベルへのURL */
  labels_url: string;
  /** Issueに対するコメントへのURL */
  comments_url: string;
  /** Issueに関連するイベントへのURL */
  events_url: string;
  /** IssueへのHTML形式でアクセスできるURL */
  html_url: string;
  /** Issueを一意に識別するID */
  id: number;
  /** Issueを一意に識別するノードID */
  node_id: string;
  /** リポジトリ内でIssueを識別する番号 */
  number: number;
  /** Issueのタイトル */
  title: string;
  /** Issueを作成したユーザー */
  user: User;
  /** Issueに付けられたラベルの配列 */
  labels: Label[];
  /** Issueが開かれているか閉じられているかを表す状態（"open"または"closed"）*/
  state: State;
  /**Issueがロックされているかどうか*/
  locked: boolean;
  /**
   *Issueが割り当てられたユーザー
   * @remarks
   * 割り当てられたユーザーがいない場合はnull
   */
  assignee: User | null;
  /**
   *Issueが割り当てられた複数ユーザー
   * @remarks
   * 割り当てられたユーザーがいない場合は空配列
   */
  assignees: User[];
  /**
   *Issueが属するマイルストーン
   * @remarks
   * マイルストーンが設定されていない場合はnull
   */
  milestone: Milestone | null;
  /** Issueに対するコメント数 */
  comments: number;
  /** Issueが作成された日時（ISO8601形式） */
  created_at: Date;
  /** Issueが更新された日時（ISO8601形式） */
  updated_at: Date;
  /** Issueが閉じられた日時（ISO8601形式）
   *@remarks
   * 閉じられていない場合はnull
   */
  closed_at: null;
  /** *Issue作成者とリポジトリオーナーとの関係（"OWNER", "COLLABORATOR", "CONTRIBUTOR", "FIRST_TIMER", "FIRST_TIME_CONTRIBUTOR", "NONE"） */
  author_association: AuthorAssociation;
  /**
   *Issueロック時に表示される理由（現在未使用）
   *@remarks
   * null以外の値はサポートされていない
   */
  active_lock_reason: null;
  /** Issueがプルリクエストである場合に存在するオブジェクト */
  pull_request?: PullRequest;
  /** Issueの本文 */
  body: string;
  /**
   *IssueがGitHubアプリ経由で行われた場合に存在するオブジェクト（現在未使用）
   *@remarks
   * null以外の値はサポートされていない
   */
  performed_via_github_app: null;
};
