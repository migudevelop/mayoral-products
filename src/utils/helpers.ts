import { ProductElement, ProductOrder } from 'interfaces';
import { constants } from 'utils';

export const calculatePriceWithOffer = (price: number, discount: number): number =>
  price - (price * discount) / 100;

const comparePrices = (a: number, b: number): number => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
  return 0;
};

export const sortProductsByPrice = (
  products: ProductElement[] = [],
  order: ProductOrder = constants.DESC_ORDER,
): ProductElement[] =>
  products?.sort((a, b) => {
    const priceB = a.discount ? calculatePriceWithOffer(a.price, a.discount) : a.price;
    const priceA = b.discount ? calculatePriceWithOffer(b.price, b.discount) : b.price;
    if (order === 'ASC') {
      return comparePrices(priceB, priceA);
    }
    return comparePrices(priceA, priceB);
  });
