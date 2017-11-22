import React from 'react';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
      <div>
        <h2>Log In</h2>
        <form>
          <label>Username
            <input
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

          <button onClick={this.handleSubmit}> Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
