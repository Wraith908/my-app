import React, {Component} from 'react';

class StaffDirectory extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange() {
    //Submit button is unneccessary but should be fine
  }

  render() {
    return (
      <div class = "page-container">
        <div class = "sidebar">
          <h1>Staff Directory</h1>
          <input type = "text" placeholder = "Who are you looking for?" />
        </div>
        <div class = "search-results">
          <ul class = "directory-results">

          </ul>
        </div>
      </div>
    );
  }
}

export default StaffDirectory;
