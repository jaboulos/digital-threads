import React from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import './signIn.scss';

// class component bc we need to store what the user enters
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    // prevent default submit from firing
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    // pull both value and name off of event
    const { value, name } = event.target; // target is input value itself
    // bracket notation...if name is password, sets the state for password with the value, if name is email, sets the state for email with the value
    // allows us to pass the same function into the same input, dynamically sets property value
    this.setState({ [name]: value });
  };

  render() {
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
            // handleChange is the name of the prop we are passing now instead of onChange into FromInput
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

          <Button type='submit'>Sign in</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
