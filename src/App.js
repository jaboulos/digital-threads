import React from 'react';
import { Switch, Route } from 'react-router-dom';
// tool for saving state of a user that has signed in
import { auth } from './firebase/firebase.utils';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import Header from './components/Header/Header';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  // subscriber to firebase, subscribes to the state of a user that has signed in or out
  componentDidMount() {
    // user parameter is what the user state is of the auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      // set currentUser to the user object
      this.setState({ currentUser: user });
      // console.log('user', user);
    });
  }

  // close subscription when component unmounts
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
