/**
 * 配列を指定されたキーでグループ化する関数です。
 *
 * @param array - グループ化したい配列です。
 * @param get_key - 配列の各要素からキーを取得する関数です。
 * @returns キーと要素の配列のペアを持つオブジェクトを返します。
 */
export function group_by<K extends PropertyKey, V>(
  array: readonly V[],
  get_key: (cur: V, idx: number, src: readonly V[]) => K
): Record<string | number | symbol, V[]> {
  return array.reduce((obj, cur, idx, src) => {
    const key = get_key(cur, idx, src);
    (obj[key] || (obj[key] = []))?.push(cur);
    return obj;
  }, {} as Record<K, V[]>);
}
