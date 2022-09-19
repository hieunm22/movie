export function formatNumber(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n)
}
