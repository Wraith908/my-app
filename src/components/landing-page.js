import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UniversityServices from './university-services';
import WeekOneSurvivalPack from './week-one-survival-pack';
import StaffDirectory from './staff-directory';
import UniversityExpectations from './university-expectations';
import FAQsAndTestimonials from './faqs-and-testimonials';

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
            <Link to ="/" className = "nav-link">University Services</Link>
            <Link to ="/directory" className = "nav-link">Staff Directory</Link>
            <Link to ="/week-one-survival-pack" className = "nav-link">Week 1 Survival Pack</Link>
            <Link to ="/university-expectations" className = "nav-link">What to expect at Universit</Link>
            <Link to ="/faqs-and-testimonials" className = "nav-link">FAQs and Testionials</Link>
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
          <Route exact path = "/">
            <UniversityServices />
          </Route>
          <Route path = "/directory">
            <StaffDirectory />
          </Route>
          <Route path = "/week-one-survival-pack">
            <WeekOneSurvivalPack />
          </Route>
          <Route path = "/university-expectations">
            <UniversityExpectations />
          </Route>
          <Route path = "/faqs-and-testimonials">
            <FAQsAndTestimonials />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default LandingPage;
