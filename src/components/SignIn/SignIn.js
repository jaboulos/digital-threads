import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import './signIn.scss';

const errorMessages = {
  invalidUsernameOrPassword: 'Invalid username or password',
};
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      // if above succeeds, clear email and pw from state
      this.setState({ email: '', password: '', error: false });
    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
      });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { error } = this.state;
    return (
      // div contains entire SignIn component
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          {error ? (
            <span className='error'>
              {errorMessages.invalidUsernameOrPassword}
            </span>
          ) : null}
          <div className='buttons'>
            <Button type='submit'>Sign in</Button>
            {/* sign in with google oauth */}
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
