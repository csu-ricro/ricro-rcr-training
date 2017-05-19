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

import config from '../config.json';

export default class Sec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer0: getSectionTrio().current.answers[0],
      answer1: getSectionTrio().current.answers[1]
    }
  }
  render() {
    return (
      <SectionContainer sectionTrio={getSectionTrio()}>
        <Card className='section-container'>
          <CardTitle title='What is considered Research Misconduct at CSU?' />
          <Divider/>
          <CardText>
            <div className='text-box'>
              <ol>
                <li><strong>Fabrication</strong>, <strong>falsification</strong>, or <strong>plagiarism</strong> in proposing, conducting, or reporting research; that </li>
                <li>Has been committed intentionally, knowingly or recklessly; and, that</li>
                <li>Has been proven by a preponderance of the evidence (more likely than not).</li>
              </ol>
            </div>
            <p>Misconduct does not include honest error or honest differences in interpretations or judgments of data.</p>
            <p>Significant departure from accepted ethical practices of the relevant research community will be treated as violations of the <a href='http://provost.colostate.edu/faculty-administrative-professionals/'>Academic Faculty and Administrative Professional Manual</a> or of the <a href='http://graduateschool.colostate.edu/documents/bulletin/Bulletin.pdf#STUDENT-RIGHTS-AND-RESPONSIBILITIES'>Graduate School Academic Integrity</a> policy.</p>
            <div className='row'>
              <div className='col-md-6'>
                <h4>NSF: CFR Part 689</h4>
                <Divider/>
                <p>Research misconduct means fabrication, falsification, or plagiarism in <strong>proposing</strong> or <strong>performing</strong> research funded by NSF, reviewing research proposals submitted to NSF, or in reporting research results funded by NSF.</p>
                <ol type='a'>
                  <li>Fabrication means making up data or results and recording or reporting them.</li>
                  <li>Falsification means manipulating research materials, equipment, or processes, or changing or omitting data or results such that the research is not accurately represented in the research record.</li>
                  <li>Plagiarism means the appropriation of another person’s <strong>ideas</strong>, <strong>processes</strong>, <strong>results</strong>, or <strong>words</strong> without giving appropriate credit.</li>
                  <li>Research, for purposes of paragraph (a) of this section, includes proposals submitted to NSF in all fields of science, engineering, mathematics, and education and results from such proposals.</li>
                </ol>
              </div>
              <div className='col-md-6'>
                <h4>NIH: CFR Parts 50 and 93</h4>
                <Divider/>
                <p><em>Research misconduct</em> means <strong>fabrication</strong>, <strong>falsification</strong>, or <strong>plagiarism</strong> in proposing, performing, or reviewing research, or in reporting research results.</p>
                <ol type='a'>
                  <li>Fabrication is making up data or results and recording or reporting them.</li>
                  <li>Falsification is manipulating research materials, equipment, or processes, or changing or omitting data or results such that the research is not accurately represented in the research record.</li>
                  <li>Plagiarism is the appropriation of another person’s ideas, processes, results, or words without giving appropriate credit.</li>
                  <li>Research misconduct does not include honest error or differences of opinion.</li>
                </ol>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Research Misconduct: Plagiarism' />
          <Divider/>
          <CardText>
            <div className='row'>
              <div className='col-md-6'>
                <h4>Two Elements</h4>
                <Divider/>
                <ul>
                  <li>Attribution (a specific passage)
                    <ul>
                      <li>Attribute specific idea or words to another</li>
                    </ul>
                  </li>
                  <li>Documentation (the correct citation)
                    <ul>
                      <li>Cite the source of the idea or words</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className='col-md-6'>
                <h4>Shades of Grey?</h4>
                <Divider/>
                <ul>
                  <li>"Common knowledge" does not need to be attributed or documented</li>
                  <li>Definition of plagiarism is not static
                    <ul>
                      <li>Definition changes across time and space</li>
                      <li>At least 11 different definitions used on CSU campus</li>
                    </ul>
                  </li>
                  <li>Self Plagiarism
                    <ul>
                      <li>ORI announced that copying >2 sentences from your own paper into your own grant is considered self-plagiarism; even for Methods!</li>
                      <li>No faculty at CSU concur with that definition, although some would argue that this may constitute copyright violation</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='iThenticate: Plagiarism Detection Software' />
          <Divider/>
          <CardText>
            <ul>
              <li>Used by Many Agencies and Companies
                <ul>
                  <li>Federal agencies such as NSF, DOE</li>
                  <li>Elsevier, Oxford University Press, Random House, Nature Publishing Group, Wiley-Blackwell, IEEE, ACS</li>
                </ul>
              </li>
              <li>If these groups detect similarity the grant/manuscript may be rejected; or, the CSU RIO may be contacted with an allegation of plagiarism.</li>
              <li>CSU has an open license with iThenticate
                <ul>
                  <li><a href='http://www.ithenticate.com/'>http://www.ithenticate.com/</a></li>
                </ul>
              </li>
              <li>Compares document against all articles published on the internet</li>
              <li>Similarity score “flags” potential plagiarism</li>
              <li><a href='http://libguides.colostate.edu/content.php?pid=413097'>http://libguides.colostate.edu/content.php?pid=413097</a></li>
              <li><strong>Poor citations can => an allegation of misconduct!</strong></li>
            </ul>
            <div className='row'>
              <div className='col-md-6'>
                <h4>iThenticate: Similarity Report</h4>
                <Divider />
                <a href={config.appRoot+'images/iThenticate-SimilarityReport.png'}>
                  <img
                    src={config.appRoot+'images/iThenticate-SimilarityReport.png'}
                    alt='iThenticate Similarity Report'
                    style={{maxWidth:'100%'}}/>
                </a>
              </div>
              <div className='col-md-6'>
                <h4>iThenticate: Side-By-Side Comparison</h4>
                <Divider />
                <a href={config.appRoot+'images/iThenticate-SideBySide.png'}>
                  <img
                    src={config.appRoot+'images/iThenticate-SideBySide.png'}
                    alt='iThenticate Side by Side Comparison'
                    style={{maxWidth:'100%'}}/>
                </a>
              </div>
            </div>
            <p>For access to iThenticate email: <a href='mailto:VPR_iThenticate_Requests@mail.colostate.edu'>VPR_iThenticate_Requests@mail.colostate.edu</a></p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='When confronted with a quandary while writing?' />
          <Divider/>
          <CardText>
            <ul>
              <li>Stop</li>
              <li>Insert a comment into your draft</li>
              <li>Go back to your primary sources</li>
              <li>Get a second opinion</li>
              <li>Don’t be afraid of crediting in a footnote</li>
              <li>Too much information to your advisor is more helpful than is too little</li>
              <li>Especially if you are writing your <strong>dissertation</strong>!</li>
            </ul>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Research Misconduct Process' />
          <Divider/>
          <CardText>
            <p>Colorado State University has developed policies and procedures to deal with research misconduct. Below is the process that is followed to determine if there is a case of research misconduct:</p>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Complaint</strong></div>
              <div className='col-md-10 def'>Complainant(s) produce Allegation(s) against a Respondent(s)</div>
            </div>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Pre-Inquiry</strong></div>
              <div className='col-md-10 def'>
                <p>That allegation is reported to the Dean, who performs a Pre-Inquiry review for jurisdiction and credibility</p>
                <div className='text-box'>
                  <h5>Pre-Inquiry Review - Jurisdiction & Credibility</h5>
                  <Divider/>
                  <p>"In the Pre-inquiry stage the Research Integrity Office (RIO), in consultation with the Dean and/or Department Chair assesses the circumstances of the concern initially to evaluate, as a preliminary matter based on the facts available, whether there is sufficient and credible evidence, whether federally supported research is involved and if the allegations fall with the definition of Research Misconduct such that an Inquiry should be conducted. This is an informal, preliminary step to determine if a concern or allegation is entirely frivolous and devoid of reason to pursue, if it should be referred to another office for resolution or if it should be referred to an Inquiry Committee for further fact finding and evaluation."</p>
                </div>
              </div>
            </div>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Inquiry</strong></div>
              <div className='col-md-10 def'>
                A convened Inquiry faculty committee recommends to the Vice President for Research (VPR) that they think an Investigation is warranted
                <div className='text-box'>
                  <h5>Inquiry and Investigation</h5>
                  <Divider/>
                  <ul>
                    <li>Inquiry: Faculty panel determines, based on records and interviews, that there is sufficient, credible evidence that warrants a closer look.</li>
                    <li>Investigation: Second faculty panel determines, based on the preponderance of the evidence, that misconduct either did or did not occur, and if so, by whom.</li>
                    <li>Determinations are forwarded to VP for Research for a final ruling.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Investigation</strong></div>
              <div className='col-md-10 def'>If the VPR concurs, the Research Integrity Officer (RIO) convenes an Investigation committee, whose final report goes to the VPR</div>
            </div>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Final Report</strong></div>
              <div className='col-md-10 def'>Appeals of the findings of the final report go to the Provost</div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Who to Contact: Research Integrity Officer (RIO)' />
          <Divider/>
          <CardText>
            <p><a href='http://www.chem.colostate.edu/people/erfisher/'>Dr. Ellen Fisher</a> is the Research Integrity Officer (RIO)</p>
            <ul>
              <li>Primary contact for departments and deans with questions about potential misconduct issues</li>
              <li>Represents CSU with the Office of Research Integrity (ORI)</li>
              <li>Manages the CSU misconduct process to meet institutional, state and federal standards</li>
            </ul>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Who is covered by the CSU policy?' />
          <Divider/>
          <CardText>
            <p>All members of the CSU academic community, including academic faculty, students, administrative-professionals, state classified personnel, and postdoctoral trainees; can report or be named a respondent.</p>
            <p>Situations involving graduate and undergraduate students as respondents would by covered by this policy <strong>only to the extent that federal funds are involved</strong> and the sponsor of those funds requires procedures which the VPR does not deem to be met by existing campus procedures for dealing with student misconduct (e.g., Academic Dishonesty proceedings).</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Reporting Concerns' />
          <Divider/>
          <CardText>
            <p>All employees and individuals associated with CSU should report observed, suspected or apparent Research Misconduct to their Department Head, Dean, the RIO and/or the Vice President for Research. If an individual is unsure whether a suspected incident falls within the definition of scientific misconduct, an informal call may be placed to one of these individuals.</p>
            <p>Members of the campus community may use the <a href='http://reportinghotline.colostate.edu/'>Reporting and Compliance Hotline</a> mechanisms to report the following types of issues:</p>
            <ul>
              <li>Fiscal misconduct.</li>
              <li>Abuse of time and other resources.</li>
              <li>Violations of federal or state law or regulations. </li>
              <li>Serious violations of University policy.</li>
              <li>Research or scientific misconduct.</li>
              <li>Waste of University resources, funds or property.</li>
              <li>Abuse of university authorities.</li>
              <li>Public safety issues.</li>
            </ul>
            <div className='text-box'>
              <h4>How to report a possible violation:</h4>
              <Divider/>
              <div className='row'>
                <div className='col-md-4'>
                  <h4>Online</h4>
                  <Divider/>
                  <p><a href='http://reportinghotline.colostate.edu/Report.aspx'>Compliance Reporting Hotline: Online Reporting</a></p>
                </div>
                <div className='col-md-4'>
                  <h4>Voice Message</h4>
                  <Divider/>
                  <p><a href='http://reportinghotline.colostate.edu/Phone.aspx'>Compliance Reporting Hotline: Phone Reporting</a></p>
                  <p>Phone Number:
                    <a href='tel:9704915552'>970-491-5552</a>
                  </p>
                </div>
                <div className='col-md-4'>
                  <h4>Mail-in</h4>
                  <Divider/>
                  <p><a href='http://reportinghotline.colostate.edu/SurfaceMail.aspx'>Compliance Reporting Hotline: Mail-in Reporting</a></p>
                  <div>
                    <strong>Mail-In Reporting Address:</strong>
                    <br/>
                    <p className='indent'>
                      Internal Auditing Department
                      <br/>
                      Attn: Reporting Hotline
                      <br/>
                      Colorado State University
                      <br/>
                      301 Johnson Hall
                      <br/>
                      Campus Delivery 0019
                      <br/>
                      Fort Collins, CO 80523
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Whistleblowing' />
          <Divider/>
          <CardText>
            <div className='text-box'>
              <ul>
                <li>Your right to “blow the whistle” (report possible wrongdoings) is protected by the US Constitution and upheld by state regulations.</li>
                <li>Whistleblowing, particularly when vulnerable subjects or federal funds are involved, is the right thing to do and is expected from you.</li>
                <li>Blowing the whistle may place you at risk, but the university will take every measure possible to prevent retaliation against a good faith allegation of misconduct.</li>
                <li>Allegations of retaliation should be brought to the attention of the <a href='http://www.csusystem.edu/general-counsel'>Office of General Counsel</a>.</li>
              </ul>
              <p>Refer to <a href='http://frwebgate.access.gpo.gov/cgi-bin/get-cfr.cgi?TITLE=42&PART=50&SECTION=103&YEAR=2000&TYPE=PDF'>42 C.F.R. Section 50.103(d) (13)</a> and <a href='http://www.access.gpo.gov/nara/cfr/waisidx_06/42cfr93_06.html'>42 C.F.R.93</a> for the Office of Research Integrity (DHHS) guidelines for handling research misconduct and whistleblowers.</p>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Case Study: Nelson Nice' />
          <Divider/>
          <CardText>
            <p>Nelson Nice is on the engineering faculty. Three years ago he headed a research project funded by the National Science Foundation that involved an undergraduate student assistant, Jason Smart. Jason worked for a few months on the project but left the project before the work was completed.</p>
            <p>One year later Jason, then a graduate student at another university, wrote to Nelson Nice and asked him if he would send him a copy of the final report of the work they had done together. Jason explained that he was now working in a related area and that it would help him to see how things worked out in the project. Dr. Nice was not anxious to share the report with Jason Smart. However, he was impressed with Jason's interest in the overall area and did not want to discourage him. Dr. Nice ultimately sent the report to Jason and pointed out to him that, although the research was now complete, it had not turned out as he had hoped, and he had no plans to do further work in the area. Dr. Nice wished Jason well and hoped that this report might be of some help in giving him new ideas.</p>
            <p>Several years later Dr. Nice discovered that Jason Smart used the report as his Master's Thesis -- adding only a couple of introductory paragraphs, a concluding section, and an updated bibliography. No reference to Nelson Nice appeared anywhere in the thesis!</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Question #1' />
          <Divider/>
          <CardText>
            <h4>Did Jason’s actions constitute research misconduct?</h4>
            <RadioButtonGroup name='0'>
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'a')}
                value='a'
                label='A) Yes. He plagiarized Nelson Nice’s report.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'b')}
                value='b'
                label='B) No. Although his actions may be considered unethical this would likely be thought of as authorship dispute rather than research misconduct.' />
            </RadioButtonGroup>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Question #2' />
          <Divider/>
          <CardText>
            <h4>What instance(s), if any, describe research misconduct at CSU? (Choose all that apply)</h4>
            <RadioButtonGroup name='1'>
              <RadioButton
                checkedIcon={getAnswer(this.state.answer1,'a')}
                value='a'
                label='A) Spilling coffee on a lab notebook and re-entering the data from your team member’s notebook' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer1,'b')}
                value='b'
                label='B) Changing a decimal point on a piece of outlying data to strengthen the statistical significance of a finding' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer1,'c')}
                value='c'
                label='C) Filling in answers to complete a survey as you believe the survey respondent overlooked the last page' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer1,'d')}
                value='d'
                label='D) Supplying your research project notes to a research team member who has been out ill' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer1,'e')}
                value='e'
                label='E) Both B) and C)' />
            </RadioButtonGroup>
          </CardText>
        </Card>
      </SectionContainer>
    );
  }
}
