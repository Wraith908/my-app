import React, {Component} from 'react';
import FAQTile from '../components/FAQTile';
class FAQsAndTestimonials extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="faqs-and-testimonials">
          <h1>FAQs and Testimonials</h1>
          <ul>
            //I need some way of filtering dummy data
            //However I don't need to implement db interactions yet
            //
          </ul>
        </div>
      </div>
    );
  }
}

export default FAQsAndTestimonials;
