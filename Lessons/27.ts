function formatPrice(price?: number | null) {
  if (price === null || price === undefined) {
    return '$0.00';
  }
  const roundedPrice = Number(price).toFixed(2);
  return '$' + roundedPrice;
}