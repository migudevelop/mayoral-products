import { ProductOrder, ZoomProducts } from 'interfaces';
import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer, UI_INITIAL_STATE, SET_ZOOM_PRODUCTS, SET_PRODUCTS_ORDER } from '.';

interface Props {
  children?: ReactNode | undefined;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const setZoomProducts = (zoom: ZoomProducts) => {
    dispatch({ type: SET_ZOOM_PRODUCTS, payload: zoom });
  };
  const setProductOrder = (order: ProductOrder) => {
    dispatch({ type: SET_PRODUCTS_ORDER, payload: order });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        setZoomProducts,
        setProductOrder,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
