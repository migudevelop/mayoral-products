import { constants } from 'utils';
import { UIActionType, UIState } from 'interfaces';
import { SET_ZOOM_PRODUCTS, SET_PRODUCTS_ORDER } from './uiTypes';

export const UI_INITIAL_STATE: UIState = {
  zoomProducts: constants.MIN_ZOOM,
  productOrder: constants.DESC_ORDER,
};

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case SET_ZOOM_PRODUCTS:
      return {
        ...state,
        zoomProducts: action.payload,
      };
    case SET_PRODUCTS_ORDER:
      return {
        ...state,
        productOrder: action.payload,
      };

    default:
      return state;
  }
};
