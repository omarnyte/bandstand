import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  if (nextProps.loggedIn) {
    // TODO for now, redirect to landing page (with updated header)
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

  render() {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit}>
            Welcome to bandstand!
            <br/>
            Please {this.props.formType} or {this.navLink()}
            <div >
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
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      );
  }
}

export default withRouter(SessionForm);
