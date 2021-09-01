import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Error } from './pages';
import { Layout } from './components';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Error} />
      </Switch>
    </Layout>
  );
}

export default App;
