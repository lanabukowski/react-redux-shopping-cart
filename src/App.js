import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import CartPage from './pages/cartPage/cartPage';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;



