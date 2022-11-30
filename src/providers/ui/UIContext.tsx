import { createContext, useContext } from 'react';
import { UIContextProps } from 'interfaces';

export const UIContext = createContext({} as UIContextProps);

export const useUiState = (): UIContextProps => useContext(UIContext);
