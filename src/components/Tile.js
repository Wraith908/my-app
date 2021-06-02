import React, {Component} from 'react';
import '../style.css';

class Tile extends Component {
  constructor(props) {
    super(props);
  }
  //In the future this will need to connect to a database
  render() {
    return(
      <div class = {this.props.tileType}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Tile;
