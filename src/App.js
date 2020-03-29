import React from 'react';
import './App.css';
import HomePageComp from './pages/homePgaeComp/homePageComp';
import {Switch,Route, Router} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

function App() {
  return (
    <div className="body">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePageComp}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
