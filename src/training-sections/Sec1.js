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
        <Card className='section-container' id='section-1'>
          <CardTitle title='Ethical Theories' />
          <Divider/>
          <CardText>
            <p>Ethical principles are explained by ethical theories. An ethical theory is a serious, non-contradictory, systematic, action-guiding and comprehensive philosophical system that brings our considered moral judgments into reflective equilibrium with all other sources of knowledge. According to Gary Comstock of North Carolina State University, there are four different theories one could use to make an ethical decision:</p>
            <div className='row'>
              <div className='col-md-3'>
                <h4>Egoism</h4>
                <Divider/>
                <p>A person ought to do what is in one's own long-term best interests.</p>
              </div>
              <div className='col-md-3'>
                <h4>Virtue</h4>
                <Divider/>
                <p>A person ought to do what their group considers to be admirable, just, etc..</p>
              </div>
              <div className='col-md-3'>
                <h4>Utilitarianism</h4>
                <Divider/>
                <p>A person ought to do what will maximize aggregate happiness and satisfy the interests of the majority. (“The greatest good for the greatest numbers.”)</p>
              </div>
              <div className='col-md-3'>
                <h4>Deontology</h4>
                <Divider/>
                <p>A person ought to base actions on established rules (such as rules of morality), rather than on the consequence of their actions. (For example, Kant believes that a “little white lie” is wrong, even if it spares someone’s feelings.)</p>
              </div>
            </div>
            <h5>
              <strong>
                No single theory is more “right” than the other, but understanding the basis upon which you make ethical decisions is a good first step at resolving ethical conflict.
              </strong>
            </h5>
            <p className='disclaimer'>
              Adapted from: <a href='https://www.brown.edu/academics/science-and-technology-studies/framework-making-ethical-decisions'>
              <i>A Framework for Making Ethical Decisions</i></a>
            </p>
          </CardText>
        </Card>
        <Card className='section-container' id='section-2'>
          <CardTitle title='Common Issues in Research Ethics' />
          <Divider/>
          <CardText>
            <div className='row'>
              <div className='col-md-3'>
                <h4>Honesty</h4>
                <Divider/>
                <p>Be honest in all scientific communications. Honestly report data, results, methods and procedures, and publication status. Do not fabricate, falsify, or misrepresent data. Do not deceive colleagues, granting agencies, or the public.</p>
              </div>
              <div className='col-md-3'>
                <h4>Objectivity</h4>
                <Divider/>
                <p>Avoid bias in experimental design, data analysis, data interpretation, peer review, personnel decisions, grant writing, expert testimony, and other aspects of research where objectivity is expected or required. You may feel biased towards a particular hypothesis, but do not let that bias taint your analysis of the data; understand that the bias may be unconscious. Disclose personal or financial interests that may affect research.</p>
              </div>
              <div className='col-md-3'>
                <h4>Integrity</h4>
                <Divider/>
                <p>Keep your promises and agreements; act with sincerity; be consistent in thought and action. In scientific disputes criticize the logic, but not the person, who puts forth an opposing view.</p>
              </div>
              <div className='col-md-3'>
                <h4>Carefulness</h4>
                <Divider/>
                <p>Avoid careless errors and negligence; carefully and critically examine your own work and the work of your peers. Keep good records of research activities, such as data collection, research design, and correspondence with agencies or journals.</p>
              </div>
            </div>
            <br/>
            <div className='row'>
              <div className='col-md-3'>
                <h4>Openness</h4>
                <Divider/>
                <p>Share data, results, ideas, tools, resources. Be open to criticism and new ideas. Acknowledge the tension between a desire to be open and protecting proprietary or other confidential interests.</p>
              </div>
              <div className='col-md-3'>
                <h4>Respect for Intellectual Property</h4>
                <Divider/>
                <p>Honor patents, copyrights, and other forms of intellectual property. Do not use unpublished data, methods, or results without permission. Give credit where credit is due. Give proper acknowledgement or credit for all contributions to research. Never plagiarize.</p>
              </div>
              <div className='col-md-3'>
                <h4>Confidentiality</h4>
                <Divider/>
                <p>Protect confidential communications, such as grants or papers submitted for publication, personnel records, trade or military secrets, and patient records.</p>
              </div>
              <div className='col-md-3'>
                <h4>Responsible Publication</h4>
                <Divider/>
                <p>Publish in order to advance research and scholarship, not to advance just your own career. Avoid duplicative publication of nearly similar content for the sole purpose of bolstering one’s own resume.</p>
              </div>
            </div>
            <br/>
            <div className='row'>
              <div className='col-md-3'>
                <h4>Responsible Mentoring</h4>
                <Divider/>
                <p>Help to educate, mentor, and advise students. Promote their welfare and allow them to make their own decisions.</p>
              </div>
              <div className='col-md-3'>
                <h4>Respect for Colleagues</h4>
                <Divider/>
                <p>Respect your colleagues and treat them fairly.</p>
              </div>
              <div className='col-md-3'>
                <h4>Social Responsibility</h4>
                <Divider/>
                <p>Promote social good and prevent or mitigate social harms through research, public education, and advocacy.</p>
              </div>
              <div className='col-md-3'>
                <h4>Non-Discrimination</h4>
                <Divider/>
                <p>Avoid discrimination against colleagues or students on the basis of sex, race, ethnicity, or other factors that are not related to their scientific competence and integrity.</p>
              </div>
            </div>
            <br/>
            <div className='row'>
              <div className='col-md-3'>
                <h4>Competence</h4>
                <Divider/>
                <p>Maintain and improve your own professional competence and expertise through lifelong education and learning; take steps to assure competence in science as a whole.</p>
              </div>
              <div className='col-md-3'>
                <h4>Legality</h4>
                <Divider/>
                <p>Know and obey relevant laws and institutional and governmental policies.</p>
              </div>
              <div className='col-md-3'>
                <h4>Animal Care</h4>
                <Divider/>
                <p>Show proper protections for animals when using them in research. Prevent or mitigate unnecessary pain and distress, use the minimum number of animals to meet the scientific objectives, and use non-animal alternatives when they are available.</p>
              </div>
              <div className='col-md-3'>
                <h4>Human Subjects Protection</h4>
                <Divider/>
                <p>When conducting research on human subjects, minimize harms and risks and maximize benefits; respect human dignity, privacy, and autonomy; take special precautions with vulnerable populations; and strive to distribute the benefits and burdens of research fairly.</p>
              </div>
            </div>
            <br/>
            <p className='disclaimer'>Adapted from Shamoo A and Resnik D. 2009. Responsible Conduct of Research, 2nd ed. (New York: Oxford University Press).</p>
          </CardText>
        </Card>
        <Card className='section-container' id='section-3'>
          <CardTitle title='Framework for Ethical Decision Making' />
          <Divider/>
          <CardText>
            <ol>
              <li>Recognize an Ethical Issue</li>
              <li>Get the Facts</li>
              <li>Evaluate Alternative Actions</li>
              <li>Make a Decision and Test it</li>
              <li>Act and Reflect on the Outcome</li>
            </ol>
          </CardText>
        </Card>
        <Card className='section-container' id='section-4'>
          <CardTitle title='Ethical Decision Making' />
          <Divider/>
          <CardText>
            <div className='row'>
              <div className='col-md-6 text-box'>
                <h4>Ethical decisions must...</h4>
                <ul>
                  <li>Gather all the facts</li>
                  <li>Consider each ethical principle</li>
                  <li>Deliberate on wether the rules are met</li>
                </ul>
              </div>
              <div className='col-md-6 text-box'>
                <h4>Ethical decisions may...</h4>
                <ul>
                  <li>Involve conflict among principles</li>
                  <li>Require a balancing of conflicting principles</li>
                  <li>Be both principle-based and case-based</li>
                  <li>Involve a systematic analysis of all principles</li>
                </ul>
              </div>
            </div>
            <p>Reasonable people may disagree about what decision is right in a particular situation, but in general society expects something other than use of a strictly utilitarian (greatest good for greatest numbers) decision-making process.</p>
            <p>For example, when deciding whether or not to develop a wilderness area that is the home for a nearly-extinct species, we may feel that protection of the species is of greater ethical value than the development, even if the development would benefit many individuals.</p>
            <p>By following this process, researchers, students, and the institutions they represent ensure a respectful and tolerant environment, and enable their colleagues and the public to trust their work and research findings.</p>
          </CardText>
        </Card>
        <Card className='section-container' id='section-5'>
          <CardTitle title='Case Study: Ethics and Social Responsibility' />
          <Divider/>
          <CardText>
            <p>At many colleges and universities, internet connections began to slow perceptibly in 2002 as more and more students were downloading music and movies, often files that were pirated or that they were otherwise unauthorized to download. In some cases, as much as seventy-five percent of a university’s bandwidth is being taken up with file swapping. Two distinct issues became intertwined: the size and frequency of the downloads was sufficient to clog college and university networks, often interfering directly with the academic concerns that are primary to the mission of the educational institutions. In addition, students were often downloading files that they were not permitted to download—and were making use of the university’s internet connection to do so.</p>
            <p>Administrators have reacted in various ways to this worsening situation. Some have added more bandwidth, often just to see it gobbled up as well. Others have been alerted by companies who felt their rights had been violated. Other institutions have treated the issue purely as a technical one and explored technical solutions such as limiting the amount of bandwidth a particular student could use at any one time, segregating dorms on the network from academic offices, giving lower priority to the types of files typically found on file-sharing sites, etc.</p>
            <p className='disclaimer'>Source: Rebecca Trounson, “Pirated Files Clog College Networks,” Los Angeles Times, December 2, 2002, p. 1 Amy Harmon, “Students Learning Media Files, “ The New York Times, November 27, 2002, Section C.</p>
          </CardText>
        </Card>
        <Card className='section-container' id='section-6'>
          <CardTitle title='Question' />
          <Divider/>
          <CardText>
            <h4>Imagine that you are the head of a committee appointed to develop a policy on this issue. You have done some soul-searching and realize that you are basically a Utilitarian. What position would you likely take?</h4>
            <RadioButtonGroup name='0'>
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'a')}
                value='a'
                label='A) The university should do the virtuous thing and protect the rights of the artists.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'b')}
                value='b'
                label='B) An individual’s rights to listen to any tune outweighs the interests of the university and other students.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'c')}
                value='c'
                label='C) Societal rules that protect an artist are of paramount importance.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'d')}
                value='d'
                label='D) Since there are more student than others on our campus, their need to download outweighs any other interests.' />
            </RadioButtonGroup>
          </CardText>
        </Card>
      </SectionContainer>
    );
  }
}
