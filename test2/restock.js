export function calculateRestockQuantity(currentStock, targetStock) {
  // BUG: This calculation was wrong. (it was currentStock - targetStock)
  const quantityToOrder = targetStock - currentStock;

  return Math.max(0, quantityToOrder);
}