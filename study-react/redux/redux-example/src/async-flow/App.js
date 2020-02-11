import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import AsyncApp from './containers/AsyncApp';

function App() {
  return (
    <Provider store={store}>
      <AsyncApp />
    </Provider>
  )
}

export default App