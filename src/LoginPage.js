import React, {Component} from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.handleLoginChange(event);
  }

  handleSubmit(event) {
    this.props.handleLoginSubmit(event);
  }

  render() {
    const name = this.props.name;
    const password = this.props.password;
    const editor = this.props.editor;
    return (
      <div>
        <h1>Log In</h1>
        <div className = "loginForm">
          <form onSubmit = {this.handleSubmit}>
            <label>
              Name:
              <input name = "name" type = "text" value = {name} onChange = {this.handleChange} />
            </label>
            <br />
            <label>
              Password:
              <input name = "password" type = "password" value = {password} onChange = {this.handleChange} />
            </label>
            <br />
            <label>
              Tickme:
              <input name = "editor" type = "checkbox" checked = {editor} onChange = {this.handleChange} />
            </label>
            <br />
            <input type = "submit" value = "Login" />
          </form>
        </div>
        <footer id = "footer">
          <p>C3303694</p>
        </footer>
      </div>
    );
  }
}

export default LoginPage;
