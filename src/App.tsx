import React from 'react';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { Fabric } from 'office-ui-fabric-react';
import * as models from './models';
import Routes from './components/Routes';

const store = init({
  models,
});

export default function App() {
  return (
    <Provider store={store}>
      <Fabric>
        <Router>
          <Routes />
        </Router>
      </Fabric>
    </Provider>
  );
}
