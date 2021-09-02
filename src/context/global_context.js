import React, { useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import reducer from '../reducer/global_reducer';
import {
  NEXT_PAGE,
  PREV_PAGE,
  GET_POKEMONS_BEGIN,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
  GET_SINGLE_POKEMON_BEGIN,
  GET_SINGLE_POKEMON_SUCCESS,
  GET_SINGLE_POKEMON_ERROR,
  SORT_POKEMONS,
} from '../actions';
import { POKE_LIMIT, pokemons_url } from '../utils/constants';

const initialState = {
  page_size: 20,
  page_index: 0,
  pokemons_loading: false,
  pokemons_error: false,
  single_pokemon_loading: false,
  single_pokemon_error: false,
  pokemons: [],
  sort: 'id',
  order: 'asc',
};

const GlobalContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPokemons = async (url, limit) => {
    dispatch({ type: GET_POKEMONS_BEGIN });
    try {
      const response = await axios.get(`${url}?limit=${limit}`);
      const pokemons = response.data.results;

      for (let i = 0; i < pokemons.length; i++) {
        await fetchSinglePokemon(pokemons[i].url);
      }

      dispatch({ type: GET_POKEMONS_SUCCESS });
    } catch (error) {
      dispatch({ type: GET_POKEMONS_ERROR });
    }
  };

  const fetchSinglePokemon = async (url) => {
    dispatch({ type: GET_SINGLE_POKEMON_BEGIN });
    try {
      const response = await axios.get(url);
      const singlePokemon = response.data;
      dispatch({ type: GET_SINGLE_POKEMON_SUCCESS, payload: singlePokemon });
    } catch (error) {
      dispatch({ type: GET_SINGLE_POKEMON_ERROR });
    }
  };

  const nextPage = () => {
    dispatch({ type: NEXT_PAGE });
  };

  const prevPage = () => {
    dispatch({ type: PREV_PAGE });
  };

  const sortPokemons = (sort, order) => {
    dispatch({ type: SORT_POKEMONS, payload: { sort, order } });
  };

  useEffect(() => {
    fetchPokemons(pokemons_url, POKE_LIMIT);
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state, nextPage, prevPage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
