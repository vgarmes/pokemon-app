import React, { useReducer, useContext } from 'react';
import reducer from '../reducer/global_reducer';
import {
  NEXT_PAGE,
  PREV_PAGE,
  UPDATE_SORT,
  UPDATE_PAGE_SIZE,
  UPDATE_SEARCH_TERM,
  UPDATE_SEARCH_CATEGORY,
} from '../actions';

const initialState = {
  page_size: 20,
  page_index: 0,
  sort: 'name-a',
  search_term: '',
  search_category: 'pokemon',
};

const GlobalContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increasePage = () => {
    dispatch({ type: NEXT_PAGE });
  };

  const decreasePage = () => {
    dispatch({ type: PREV_PAGE });
  };

  const updateSort = (sort) => {
    dispatch({ type: UPDATE_SORT, payload: sort });
  };

  const updatePageSize = (value) => {
    dispatch({ type: UPDATE_PAGE_SIZE, payload: value });
  };

  const updateSearchTerm = (value) => {
    dispatch({ type: UPDATE_SEARCH_TERM, payload: value });
  };

  const updateSearchCategory = (value) => {
    dispatch({ type: UPDATE_SEARCH_CATEGORY, payload: value });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        increasePage,
        decreasePage,
        updateSort,
        updatePageSize,
        updateSearchTerm,
        updateSearchCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
