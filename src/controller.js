import React, {Component} from 'react';
import LoginPage from './page-components/login-page';
import LandingPage from './page-components/landing-page';

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      editor: false,
      isLoggedIn: false
    };
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogoutSubmit = this.handleLogoutSubmit.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    if (this.state.editor && this.state.password === 'SecurePassword')  {
      this.setState({
        isLoggedIn: true
      });
      alert('Login Successful');
    } else if (!this.state.editor) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      alert('Logout Unsuccessful');
    }
  }

  handleLogoutSubmit(event) {
      event.preventDefault();
      this.setState({
        name: '',
        password: '',
        editor: false,
        isLoggedIn: false
      });
      alert('Logout Successful');
  }

  handleLoginChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    const loggedIn = this.state.isLoggedIn;
    return (
      <div>
        {loggedIn
          ? <LandingPage
              name = {this.state.name}
              editor = {this.state.editor}
              handleLogoutSubmit = {this.handleLogoutSubmit}/>
          : <LoginPage
              name = {this.state.name}
              password = {this.password}
              editor = {this.state.editor}
              handleLoginChange = {this.handleLoginChange}
              handleLoginSubmit = {this.handleLoginSubmit}/>
        }
      </div>
    );
  }
}

export default Controller;
