import { act, render, screen } from '@testing-library/react';
import { ProductElement } from 'interfaces';
import HomePage from '../../pages';

const INITIAL_PRODUCTS: ProductElement[] = [
  { id: 1, name: 'product1', price: 100, discount: 0, image: '', moreColors: true },
  { id: 2, name: 'product2', price: 100, discount: 10, image: '', moreColors: true },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        products: [
          { id: 1, name: 'product1', price: 100, discount: 0, image: '', moreColors: true },
          { id: 2, name: 'product2', price: 100, discount: 10, image: '', moreColors: true },
        ],
      }),
  }),
) as jest.Mock;

describe('Render Homepage', () => {
  test('Should be render component with Ordenar por Precio text', async () => {
    await act(async () => {
      render(<HomePage products={INITIAL_PRODUCTS} />);
    });
    const element = await screen.getByText(/Precio ASC/i);
    expect(element).toBeInTheDocument();
  });

  test('Should be render component with products', async () => {
    await act(async () => {
      render(<HomePage products={INITIAL_PRODUCTS} />);
    });
    await screen.getByText(/Precio ASC/i);
    const product = await screen.getByText(/product1/i);
    expect(product).toBeInTheDocument();
  });
});
