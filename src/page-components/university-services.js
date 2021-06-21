import React, {Component} from 'react';
import Tile from '../components/Tile';
import '../style.css';

class UniversityServices extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="university-services">
          <h1>What uni can do for you</h1>
          <ul>
            <li>
              <Tile title = "PASS Sessions are great"
              tileType = "university-services"
              content = "As a first year one of the most valuable services that the university offers is PASS, short for Peer Assisted Study Sessions. These are one-hour long sessions run by people that have completed university courses and offer short worksheets that revise the weeks content. These sessions are only run for first year courses and are a highly valuable resource that help to provide structure and acts as a good supplementary resource to workshops and lectures by providing a study group open t everyone. "/>
            </li>
            <li>
              <Tile title = "AskUON"
              tileType = "university-services"
              content = "'AskUON' is a university support service available to students at UoN and can be located through either navigating to the 'Help and Support' tab under 'Support and Uni Life' on myUON or simply by searching 'AskUON' on the University of Newcastle website. It offers support and/or guidance to past, current and future students. For future and past students, AskUON has helpful information in the categories of 'Applying to/Starting at UON', 'Student Essentials', 'Student Services and Support', 'Uni Life' and 'Graduates and Alumni'. Current students are offered most of the same services – clicking on the 'Current Students' tab will take you to a 'Hot Topics' page where a student can get assistance regarding a range of matters such as ‘how to change into a different program of study’, ‘how to apply for an Opal concession card’ and ‘how to enrol in a course and register for class activites’, just to name a few."/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UniversityServices;
