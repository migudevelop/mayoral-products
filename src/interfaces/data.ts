export interface ProductsResponse {
  products: ProductElement[];
}

export interface ProductElement {
  id: number;
  name: string;
  image: string;
  moreColors: boolean;
  price: number;
  discount: number;
}
