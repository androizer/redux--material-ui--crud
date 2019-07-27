import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import NavigationDrawer from './components/NavigationDrawer';
import store from './store';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <NavigationDrawer/>
        </Provider>
      </div>
    );
  }
}

export default App;
