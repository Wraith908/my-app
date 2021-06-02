import React, {Component} from 'react';
import Tile from '../components/Tile';
import '../style.css';

class FAQsAndTestimonials extends Component {
  constructor(props) {
    super(props);
    this.getTestimonialsAndFAQS = this.getTestimonialsAndFAQS.bind(this);
  }

  getTestimonialsAndFAQS() {
    return (<li>Not Broken Yet</li>);
  }

  render() {
    const tileList = this.getTestimonialsAndFAQS();
    return (
      <div>
        <div class="faqs-and-testimonials">
          <h1>FAQs</h1>
          <ul>
            <li>
            <Tile tileType = "faq"
            title = "What do I need to do after I’ve been accepted into my chosen degree?"
            content = "Firstly, you’ll want to maintain a close eye on your emails – this will be the main line of communication between you and the university. You will want to check your emails regularly to ensure you do not miss out on any important information or updates. Your lecturers and/or tutors will also contact you via your emails but will do so on Blackboard as well. Accessing the Blackboard site will be crucial during your degree. Every course run at UoN will have a ‘course page’ set up on Blackboard. All of the content for a course will be deposited into a Blackboard course page by the Course Coordinator, Lecturers and/or Tutors. You will need to get onto Blackboard not only to access your course material but to submit it once completed as well. Next, you will want to familiarise yourself will myHub. myHub is another UoN site which will contain not only all of the important information regarding your degree and the courses you are enrolled in, but will also house more of your personal/confidential information such as your home address, contact details, academic records and financial activity (HECS, account summary, bills, payments, etc). Perhaps most importantly, you’ll want to know your way around myUoN, which acts as a landing page for enrolled students and as a gateway to other services like the ones mentioned previously. From the main page of myUoN you will be able to access not only Blackboard and myHub but other important services such as myTimetable, Exams, and MyLibrary. myUoN also houses other categories of services such as 'Getting Around' (which offers services such as Campus Maps, Shuttles and Transport NSW) and 'Support and Uni Life' (offering Help and Support, Adverse Circumstances, CareerHub and more)."/>
            </li>
            <li>
            <Tile tileType = "faq"
            title = "I’m lost – how do I find out where I need to go?"
            content = "There are a number of different services available to students to help them get around campus. One such service provided by the Uni is called 'Campus Maps' and can be found in the 'Getting Around' category on the landing page of myUoN. This will help a student find their way around any of the UoN campuses located within Australia (and also the Singapore campus). Using Campus Maps, a student can search for specific campuses as well as specific buildings within any given campus. Another service students may find valuable is an app called 'Lost On Campus'. While not designed by UoN or specifically for their campuses alone, Lost On Campus is a terrific app that students can use regardless of what university they’re studying at within Australia. Lost On Campus allows you to locate different buildings, rooms, shops/lunch areas, toilets and other facilities within your university."/>
            </li>
            <li>
            <Tile tileType = "faq"
            title = "How and Where do I Get Help?"
            content = "Help is never too far away at UoN and there many services you may find useful. There is an entire category on myUoN called Support and Uni Life dedicated to offering any form of support or help a student may need. If you click on the first tab in the Support and Uni Life category called 'Help and Support', a list of four support services will appear – AskUON (assistance in regard to questions about the university), IT Support (assistance related to technical matters), My Support (assistance related to more personal issues) and myUON Help (additional help and assistance regarding the university). Additionally, there are other services such as 'Adverse Circumstances' (where a student can apply for an extension on an assignment), 'CareerHub' (where students can search for jobs and start careers related to their degrees), 'Clubs and Societies' and 'Peer Mentoring'. There are also services designed specifically for 1st year students such as 'PASS sessions' (or Peer Assisted Study Sessions)."/>
            </li>
            <li>
            <Tile tileType = "faq"
            title = "Can I give my Student ID card to somebody else for them to use?"
            content = "You should treat your student identification card with the same security as you would your bank debit or credit card. You shouldnotgive your student card to anyone else to use. Its everyone’s unique identity."/>
            </li>
            <li>
            <Tile tileType = "faq"
            title = "You should treat your student identification card with the same security as you would your bank debit or credit card. You shouldnotgive your student card to anyone else to use. Its everyone’s unique identity."
            content = "You will save money on every travel. Suppose from your home to uni it charges 10 dollars, but if you use concession opal card you will be charged 7 dollars. You should always have concession card while travelling, if not the discount will not be counted"/>
            </li>
            <li>
            <Tile tileType = "faq"
            title = "How do I apply for scholarships?"
            content = "Information on all  scholarships offered by the University of Newcastle for enabling, undergraduate and postgraduate course work students can be found on theScholarshipswebsite. There are plenty of scholarships offered, some requires online application form which need to be submitted by students before the closing date of scholarship."/>
            </li>
            <li>
            <Tile tileType = "faq"
            title = "How do I purchase a student parking permit?"
            content = "2021 student parking permits are currently available from the University of Newcastle Student Payments system. The cost of a 2021 Yearly Permit is $163.80 and a Semester Permit is $81.90. Alternatively, you can walk to student services centre and apply for parking permit and get your ticket which must display on every vehicle"/>
            </li>
            <li>
            <Tile tileType = "faq"
            title = "I want to change degrees, how do I do that?"
            content = "This happens to students all the time and it involves reapplying to university, it's important to talk to your program convener first to make sure that the change is the right move for you as well as contacting the university’s Career Services which can be booked in through this website https://www.newcastle.edu.au/current-students/support/careers-jobs-and-your-future"/>
            </li>
            <li>
            <Tile tileType = "faq"
            title = "I forgot my password, how do I reset it?"
            content = "https://passwordreset.newcastle.edu.au/ is an online resource that uses your username and a security code sent to your home email to recover any lost passwords."/>
            </li>
            <li>
            <Tile tileType = "faq"
            title = "I’m feeling blue and it’s affecting my study, is there anything I can do?"
            content = "The university has counselling services that you can organise meetings through for free at https://www.newcastle.edu.au/current-students/support/personal/counselling/access-support. You can drop in to their office at Student Central just outside Hunter building and next to Park on the hill, you can email them at counselling@newcastle.edu.au or call at 4921 6622. If you call after hours then try at 1300 653 007 / SMS: 0488 884 165. You can also apply for adverse circumstances at https://www.newcastle.edu.au/current-students/study-essentials/assessment-and-exams/adverse-circumstances."/>
            </li>
          </ul>
          <h1>Testimonials</h1>
          <ul>
            <li>
              <Tile tileType = "testimonial"
              title = "Aaron McCool"
              content = "Hi, my name’s Aaron, I’m currently in my fourth year of a Bachelor of Information Technology here at Newcastle University, and I’m majoring in Interactive Media.I chose to study here at Newcastle University not only because it’s one of the best universities in the world but also because it offers the degree and courses that most interest me.During my time here at UoN, my degree has taught me a lot of different things about information technology – from different forms of programming and formatting to other aspects such as video editing and animation – and because of this, I’ve not only come away with much more knowledge about IT but also respect and understanding for those working in IT. Studying here has often exposed me to work situations with which I am less comfortable – i.e. group work, presentations, speeches. But because of this I now find myself being more comfortable in these situations and appreciate the importance of group work. The University of Newcastle has something for everyone. Studying here requires hard work and commitment, but it will pay off in the end when you finish your degree. So yes, I would recommend UoN" />
            </li>
            <li>
            <Tile tileType = "testimonial"
            title = "Ronit Ronit"
            content = "I am currently enrolled as a student in University of Newcastle pursuing an undergraduate degree. I Am majoring in Information Technology with interactive media minor. I am interested in the  web development and production field and am seeking opportunities related to it. Being an international student, I have repeatedly been exposed to new cultures and diverse groups of brilliant people. I am always curious about things and enjoy learning. I like to solve problems and fix errors. The university of Newcastle gave me everything in my life, helped in my made time, taught me new things. Brilliant teachers who  are always available to help students. If someone  want to enrol in university. I will recommend university of Newcastle, QS ranked under 200, campus facilities are highly rated."/>
            </li>
            <li>
            <Tile tileType = "testimonial"
            title = "Jacob Neilands"
            content = "Hi, my name is Jacob and I’m 4 years into my 3 year long Computer Science degree with a major in Software Development. I chose Newcastle University because I wasn’t a great student in high school but I was a whizz with math and between my academic performance and the local student bonus points I got into an 80 ATAR point course with a 62 point ATAR (70 was the average for my year from what I understand). In my time at uni I’ve been club treasurer, secretary and president, although not in that order, and I’ve developed a skill set that I don’t think I could’ve done on my own and I’ve met so many people that I’ve remained very close to. I’m really glad that I went into my chosen degree straight out of high school. "/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FAQsAndTestimonials;
