import React, {Component} from 'react';
import Tile from '../components/Tile';
import '../style.css';import '../style.css';

class StaffDirectory extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      searchQuery: '',
      searchResults: ['Seng','Comp','Inft','Elec']
    };
  }

  handleSearchChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div class = "page-container">
        <div class = "sidebar">
          <h1>Staff Directory</h1>
          <input
          name = "searchQuery"
          type = "text"
          placeholder = "Who are you looking for?"
          value = {this.state.searchQuery}
          onChange = {this.handleSearchChange}
          maxlength = "25"/>
        </div>
        <div class = "search-results">
          <GenerateStaffList search = {this.state.searchQuery} />
        </div>
      </div>
    );
  }
}

function GenerateStaffList(props) {
  const lecturers = [
    ['Alexandre Mendes','Alexandre Mendes is a really cool dude'],
    ['Teuku Aulia Guempana','Teuku Alia Guempana is a really cool dude'],
    ['Simon Pegg','Simon Pegg is an actor moonlighting a an IT professor'],
    ['Lorem Ipsum','Tends to ramble alot but has strong core knowledge'],
    ['Bogo Sort','His tangents tend to spur off in random directions'],
    ['Nick Frost','Heard Simon Pegg was here and tagged along']
  ];
  const contents = lecturers.map(lecturer => {
    const lecName = lecturer.[0]
    const lecBody = lecturer.[1]
    const search = props.search
    if (search === null) {search = "";}
    if (lecName.includes(search) || lecBody.includes(search)) {
      return <li> <Tile tileType = "staff-listing" title = {lecName} content = {lecBody} /> </li>;
  }});
  return (
    <div>
      <ul className = "staff-directory">
        {contents}
      </ul>
    </div>
  );
}

export default StaffDirectory;
