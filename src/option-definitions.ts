import { OptionDefinition } from 'command-line-args';

/**
 * コマンドラインオプションの定義です。
 */
export const optionDefinitions: OptionDefinition[] = [
  { name: 'owner', type: String }, // GitHubのリポジトリオーナー名
  { name: 'repository', type: String }, // GitHubのリポジトリ名
  { name: 'valid_days', type: Number }, // 有効期限（日数）を指定するオプション
  { name: 'issue_state', type: String, defaultValue: 'open' }, // イシューの状態（openまたはclosed）を指定するオプション。デフォルトはopen。
  { name: 'chatwork_room_id', type: String }, // ChatworkのルームIDを指定するオプション
  { name: 'chatwork_mapping', type: String }, // ChatworkとGitHubユーザー名のマッピングファイルを指定するオプション
];
