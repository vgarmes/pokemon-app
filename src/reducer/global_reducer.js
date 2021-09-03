import {
  NEXT_PAGE,
  PREV_PAGE,
  GET_POKEMONS_BEGIN,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
  GET_SINGLE_POKEMON_BEGIN,
  GET_SINGLE_POKEMON_SUCCESS,
  GET_SINGLE_POKEMON_ERROR,
  UPDATE_SORT,
  SORT_POKEMONS,
} from '../actions';

const global_reducer = (state, action) => {
  if (action.type === NEXT_PAGE) {
    return { ...state, page_index: state.page_index + 1 };
  }

  if (action.type === PREV_PAGE) {
    return { ...state, page_index: state.page_index - 1 };
  }

  if (action.type === GET_POKEMONS_BEGIN) {
    return { ...state, pokemons_loading: true };
  }

  if (action.type === GET_POKEMONS_SUCCESS) {
    return { ...state, pokemons_loading: false };
  }

  if (action.type === GET_POKEMONS_ERROR) {
    return { ...state, pokemons_loading: false, pokemons_error: true };
  }

  if (action.type === GET_SINGLE_POKEMON_BEGIN) {
    return { ...state, single_pokemon_loading: true };
  }

  if (action.type === GET_SINGLE_POKEMON_SUCCESS) {
    const { id, name, weight, height, abilities, sprites } = action.payload;
    const newPokemon = {
      id,
      name,
      weight,
      height,
      abilities: abilities.map(({ ability }) => ability.name),
      artwork: sprites.other['official-artwork']['front_default'],
    };
    return {
      ...state,
      single_pokemon_loading: false,
      pokemons: [...state.pokemons, newPokemon],
    };
  }

  if (action.type === GET_SINGLE_POKEMON_ERROR) {
    return {
      ...state,
      single_pokemon_loading: false,
      single_pokemon_error: true,
    };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_POKEMONS) {
    const { sort } = state;
    let tempPokemons = [...state.pokemons];
    console.log('sorting');

    if (sort === 'name-a') {
      tempPokemons.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === 'name-z') {
      tempPokemons.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return { ...state, pokemons: tempPokemons };
  }
  throw new Error(`No matching "${action.type} - action type`);
};

export default global_reducer;
