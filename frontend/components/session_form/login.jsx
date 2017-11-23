import React from 'react';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
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

  handleSubmitDemo(e) {
    e.preventDefault();
    // redirects new user to landing page
    const demo = {username: 'lanadellrey', password: 'password'};
    this.props.signup(demo)
      .then( () => this.props.history.push('/'));
  }

  renderErrors() {
    return (
      <ul className='error-list'>
        {this.props.errors.map(error => (
          <li>{error}</li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className='login-component'>
        <header className='login-navbar'>
          <img src='https://www.seeklogo.net/wp-content/uploads/2017/02/bandcamp-logo.png'/>
        </header>

        <div className='login-container'>
          <h2>Log in</h2>
          <div className='dividor'></div>
          <br />
          <form className='login-form'>
            <p>Username</p>
            <input
              className='username-input'
              type='text'
              value={this.state.username}
              onChange={this.handleInput('username')}
            />

            <p>Password</p>
            <input
              type='password'
              value ={this.state.password}
              onChange={this.handleInput('password')}
            />

            {this.renderErrors()}

            <button
              className='login-button'
              onClick={this.handleSubmit}> Log in</button>

            <button
              className='login-button'
              onClick={this.handleSubmitDemo}> Demo Log In</button>
            <br />
            <p className='no-account'>
              Don’t have an account?
                <Link to='/signup'>
                  <strong className='inline-link'> Sign up </strong>
              </Link>now.
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default LogIn;
