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
          <CardTitle title='Use of Human Subjects' />
          <Divider/>
          <CardText>
            <p>To advance knowledge in many areas, research requires the involvement of humans. <strong>Biomedical researchers</strong> focus on solving both life threatening and debilitating diseases that require the use of human subjects to further our knowledge towards possible cures. <strong>Social scientists</strong> use a variety of methods to study all aspects of human culture and behavior, which can include experimenting with human subjects in a laboratory setting, or gathering data from subjects through interviews or questionnaires.</p>
            <p>As a consequence of such events as the Nuremberg Trials at the end of World War II and the Tuskegee Syphilis study, regulations now ensure that the human subjects are respected and treated appropriately. By conducting research with attention to ethics, institutions and researchers not only foster their reputations for excellence, but also ensure consistency in data and enable the participants and the public to trust their work and research findings.</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Principles and Policy' />
          <Divider/>
          <CardText>
            <p>
              Development of formal codes of ethics and public policies for human subjects research began in the mid 20th century. These codes and policies were often developed in response to objectionable practices from specific studies, and have played a role in the development of the federal regulations we follow today.
            </p>
            <p>
              CSU is required to comply with the federal regulations governing review of research that involves human subjects. Annually we must assure the Office for Human Research Protections (OHRP) that the University is complying with the requirements of <a href='http://www.hhs.gov/ohrp/regulations-and-policy/regulations/45-cfr-46/index.html'>45 CFR 46</a>. This is an NIH reference, but has been incorporated virtually verbatim into the regulations of 16 other federal agencies; additionally, we state that the University will apply the same standards to all projects involving human subjects, regardless of funding or funding source. Funded activities are to be reviewed by the Institutional Review Board (IRB) as proposals, prior to receiving funding.
            </p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Dilemmas Principles and Policy' />
          <Divider/>
          <CardText>
            <p>Development of formal codes of ethics and public policies for human subjects research began in the mid 20th century.  These codes and policies were often developed in response to objectionable practices from specific studies.</p>
            <div className='row'>
              <div className='col-md-4'>
                <h4>Nuremberg Code <small>1947</small></h4>
                <Divider/>
                <p>A set of research ethics principles were established in August of 1947 for human experimentation as a result of the Nuremberg Trials at the end of World War II.</p>
                <ul>
                  <li>Developed in response to the inhumane experiments on humans conducted by Nazi doctors.</li>
                  <li>The Nazi doctors were convicted of murder, not for being unethical researchers.</li>
                  <li>The Code had no immediate effect on research conduct.</li>
                  <li>Medical profession thought it was a description of criminal research and created after the fact to convict Nazis.</li>
                </ul>
                <p><strong>Key Principles</strong></p>
                <ul>
                  <li>Informed consent and absence of coercion;</li>
                  <li>Benefit to society;</li>
                  <li>Properly formulated scientific experimentation; and</li>
                  <li>Beneficence towards experiment participants: minimize risks and maximize benefit to the research subjects.</li>
                </ul>
              </div>
              <div className='col-md-4'>
                <h4>Declaration of Helsinki <small>1964</small></h4>
                <Divider/>
                <p>The Declaration of Helsinki was developed in1964 by the World Medical Association (WMA) as a set of ethical principles for the medical community regarding human experimentation.</p>
                <p>It was a reinterpretation of the ten principles of the Nuremberg Code.</p>
                <p><strong>Key Principles</strong></p>
                <ul>
                  <li>Respect for the individual.</li>
                  <li>The right to self-determination and the right to make informed decisions regarding participation in research.</li>
                  <li>The investigator’s duty is solely to the patient or volunteer.</li>
                  <li>The subjects’ welfare must always take precedence over the interests of science and society.</li>
                  <li>Ethical considerations must always take precedence over laws and regulations.</li>
                </ul>
              </div>
              <div className='col-md-4'>
                <h4>National Research Act <small>1974</small></h4>
                <Divider/>
                <p>Public scrutiny surrounding the Tuskegee Syphilis study led to the enactment of the National Research Act (Public Law 93-348) in 1974.</p>
                <p>This act created the National Commission for the Protection of Human Subjects of Biomedical and Behavioral Research.</p>
                <p>Charge to the Commission was twofold:</p>
                <ul>
                  <li>Identify the basic ethical principles that underlie the conduct of human research.</li>
                  <li>Develop guidelines to assure that human research is conducted in accordance with those principles.</li>
                </ul>
                <p>The outcome of the work of the Commission was the Belmont Report (1979), which is now considered the definitive document on ethical treatment of human subjects involved in research projects.</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Belmont Report: 1979' />
          <Divider/>
          <CardText>
            <h4>Three Fundamental Ethical principles of the Belmont Report</h4>
            <div className='row'>
              <div className='col-md-4'>
                <h4>Beneficence</h4>
                <Divider/>
                <p>Maximize benefits for the research project while minimizing risks to the research subjects.</p>
              </div>
              <div className='col-md-4'>
                <h4>Respect for Persons</h4>
                <Divider/>
                <p>Protect the autonomy of all people and treat them with courtesy and respect. Allow for informed consent.</p>
                <p><strong>Respect for Person requires that the researcher...</strong></p>
                <ul>
                  <li>Obtain informed consent of participants in accordance with and to the extent required by the regulations.</li>
                  <li>Protect privacy interest of participants.</li>
                  <li>Maintain confidentiality of data.</li>
                  <li>When the research involves vulnerable participants provide additional protections for vulnerable participants to protect their rights and welfare.</li>
                  <li>Obtain written documentation of informed consent of participants in accordance with and to the extent required by the regulations.</li>
                </ul>
              </div>
              <div className='col-md-4'>
                <h4>Justice</h4>
                <Divider/>
                <p>Ensure that reasonable, non-exploitative, and well-considered procedures are administered fairly (the fair distribution of costs and benefits to potential research subjects.)</p>
                <p><strong>Justice means that the researcher...</strong></p>
                <ul>
                  <li>  Select and treat subjects equitably.</li>
                  <li>Protect privacy interest of participants.</li>
                  <li>Maintain confidentiality of data.</li>
                  <li>When the research involves vulnerable participants provide additional protections for vulnerable participants to protect their rights and welfare.</li>
                  <li>Obtain written documentation of informed consent of participants in accordance with and to the extent required by the regulations.</li>
                </ul>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='About Institutional Review Boards (IRB)' />
          <Divider/>
          <CardText>
            <ul>
              <li>Institutions engaged in research should foster a culture of ethical research and are required to have Institutional Review Boards (IRBs).</li>
              <li>An IRB is a committee that formally approves, monitors, and reviews biomedical and behavioral research involving humans with the goal of protecting the rights and welfare of the research subjects.  </li>
              <li>Federal regulations empower the IRBs at institutions to approve, disapprove, or require modifications to planned research.</li>
              <li>Institutions enter into a contract with the Federal Government called a Federal Wide Assurance to document that the institutions policies and procedures meet the regulations.</li>
              <li>Institutions must have their own policies and procedures regarding the conduct of research using human subjects.</li>
            </ul>
            <div className='row'>
              <div className='col-md-6'>
                <h4>Membership of an Institutional Review Board</h4>
                <Divider/>
                <ul>
                  <li>Each IRB must consist of at least five members, with varying backgrounds to promote complete and adequate review of research activities commonly conducted by the institution. At least one member must be unaffiliated with the institution, at least one must be a scientist, and one must be a non scientist.</li>
                  <li>The IRB must be sufficiently qualified through the experience and expertise of its members, and the diversity of the members, including consideration of race, gender, and cultural backgrounds and sensitivity to such issues as community attitudes, to promote respect for its advice and counsel in safeguarding the rights and welfare of human subjects.(45 CFR 46.107)</li>
                  <li>At research universities, the IRB’s are generally faculty committees, with members from outside the institution as appropriate.</li>
                </ul>
              </div>
              <div className='col-md-6'>
                <h4>Responsibilites of an Institutional Review Board</h4>
                <Divider/>
                <ul>
                  <li>IRBs perform <strong>critical oversight</strong> to ensure that research protocols involving human subjects meet scientific, ethical, and regulatory principles.</li>
                  <li>IRBs ensure that <strong>informed consent</strong> is obtained from participants and appropriately documented.</li>
                  <li>Federal regulations allow for some types of research to be considered <strong>exempt</strong> from full IRB review. Exempt research can include:
                    <ul>
                      <li>Surveys</li>
                      <li>Questionnaires</li>
                      <li>Educational testing and classroom activities</li>
                      <li>Use of non-identifiable laboratory specimens </li>
                      <li>Observation of public behavior (unless the subject can be identified), or collection or study of data or documents that are in the public domain (45 CFR 46.101.b)</li>
                    </ul>
                  </li>
                  <li>Regulations <strong>provide extra protections for</strong> the use of pregnant women, prisoners, children, other vulnerable populations in research. (45 CFR 46. subparts B, C, and D)</li>
                </ul>
                <p>Any questions about whether a particular research protocol requires IRB review should be directed to the administrative office that supports the institution’s IRB.</p>
              </div>
            </div>
          </CardText>
        </Card>
        <div className='row'>
          <div className='col-md-6'>
            <Card className='section-container'>
              <CardTitle title='Jessie Gelsinger' />
              <Divider/>
              <CardText>
                <ul>
                  <li>Had a liver illness (ornithine transcarbamylase deficiency) controlled by diet and drugs</li>
                  <li>Volunteered to be a human subject for a gene therapy trial, to test the safety of the adenoviral vector for infants</li>
                  <li>Died within 4 days of delivery</li>
                  <li>18 years old</li>
                </ul>
                <h4>What had happened?</h4>
                <Divider/>
                <p><strong>Subsequent review found that...</strong></p>
                <ul>
                  <li>The Investigator, Dr. Wilson, (U. Penn)stated: "The technologies we had at the time were inadequate"</li>
                  <li>Researchers were tired and over-worked</li>
                  <li>This aspect of their research was underfunded </li>
                  <li>They failed to provide "informed consent" disclosure to volunteers about toxic effects, as well as deaths of monkeys in preclinical trials</li>
                  <li>The investigators had financial ties to the company developing the therapy</li>
                  <li>Lab workers failed to follow their IRB protocol, which called for elimination from the study of volunteers with high ammonia levels</li>
                  <li>Jessie Gelsinger’s death "derailed" the gene therapy field</li>
                </ul>
              </CardText>
            </Card>
          </div>
          <div className='col-md-6'>
            <Card className='section-container'>
              <CardTitle title='Ellen Roche' />
              <Divider/>
              <CardText>
                <ul>
                  <li>Healthy 24 year old volunteer</li>
                  <li>Lab worker at Johns Hopkins University asthma clinic</li>
                  <li>Participated as a healthy volunteer in a study at JHU (PI, Togias) on inhaled hexamethonium</li>
                  <li>The compound restricts airways; induces asthma, and allows doctors to look at asthma treatments</li>
                  <li>The compound had previously been delivered by inhalation on only 20 subjects</li>
                  <li>Ellen Roche developed acute lung disease and died 30 days after inhaling the compound</li>
                </ul>
                <h4>What had happened?</h4>
                <Divider/>
                <p><strong>Subsequent review found that...</strong></p>
                <ul>
                  <li>The IRB should have asked for additional toxicity data prior to approval</li>
                  <li>The IRB should have gotten an opinion from the FDA about whether there was a need for an Investigational New Drug ("IND")</li>
                  <li>The consent form did not disclose known health issues with the compound, but should have</li>
                  <li>Negative effects (to the lung) on the first subject were not reported to the IRB</li>
                  <li>The investigator did not follow his own protocol on minor issues that would certainly have been approved</li>
                </ul>
              </CardText>
            </Card>
          </div>
        </div>
        <Card className='section-container'>
          <CardTitle title='If you look at the cases of serious adverse events in human subjects research...' />
          <Divider/>
          <CardText>
            <ul>
              <li>... a common trend is poor communication between the investigator, his/her team, and the Institutional Review Board (IRB)</li>
              <li><strong>You</strong> can play an important role in strengthening the communication between the researchers and the IRB</li>
            </ul>
            <p>If your project is "research" and research with a "human subject", you will need to work with the <a href='https://vpr.research.colostate.edu/RICRO/irb/'>CSU IRB</a>:</p>
            <ul>
              <li>Prior to submitting a protocol, you will need formal <a href='https://vpr.research.colostate.edu/RICRO/irb/researcher-training/'>IRB training</a></li>
              <li>Like the IACUC, IRB protocols are submitted and reviewed online, using <a href='https://csu.keyusa.net/'>eProtocol</a></li>
              <li>IRB protocols that are greater than minimal risk are reviewed at the monthly IRB meeting
                <ul>
                  <li>Submission deadline = 2<sup>nd</sup> Thursday of the month</li>
                </ul>
              </li>
              <li>Exempt or expedited protocols may be submitted anytime and are reviewed on a rolling basis (i.e. there is no deadline)</li>
              <li>IRB protocols reviewed via the expedite or full board process must be renewed annually</li>
            </ul>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Case Study: Human Subjects' />
          <Divider/>
          <CardText>
            <p>For his dissertation project in psychology, Antonio is studying new approaches to strengthen memory. He can apply these techniques to create interactive Web-based instructional modules. He plans to test these modules with students in a general psychology course for which he is a teaching assistant. He expects that student volunteers who use the modules will subsequently perform better on examinations than other students. He hopes to publish the results in a conference proceeding on research in learning, because he plans to apply for an academic position after he completes his doctorate.</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Question' />
          <Divider/>
          <CardText>
            <h4>Does Antonio need to seek approval for his research project with human participants? If so, who does he need approval from?</h4>
            <RadioButtonGroup name='0'>
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'a')}
                value='a'
                label='A) Yes. He should contact the professor who is teaching the psychology course.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'b')}
                value='b'
                label='B) No, since he is not using any drugs or medications to test the individuals he does not need approval.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'c')}
                value='c'
                label='C) Yes. He should contact the Institutional Review Board for approval to use the students in the psychology course.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'d')}
                value='d'
                label='D) No, if the student volunteers there is no approval necessary.' />
            </RadioButtonGroup>
          </CardText>
        </Card>
      </SectionContainer>
    );
  }
}
