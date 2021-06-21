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
          <li><Tile title = "ErlKonig"
          tileType = "university-expectations"
          content = "Wer reitet so spät durch Nacht und Wind? Es ist der Vater mit seinem Kind; Er hat den Knaben wohl in dem Arm, Er faßt ihn sicher, er hält ihn warm. Mein Sohn, was birgst du so bang dein Gesicht? – Siehst, Vater, du den Erlkönig nicht? Den Erlenkönig mit Kron' und Schweif? –Mein Sohn, es ist ein Nebelstreif." /></li>
          <li><Tile title = "Lorem Ipsum"
          tileType = "university-expectations"
          content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et nisi hendrerit, hendrerit nisi sed, bibendum lectus. Fusce posuere eget risus a mattis. In hac habitasse platea dictumst. Nullam molestie rutrum finibus. Aenean id hendrerit sapien. Donec laoreet pellentesque augue non porta. Maecenas mollis pharetra turpis sit amet blandit. Praesent." /></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default UniversityExpectations;
