import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// tool for saving state of a user that has signed in
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';

// leave here, used for adding / updating data in Firebase
// import { selectCollectionsForPreview } from './selectors/shopSelectors';

import Checkout from './pages/Checkout/Checkout';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';

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

        // *** updates firebase db with shop_data
        // *** only run this once to add to collections in FB
        // addCollectionAndDocuments(
        //   'collections',
        //   collectionsArray.map(({ title, items }) => ({ title, items }))
        // );
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
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  // leave comment in, run once to update or add collection from shop_data
  // collectionsArray: selectCollectionsForPreview(state),
});

const mapDispatchToProps = (dispatch) => ({
  // dispatching user object
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
