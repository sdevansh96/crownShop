import React from 'react';
import './App.css';
import HomePageComp from './pages/homePgaeComp/homePageComp';
import { Switch, Route, Router } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      currentUser:null
    }
  }
  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser:user
      })
    })
  }
  render() {
    return (
      <div className="body">
        <Header user={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePageComp} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
