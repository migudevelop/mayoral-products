import { constants, helpers } from '../../utils';
import { ProductElement } from 'interfaces';

describe('Calculate price with calculatePriceWithOffer function', () => {
  test('Calculate price', () => {
    const result = 17;
    expect(helpers.calculatePriceWithOffer(20, 30)).toStrictEqual(result);
  });
});

describe('Sort products by price with sortProductsByPrice function', () => {
  const INITIAL_PRODUCTS: ProductElement[] = [
    { id: 1, name: 'product1', price: 100, discount: 0, image: '', moreColors: true },
    { id: 2, name: 'product2', price: 100, discount: 10, image: '', moreColors: true },
    { id: 3, name: 'product3', price: 100, discount: 20, image: '', moreColors: true },
    { id: 4, name: 'product4', price: 100, discount: 30, image: '', moreColors: true },
  ];

  test('Sort ascending products', () => {
    const result: ProductElement[] = [
      { id: 4, name: 'product4', price: 100, discount: 30, image: '', moreColors: true },
      { id: 3, name: 'product3', price: 100, discount: 20, image: '', moreColors: true },
      { id: 2, name: 'product2', price: 100, discount: 10, image: '', moreColors: true },
      { id: 1, name: 'product1', price: 100, discount: 0, image: '', moreColors: true },
    ];
    expect(helpers.sortProductsByPrice(INITIAL_PRODUCTS, constants.ASC_ORDER)).toStrictEqual(
      result,
    );
  });

  test('Sort descending products', () => {
    const result: ProductElement[] = [
      { id: 1, name: 'product1', price: 100, discount: 0, image: '', moreColors: true },
      { id: 2, name: 'product2', price: 100, discount: 10, image: '', moreColors: true },
      { id: 3, name: 'product3', price: 100, discount: 20, image: '', moreColors: true },
      { id: 4, name: 'product4', price: 100, discount: 30, image: '', moreColors: true },
    ];
    expect(helpers.sortProductsByPrice(INITIAL_PRODUCTS, constants.DESC_ORDER)).toStrictEqual(
      result,
    );
  });
});
