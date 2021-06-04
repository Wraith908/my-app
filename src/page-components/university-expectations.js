import React, {Component} from 'react';
import Tile from '../components/Tile';
import '../style.css';

class UniversityExpectations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>University Expecations</h1>
        <div>
          <ul>
          <li><Tile title = "Your classes treat you as an adult"
          tileType = "university-expectations"
          content = "One of the biggest changes from high school classes is the shift in attitude towards your education. University learning is your responsibility and the freedom that comes with that is yours to do as you please. No one is going to make you attend classes you don't want to attend but if you don't pass then it's your time and money" /></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default UniversityExpectations;
