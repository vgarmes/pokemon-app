import React, { useReducer, useContext } from 'react';
import reducer from '../reducer/global_reducer';
import { NEXT_PAGE, PREV_PAGE } from '../actions';

const initialState = {
  page_size: 20,
  page_index: 0,
};

const GlobalContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextPage = () => {
    dispatch({ type: NEXT_PAGE });
  };

  const prevPage = () => {
    dispatch({ type: PREV_PAGE });
  };

  return (
    <GlobalContext.Provider value={{ ...state, nextPage, prevPage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
