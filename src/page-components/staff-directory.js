import React, {Component} from 'react';

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
  const contents = <p>{props.search}</p>
  return (
    <div>
      <ul className = "staff-directory">
        {contents}
      </ul>
    </div>
  );
}

export default StaffDirectory;
