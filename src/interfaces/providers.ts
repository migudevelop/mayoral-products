import { SET_ZOOM_PRODUCTS, SET_PRODUCTS_ORDER } from 'providers';

export type ZoomProducts = 'MIN' | 'MAX';
export type ProductOrder = 'DESC' | 'ASC';

export type UIActionType =
  | { type: typeof SET_ZOOM_PRODUCTS; payload: ZoomProducts }
  | { type: typeof SET_PRODUCTS_ORDER; payload: ProductOrder };

export interface UIState {
  zoomProducts: ZoomProducts;
  productOrder: ProductOrder;
}

export interface UIContextProps {
  zoomProducts: ZoomProducts;
  productOrder: ProductOrder;
  setZoomProducts: (zoom: ZoomProducts) => void;
  setProductOrder: (order: ProductOrder) => void;
}
