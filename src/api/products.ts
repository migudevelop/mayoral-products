import { constants } from 'utils';

export const getAllProducts = (): Promise<Response> => fetch(`${constants.BASE_URL}/products`);

export const getFilteredProducts = (name: string): Promise<Response> =>
  fetch(`${constants.BASE_URL}/products?name=${name}`);
