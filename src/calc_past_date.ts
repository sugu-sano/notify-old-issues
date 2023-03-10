/**
 * 指定された日数分過去の日付を計算する関数。
 *
 * @param days_ago - 過去の日数
 * @returns 過去の日付オブジェクト
 */
export function calc_past_date(days_ago: number): Date {
  const today = new Date();
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - days_ago,
    today.getHours(),
    today.getMinutes(),
    today.getSeconds()
  );
}
