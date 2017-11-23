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

  renderErrors() {
    return (
      <ul className='errors-list'>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className='signup-component'>
        <header className='signup-navbar'>
          <img src='https://www.seeklogo.net/wp-content/uploads/2017/02/bandcamp-logo.png'/>
        </header>

        <div className='signup-container'>
          <h2 className='signup-header'>Sign Up for a bandstand account</h2>
          <div className='dividor'></div>
          <br />
          <form className='signup-form'>
            <p>Email address</p>
              <input
                type='text'
                value={this.state.email}
                onChange={this.handleInput('email')}
                />

              <p>Password</p>
              <input
                type='password'
                value ={this.state.password}
                onChange={this.handleInput('password')}
                />

              <p>Username</p>
              <input
                type='text'
                value={this.state.username}
                onChange={this.handleInput('username')}
                />

              <p>Band Name</p>
              <input
                type='text'
                value={this.state.band_name}
                onChange={this.handleInput('band_name')}
                />

            {this.renderErrors()}

            <button
              className='signup-button'
              onClick={this.handleSubmit}> Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
