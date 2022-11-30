import products from './data/products.json';
import { ProductsResponse } from 'interfaces';

export const getProductsByName = async (name: string): Promise<ProductsResponse> => {
  if (name === '') {
    return JSON.parse(JSON.stringify({ products: [] }));
  }
  return JSON.parse(JSON.stringify(products));
};

export const getAllProducts = async (): Promise<ProductsResponse> =>
  JSON.parse(JSON.stringify(products));
