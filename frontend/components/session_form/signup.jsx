import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      band_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // redirects new user to landing page
    this.props.signup(this.state)
      .then( () => this.props.history.push('/'));
  }

  render () {
    return (
      <div className='signup-div'>
        <h2>Sign Up for a Bandcamp account</h2>
        <form className='login-form'>
          <label>Email address
            <input
              type='text'
              value={this.state.email}
              onChange={this.handleInput('email')}
              />
          </label>

          <label>Password
            <input
              type='password'
              value ={this.state.password}
              onChange={this.handleInput('password')}
              />
          </label>

          <label>Username
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </label>

          <label>Band Name
            <input
              type='text'
              value={this.state.band_name}
              onChange={this.handleInput('band_name')}
              />
          </label>

          <button
            className='login-button'
            onClick={this.handleSubmit}> Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
