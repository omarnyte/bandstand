import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      band_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const band = Object.assign({}, this.state);
    this.props.processForm(band);
  }

  demoLoginButton () {
    if (this.props.formType === 'login') {
      return <input
        className='session-submit-button'
        type='submit'
        value='Demo Log In' />;
    }
  }

  navLink() {
  if (this.props.formType === 'login') {
    return <Link to="/signup">sign up instead</Link>;
  } else {
    return <Link to="/login">log in instead</Link>;
  }


}

  render() {
      return (
        <div className='session-form-div'>
          <form onSubmit={this.handleSubmit}>
            Welcome to bandstand!
            <br/>
            Please {this.props.formType} or {this.navLink()}
            <div className='session-inputs-div'>
              <br/>
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                />
              </label>
              <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              <br/>
              <input
                className='session-submit-button'
                type='submit'
                value='Submit' />
              <br/>
              {this.demoLoginButton()}
            </div>
          </form>
        </div>
      );
  }
}

export default withRouter(SessionForm);
