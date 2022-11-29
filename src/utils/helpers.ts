export const calculatePriceWithOffer = (price: number, discount: number): number =>
  price - (price * discount) / 100;
