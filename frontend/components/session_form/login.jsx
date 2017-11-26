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

  componentWillMount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // redirects new user to landing page
    this.props.login(this.state)
      .then( () => this.props.history.push('/'));
  }

  handleSubmitDemo(e) {
    e.preventDefault();
    // redirects new user to landing page
    const demo = {username: 'username1', password: 'password'};
    this.props.login(demo)
      .then( () => this.props.history.push('/'));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className='errors-item' key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className='login-component'>
        <header className='login-navbar'>
          <Link to='/'>
            <img
              className='login-logo'
              src='https://www.seeklogo.net/wp-content/uploads/2017/02/bandcamp-logo.png'/>
          </Link>
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
