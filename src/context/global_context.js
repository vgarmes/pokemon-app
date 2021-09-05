import React, { useReducer, useContext, useEffect } from 'react';
import reducer from '../reducer/global_reducer';
import {
  NEXT_PAGE,
  PREV_PAGE,
  RESTART_PAGE,
  UPDATE_SORT,
  UPDATE_PAGE_SIZE,
  UPDATE_SEARCH_TERM,
  UPDATE_SEARCH_CATEGORY,
} from '../actions';

const defaultState = {
  page_size: 20,
  page_index: 0,
  sort: 'name-a',
  search_term: '',
  search_category: 'pokemon',
};

const getLocalStorage = () => {
  let userData = localStorage.getItem('user_data');
  if (userData) {
    return JSON.parse(localStorage.getItem('user_data'));
  } else {
    return defaultState;
  }
};

const initialState = getLocalStorage();

const GlobalContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increasePage = () => {
    dispatch({ type: NEXT_PAGE });
  };

  const decreasePage = () => {
    dispatch({ type: PREV_PAGE });
  };

  const restartPage = () => {
    dispatch({ type: RESTART_PAGE });
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

  useEffect(() => {
    localStorage.setItem('user_data', JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        increasePage,
        decreasePage,
        restartPage,
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
