import React, {
   Component
} from 'react';
import {
   RadioButton,
   RadioButtonGroup
} from 'material-ui/RadioButton';
import {
   Card,
   CardTitle,
   CardText
} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import {
   getSectionTrio,
   getAnswer
} from '../Utils';
import SectionContainer from '../SectionContainer';

export default class Sec extends Component {
   constructor(props) {
      super(props);
      this.state = {
         answer0: getSectionTrio().current.answers[0]
      }
   }
   render() {
      return (
         <SectionContainer sectionTrio={getSectionTrio()}>
            <Card className='section-container'>
               <CardTitle title='Who is a mentor?'/>
               <Divider/>
               <CardText>
                  <p>Experienced professionals with impartial insight and knowledge to benefit mentees, who are well versed in institutional and regulatory policies and procedures.</p>
                  <p>While most mentors stand out as senior faculty or Principal Investigators, any junior faculty or Post-Doctoral Researcher who fosters and guides the development of less experienced staff are also considered mentors since their role is inclusive of imparting knowledge and cultivating skills.</p>
                  <blockquote className='text-justify'>
                     <p>Mentoring is one of the primary means for one generation of scientists to impart their knowledge to succeeding generations. More than textbooks and formal classes, the relatively informal dimensions of scientific research, including the relationship between mentor and trainee, prepare the next generation of science professionals</p>
                     <footer>Comments from CITI module</footer>
                  </blockquote>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='How does one mentor?'/>
               <Divider/>
               <CardText>
                  <ul>
                     <li>By developing a lifelong commitment to students for continued networking and advice; development and progress toward career goals</li>
                     <li>By assisting students early in their careers while also teaching them to be independent</li>
                     <li>By encouraging students with enthusiasm, passion and support</li>
                     <li>By setting up periodical meetings (group, individual, on a timeline for goal setting)</li>
                     <li>By explaining how to credit sources and authorship; avoiding plagiarism; reviewing articles, publishing work, citing sources, accepting and using criticism; honing writing skills and mastering oral presentations with internal/external peers</li>
                     <li>By fostering and cultivating responsible conduct of research</li>
                     <li>Duties are not limited to supervising</li>
                  </ul>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='What are the mentor’s key responsibilities?'/>
               <Divider/>
               <CardText>
                  <ul>
                     <li>Explain how to work with a budget, expensive lab equipment, supplies, etc.</li>
                     <li>Provide adequate training on proper methodologies and standards</li>
                     <li>Provide consistency and timeliness to ensure trainees fully understand policies and procedures</li>
                     <li>Offer contact information for follow-up questions and concerns</li>
                     <li>Create proactive vs. reactive communication and support</li>
                     <li>Distinguish between appropriate training methods for different types of research (basic, clinical or epidemiological)</li>
                     <li>Display appropriate treatment to all mentees and not show favoritism</li>
                     <li>Avoid putting trainees in awkward or strenuous situations</li>
                     <li>Adapt to needs of various types of mentees (foreign, post-docs, experienced, novices)</li>
                  </ul>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Who is the trainee?'/>
               <Divider/>
               <CardText>
                  <p>While mentors act as resources to guide and train their mentees, trainees also play an important role in the relationship. Knowing whom to contact, what is expected regarding their role and understanding both institutional and regulatory guidelines relating to sponsored research are essential for success.</p>
                  <p>Trainees may include recent undergraduates, foreign Fellows or post-doctoral researchers. As such, their needs will vary and mentors should adapt to those unique needs.</p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='What are the trainee’s key responsibilities?'/>
               <Divider/>
               <CardText>
                  <ul>
                     <li>Meet several potential mentors and choosing the best mentor to fulfill career goals</li>
                     <li>Articulate expectations about the relationship</li>
                     <li>Attend training courses on RCR including: legal and ethical training, intellectual property, technology transfer and data ownership and management</li>
                     <li>Differentiate between “written” versus “unwritten” rules</li>
                     <li>Distinguish regulatory vs. institutional policies</li>
                     <li>Display honest and open communication with their mentors</li>
                     <li>Communicate concerns regarding fellow trainees or relationship with mentor/mentees</li>
                     <li>Question when doubtful on policies and procedures </li>
                     <li>Design career plans and working on research projects that are aligned with those plans</li>
                     <li>Learn how to read, edit and evaluate manuscripts and publications</li>
                     <li>Attend regional and national seminars/conferences for exposure to experts in their field of study</li>
                     <li>Polish writing and oral presentations skills</li>
                     <li>Master the art of diplomacy, networking and communication</li>
                  </ul>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='What are the challenges faced?'/>
               <Divider/>
               <CardText>
                  <ul>
                     <li>Trainees may feel unfair treatment between mentor, themselves and among fellow students</li>
                     <li>Uncomfortable trainees may not request information on RCR from PI resulting in inadequate/sufficient training</li>
                     <li>Trainees may feel burdened with mentor’s own work rather than mentor supporting trainees’ research and progress</li>
                     <li>Mentor exploiting mentees for their own research purposes</li>
                     <li>Trainees must understand what is private property vs. what belongs to the institution (notebooks, computers, external hard drives, flash drives, cloud storage, etc.)</li>
                     <li>Due to the transient nature of academic science, trainees and mentors need clarification during the entire research project to understand what data may or may not leave the institution when the trainee transfers elsewhere</li>
                     <li>Dialogue between mentors and trainees is crucial for honesty and understanding</li>
                     <li>Web based courses, defined policies and institutional procedures and access to pertinent information is necessary</li>
                     <li>Language barriers must be handled according to institutional standards</li>
                  </ul>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Case Study: Mentor & Trainee Responsibilities'/>
               <Divider/>
               <CardText>
                  <p>Samantha Jackson is a post-doc working in the lab of Dr. Luis Lopez. She is a tenacious student and spends nearly seven days a week in the lab putting final touches on her thesis which is due in a few weeks. Lately, she has put off her own work to assist Dr. Lopez with some lab experiments; for which the results will be presented at an important national seminar next Thursday.</p>
                  <p>As she is heading out the door for the weekend, Dr. Lopez asks Samantha if she is able to analyze more data and prepare figures and graphs. While she intended to work on her thesis, she knew he needed the help so agreed. He thanked her and explained she would be listed as the third author behind him and the data collector, Meredith.</p>
                  <p>Samantha leaves and tells Dr. Lopez she looks forward to working with him in the morning, to which he smirks and replies he will not be there.</p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Question'/>
               <Divider/>
               <CardText>
                  <h4>What challenge is Samantha Jackson facing with her mentor Dr. Lopez?</h4>
                  <RadioButtonGroup name='0'>
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer0,'a')}
                        value='a'
                        label='A) Dr. Lopez is breaking a CSU policy by asking her to work over the weekend.' />
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer0,'b')}
                        value='b'
                        label='B) Samantha Jackson feels burdened with Dr. Lopez’s work rather than feeling like Dr. Lopez is mentoring her and supporting her research and progress.' />
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer0,'c')}
                        value='c'
                        label='C) Dr. Lopez is violating CSU policy by not supervising and mentoring Samantha while she completes the work over the weekend.' />
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer0,'d')}
                        value='d'
                        label='D) Dr. Lopez is bribing Samantha by saying he will give her authorship credit which is unacceptable.' />
                  </RadioButtonGroup>
               </CardText>
            </Card>
         </SectionContainer>
      );
   }
}
