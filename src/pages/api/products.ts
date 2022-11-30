import { dbProducts } from 'database';
import { ProductElement, ProductsResponse } from 'interfaces';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  products: ProductElement[];
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { name } = req.query;
  const { products }: ProductsResponse = await dbProducts.getAllProducts();
  let sendProducts: ProductElement[] = products;
  if (name) {
    sendProducts = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(`${name}`.toLocaleLowerCase()),
    );
  }
  res.status(200).json({ products: sendProducts, message: 'Proceso realizado correctamente' });
}
