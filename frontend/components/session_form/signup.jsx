import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.signup(this.state)
      .then( () => this.props.history.push('/'));
  }

  renderErrors() {
    return (
      <ul className='errors-list'>
        {this.props.errors.map((error, i) => (
          <li className='errors-item' key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className='signup-component'>
        <header className='signup-navbar'>
          <Link to='/'>
            <img
              className='signup-logo'
              src='https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Site+Images/Bandstand+Logo.png'/>
          </Link>
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


              <p>Username</p>
              <input
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
              className='signup-button'
              onClick={this.handleSubmit}> Sign Up</button>
            <br />
            <p className='has-account'>
              Already have an account?
                <Link to='/login'>
                  <strong className='inline-link'> Log in.</strong>
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
