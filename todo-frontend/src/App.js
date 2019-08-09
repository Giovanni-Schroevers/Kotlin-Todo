import React from 'react';
import { Provider } from 'react-redux'

import './App.css';
import Todos from './redux';
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todos/>
      </Provider>
    </div>
  );
}

export default App;
