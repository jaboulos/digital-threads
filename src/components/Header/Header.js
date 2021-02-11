import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectCartHidden } from '../../selectors/cartSelectors';
import { selectCurrentUser } from '../../selectors/userSelectors';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import './header.scss';

// state here is the top level 'root-reducer'
// syntax for destructuring nested values
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
});

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    {/* logo that links to homepage on click */}
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

export default connect(mapStateToProps)(Header);
