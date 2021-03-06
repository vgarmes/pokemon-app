import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Pokemon, Error } from './pages';
import { Layout } from './components';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokemons/:pokemonId">
          <Pokemon />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
