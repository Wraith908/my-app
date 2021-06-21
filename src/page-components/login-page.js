import React, {Component} from 'react';
import '../style.css';

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
        <Body name = {name} password = {password} editor = {editor} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
        <footer id = "footer">
          <p>Jacob Neilands: C3303694 | Aaron McCool: c3279449 | Ronit Ronit: c3319077 | Aun Ali: 3216616</p>
        </footer>
      </div>
    );
  }
}

function Body(props) {
  if (props.editor) {
    return (
      <div className = "loginForm">
        <h1>Log In</h1>
        <form onSubmit = {props.handleSubmit}>
          <label>
            Name:
            <input name = "name" type = "text" value = {props.name} onChange = {props.handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input name = "password" type = "password" value = {props.password} onChange = {props.handleChange} required/>
          </label>
          <br />
          <label>
            I need to edit the website:
            <input name = "editor" type = "checkbox" checked = {props.editor} onChange = {props.handleChange} />
          </label>
          <br />
          <input type = "submit" value = "Login" />
        </form>
      </div>
    );
  } else {
    return (
      <div className = "loginForm">
        <h1>Welcome Student!</h1>
        <form onSubmit = {props.handleSubmit}>
            <label>
              I'm not a student:
              <input name = "editor" type = "checkbox" checked = {props.editor} onChange = {props.handleChange} />
            </label>
            <br />
            <input type = "submit" value = "Login" />
        </form>
      </div>
    );
  }
}
export default LoginPage;
