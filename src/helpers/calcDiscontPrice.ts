export function getDiscountPrice(price: string, discount: string) {
  if (!discount) return '';
  return (+price - Math.round(+price * (+discount / 100) * 100) / 100).toFixed(
    2,
  );
}
