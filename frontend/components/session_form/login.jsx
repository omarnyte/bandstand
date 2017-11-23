import React from 'react';

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

        </header>

        <div className='login-container'>
          <h2>Log in</h2>
          <div className='dividor'></div>
          <br />
          <form className='login-form'>
            <label>Username
              <input
                className='username-input'
                type='text'
                value={this.state.username}
                onChange={this.handleInput('username')}
                />
            </label>

            <label>Password
              <input
                type='password'
                value ={this.state.password}
                onChange={this.handleInput('password')}
                />
            </label>
            {this.renderErrors()}

            <button
              className='login-button'
              onClick={this.handleSubmit}> Log in</button>

            <button
              className='login-button'
              onClick={this.handleSubmitDemo}> Demo Log In</button>

            <p>Don’t have an account? Sign up</p>
          </form>
        </div>
      </div>
    );
  }
}

export default LogIn;
