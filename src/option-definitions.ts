import { OptionDefinition } from 'command-line-args';

/**
 * コマンドラインオプションの定義です。
 */
export const optionDefinitions: OptionDefinition[] = [
  { name: 'owner', type: String }, // GitHubのリポジトリオーナー名
  { name: 'repository', type: String }, // GitHubのリポジトリ名
  { name: 'valid-days', type: Number }, // 有効期限（日数）を指定するオプション
  { name: 'issue-state', type: String, defaultValue: 'open' }, // イシューの状態（openまたはclosed）を指定するオプション。デフォルトはopen。
  { name: 'chatwork-room-id', type: String }, // ChatworkのルームIDを指定するオプション
  { name: 'chatwork-mapping', type: String }, // ChatworkとGitHubユーザー名のマッピングファイルを指定するオプション
];
