import products from './data/products.json';
import { ProductsResponse } from 'interfaces';

export const getAllProducts = async (): Promise<ProductsResponse> => products;
