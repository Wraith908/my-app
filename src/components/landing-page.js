import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.handleLogoutSubmit(event);
  }
  render() {
    const name = this.props.name;
    const editor = this.props.editor;
    return (
      <div>
        <div className = "header">
        <header className = "header">
          <h1>UoNBegin</h1>
          <p>Welcome {editor ? 'Editor ' : 'Student '}{name}</p>
        </header>
        <nav>
          
        </nav>
        </div>
        <footer id = "footer">
          <p>C3303694</p>
          <form onSubmit = {this.handleSubmit}>
            <input type = "submit" value = "Logout" />
          </form>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
