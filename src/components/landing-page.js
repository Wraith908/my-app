import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
      <Router>
        <div>
          <div className = "header">
          <header className = "header">
            <h1>UoNBegin</h1>
            <p>Welcome {editor ? 'Editor ' : 'Student '}{name}</p>
          </header>
          <nav>
            <Link to ="/">University Services</Link>//Uni services and how to access information
            <Link to ="/directory">Staff Directory</Link>//"Directory" for the faculty, discipline and school
            <Link to ="/week-one-survival-pack">Week 1 Survival Pack</Link>//Week 1 Survival Pack
            <Link to ="/university-expectations">What to expect at University</Link>//What uni looks and feels like
            <Link to ="/faqs-and-testimonials">FAQs and Testionials</Link>//Faqs and Testimonials
          </nav>
          </div>
          <footer id = "footer">
            <p>C3303694</p>
            <form onSubmit = {this.handleSubmit}>
              <input type = "submit" value = "Logout" />
            </form>
          </footer>
        </div>
        <Switch>
          <Route path = "/">
            
          </Route>
          <Route path = "/directory">

          </Route>
          <Route path = "/week-one-survival-pack">

          </Route>
          <Route path = "/university-expectations">

          </Route>
          <Route path = "/faqs-and-testimonials">

          </Route>
        </Switch>
      </Router>
    );
  }
}

export default LandingPage;
