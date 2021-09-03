import React from 'react';
import { SearchBar, PokemonList } from '../components';
import { useGlobalContext } from '../context/global_context';

const Home = () => {
  const { search_term } = useGlobalContext();
  return (
    <>
      <SearchBar />
      {search_term ? <SearchResults /> : <PokemonList />}
    </>
  );
};

export default Home;
