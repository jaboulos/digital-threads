import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// tool for saving state of a user that has signed in
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import Header from './components/Header/Header';
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  // subscriber to firebase, subscribes to the state of a user that has signed in or out
  componentDidMount() {
    const { setCurrentUser } = this.props;
    // user parameter is what the user state is of the auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          // snapshot has data from user
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // set currentUser too null
        setCurrentUser(userAuth);
      }
    });
  }

  // close subscription when component unmounts
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // dispatching user object
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// first argument is null (mapStateToProps) app.js doesnt need it right now
export default connect(null, mapDispatchToProps)(App);
