import React, {Component} from 'react';
import Tile from '../components/Tile';
import '../style.css';

class WeekOneSurvivalPack extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "week-one-survival-pack">
        <h1>Week One Survival Pack</h1>
        <ol>
          <li>
            <Tile tileType = "week-one-tip"
            title = "Be ready with course material"
            content = "A student must login on blackboard where all the course materials are available, read through the course outline and assessment items which will keep you up to date and help you understand your lectures well." />
          </li>
          <li>
            <Tile tileType = "week-one-tip"
            title = "Feel free to ask for help"
            content = "everyone needs help in different ways, university got heaps of volunteers who are assigned to help students, if you are lost can find your classroom feel free to ask for help." />
          </li>
          <li>
            <Tile tileType = "week-one-tip"
            title = "Interact with classmates"
            content = "week 1 is usually a introducing class where teacher tells about course outlines and introduce himself to class. Interact with classmates and teachers which will help you feel comfortable and relaxed in new environment.  " />
          </li>
          <li>
            <Tile tileType = "week-one-tip"
            title = "Join clubs, Attend events"
            content = "Engage with university life, there are so many great aspects to uni life that you will never be able to engage with like you can in first year. Between the forum, clubs and the various events that university faculties run it’s so important to engage with them early when you have the time for it. I have never experienced a better way of meeting people." />
          </li>
          <li>
            <Tile tileType = "week-one-tip"
            title = "Get into Good Habits Early"
            content = "First year courses are the easiest you’ll come across but you need to get into good habits and keep them. First year often feels very straight forward but if you can get into good habits like attending lectures, interacting at workshops and studying outside of classes then you can carry those habits into later years when the workload increases and services like PASS aren’t offered anymore." />
          </li>
          <li>
            <Tile tileType = "week-one-tip"
            title = "Stay in touch and up to date"
            content = "always keep an eye on your emails and familiarise yourself with Blackboard, myUON and myHub ASAP" />
          </li>
          <li>
            <Tile tileType = "week-one-tip"
            title = "Know where you're going"
            content = "make use of services such as 'Campus Maps' and/or 'Lost On Campus' to ensure you know exactly where your classes are" />
          </li>
          <li>
            <Tile tileType = "week-one-tip"
            title = "Don't Suffer in Silence"
            content = "if you are need of help or assistance in any way, seek it out – talk to your course coordinator/lecturer/tutor, or get in touch with any of the support services offered by the university such as AskUON, IT Support and/or mySupport." />
          </li>
        </ol>
      </div>
    );
  }
}

export default WeekOneSurvivalPack;
