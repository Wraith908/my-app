import React, {Component} from 'react';

class UniversityServices extends Component{
  constructor(props) {
    super(props);
    this.getServices = this.getServices.bind(this);
  }

  getServices() {
    
    return (<li>Not Broken Yet</li>);
  }

  render() {
    const servicesList = this.getServices();
    return (
      <div>
        <div class="faqs-and-testimonials">
          <h1>What uni can do for you</h1>
          <ul>
            {servicesList}
          </ul>
        </div>
      </div>
    );
  }
}

export default UniversityServices;
