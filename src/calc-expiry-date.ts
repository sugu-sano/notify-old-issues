export function calc_expiry_date(valid_days: number): Date {
  return new Date(Date.now() - valid_days * 24 * 60 * 60 * 1000);
}
