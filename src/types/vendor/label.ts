/**
 * GitHubのラベルを表す型です。
 */
export type Label = {
  /** ラベルのID */
  id: number;
  /** ラベルのノードID */
  node_id: string;
  /** ラベルのAPI URL */
  url: string;
  /** ラベルの名前 */
  name: string;
  /** ラベルの色（16進数）*/
  color: string;
  /** デフォルトのラベルかどうか */
  default: boolean;
  /** ラベルの説明 */
  description: string;
};