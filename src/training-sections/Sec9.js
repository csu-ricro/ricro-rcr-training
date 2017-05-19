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
         answer0: getSectionTrio().current.answers[0],
         answer1: getSectionTrio().current.answers[1],
         answer2: getSectionTrio().current.answers[2]
      }
   }
   render() {
      return (
         <SectionContainer sectionTrio={getSectionTrio()}>
            <Card className='section-container'>
               <CardTitle title='Conflict of Interest'/>
               <Divider/>
               <CardText>
                  <h4><em>Working Together - Creating Knowledge</em></h4>
                  <p>The issue of Conflict of Interest (COI) has gained visibility in the national media and in the research community as a result of increased funding from industry and a growing number of researchers engaged in consulting. Highly publicized cases where researchers failed to report significant COI have emerged at several preeminent institutions.</p>
                  <blockquote>
                     <p>Conflicts of interest, or at least potential conflicts of interest, never will be entirely removed from our modern and increasingly complex society. The goal for universities and companies should be to recognize and pragmatically manage conflict-of-interest issues in a way that preserves the core values of academia and fosters the benefits of innovation for all society.</p>
                     <footer>
                        Business-Higher Education Forum (2001).
                        <cite>American Council on Education & the National Alliance of Business: The University-Industry Research Collaboration Initiative.</cite>
                     </footer>
                  </blockquote>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='CSU Institutional Approach - Philosophical'/>
               <Divider/>
               <CardText>
                  <ul>
                     <li>Encourages professional activities that enhance and further academic and professional careers.</li>
                     <li>COI are not necessarily unwarranted, unethical, or illegal; nor are they always avoidable.</li>
                     <li>Disclosure/management protects the investigator and the integrity of the science.</li>
                  </ul>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='University Policy & Guidance'/>
               <Divider/>
               <CardText>
                  <blockquote>
                     <p>
                        Public employment and appointment is a public trust, and any effort to realize personal gain through official conduct, other than as compensation set through established processes, or disclosure of confidential information, is a violation of that trust.
                     </p>
                     <p>
                        External obligations, financial interests, and activities of each University employee must be conducted so that there is no conflict or interference with the employee’s primary obligation and commitment to the University.
                     </p>
                     <footer><a href='http://facultycouncil.colostate.edu/faculty-manual-section-d/#D.7.7'>Section D.7.7.1/Faculty Manual</a></footer>
                  </blockquote>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='What does COI mean at CSU?'/>
               <Divider/>
               <CardText>
                  <p>External obligations, financial interests and activities that may conflict or interfere or may appear to conflict or interfere with the employee’s obligation to the University.</p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='What does COI mean at the Public Health Service?'/>
               <Divider/>
               <CardText>
                  <blockquote>
                     <p>Investigators who are planning to participate in PHS-funded research must disclose their Significant Financial Interests (SFIs) over the previous twelve-month period to their Institution no later than at the time of application for PHS-funded research…the Investigator must disclose his/her interests, as well as those of the Investigator’s spouse and dependent children, that reasonably appear to be related to the Investigator’s institutional responsibilities.</p>
                     <footer>
                        National Institutes of Health (<a href='http://www.nih.gov/'>NIH</a>) Notice Number: NOT-OD-13-004
                     </footer>
                  </blockquote>
                  <div className='row'>
                     <div className='col-md-6'>
                        <h4>Agencies funded by the Public Health Service (PHS) </h4>
                        <Divider/>
                        <ul>
                           <li>Food and Drug Administration (FDA)</li>
                           <li>Centers for Disease Control (CDC)</li>
                           <li>National Institutes of Health (NIH)</li>
                           <li>Agency for Healthcare Research & Quality (AHRQ)</li>
                           <li>Health Resources & Services Administration (HRSA)</li>
                           <li>Agency for Toxic Substances & Disease Registry (ATSDR)</li>
                           <li>Indian Health Service (IHS)</li>
                           <li>Substance Abuse & Mental Health Services Administration (SAMHSA)</li>
                        </ul>
                     </div>
                     <div className='col-md-6'>
                        <h4>What is a Significant Financial Interest (SFI)?</h4>
                        <Divider/>
                        <p>A financial interest consisting of one or more of the following interests of the Investigator (and those of the Investigator’s spouse and dependent children) that reasonably appears to be related to the Investigator’s institutional responsibilities:</p>
                        <ul>
                           <li>Payment for professional services other than salary (consulting fees, honoraria, paid authorship, etc.), stock holdings, stock options or any other ownership interest that exceeds $5000.00</li>
                           <li>Intellectual property rights (patents, copyrights)</li>
                           <li>Reimbursed or sponsored travel OTHER than travel sponsored by Federal, state, local government or the Investigator’s Institution</li>
                           <li>An SFI does NOT apply to salary, royalties or other remuneration paid by the Institution</li>
                        </ul>
                        <p className='disclaimer'><a href='http://grants.nih.gov/grants/policy/coi/'>(Federal Register 42 C.F.R. Part 50, Subpart F)</a></p>
                     </div>
                  </div>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='What does COI mean at National Institute of Health?'/>
               <Divider/>
               <CardText>
                  <p>COI is "A significant financial interest that could directly and significantly affect the design, conduct, or reporting of NIH funded research."<sup><a href='http://grants.nih.gov/grants/policy/coi/FCOI_Presentation.ppt'>1</a></sup></p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Potential vs. Actual COI'/>
               <Divider/>
               <CardText>
                  <p>A conflict of interest in not inherently problematic. Each COI must be reviewed and managed appropriately by the institution and researcher.</p>
                  <div>
                     <p>An <strong>apparent or potential</strong> conflict of interest may develop into an <strong>actual</strong> conflict of interest.</p>
                     <ul>
                        <li>Conflict of interest implies that there is a potential for COI, but it does not imply a likelihood</li>
                        <li>Conflict of interest may exist regardless of whether decisions are driven by personal interest</li>
                        <li>Conflict of interest is <strong>not</strong> misconduct in research</li>
                     </ul>
                     <p><strong>REMEMBER</strong>: There is nothing inherently wrong with having a conflict of interest. However, individuals are obligated to disclose COI and institutions are obligated to manage it.</p>
                  </div>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Activities that might be perceived as potential COI:'/>
               <Divider/>
               <CardText>
                  <div>
                     <ul>
                        <li>A researcher may be asked to provide consulting services for another public institution or private company from which he or she will be paid.</li>
                        <li>A researcher may hold a position in their spouse’s company. This company may be in a position to provide services to CSU. </li>
                        <li>A researcher may be a stockholder in an outside entity.</li>
                        <li>A researcher may own a company that might be in a position to provide services to CSU.</li>
                     </ul>
                  </div>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Types of Conflict of Interest'/>
               <Divider/>
               <CardText>
                  <p>COI is defined in four main types. The most well-known type is Individual-Financial COI.</p>
                  <div className='row'>
                     <div className='col-md-6'>
                        <h4>Individual - Financial</h4>
                        <Divider/>
                        <blockquote>
                           <p>Conflict of interest can affect any individual involved in research, including the Investigator, and any other person responsible for the "design, conduct, or reporting of externally sponsored research"</p>
                           <footer>AAU Task Force on Research Accountability, October 2001</footer>
                        </blockquote>
                        <p>These individuals can include co-PIs, post-docs, students, study coordinators, research technicians, data analysts, IRB members or anyone involved in technology transfer, procurement, education, and healthcare.</p>
                        <p>Individual financial conflict of interest which affects these individuals may include, but is not limited to:</p>
                        <ul>
                           <li>Gifts supporting the principal investigator’s research activity</li>
                           <li>Proposals that would affect the investigator’s financial interest in an outside entity</li>
                           <li>Technology licensing agreements whereby the investigator has a financial interest</li>
                        </ul>
                     </div>
                     <div className='col-md-6'>
                        <h4>Institutional - Financial</h4>
                        <Divider/>
                        <blockquote>
                           <p>Institutional COI may occur when the institution has an external relationship or financial interest in a faculty research project. The "institution" includes senior management or trustees, department, school and/or affiliated organizations and foundations.</p>
                           <footer>AAU Task Force on Research Accountability, October 2001</footer>
                        </blockquote>
                        <p>Examples may include:</p>
                        <ul>
                           <li>Patent held by institution and used to conduct research ultimately bringing financial benefit to the institution</li>
                           <li>Potential external relationships with a significant financial impact for the University</li>
                           <li>Potential conflicts of interests that create serious policy issues or have a significant impact on the University’s mission or reputation</li>
                           <li>Potential conflicts surrounding the financial actions of the President of the University</li>
                           <li>Ownership in companies making significant contributions to endowed chairs or faculty</li>
                           <li>Financial and intellectual property holdings (e.g. Institution has a financial interest in technology, company, or invention and the research is conducted at that Institution).</li>
                        </ul>
                     </div>
                  </div>
                  <div className='row'>
                     <div className='col-md-6'>
                        <h4>Non-Financial</h4>
                        <Divider/>
                        <blockquote>
                           <p>Conflict of interest can also be non-financial in nature. Researchers feel the pressure to publish, to obtain funding, promotions, respect from peers, etc.; as a result, conflicts of interest may arise.</p>
                           <footer>AAU Task Force on Research Accountability, October 2001</footer>
                        </blockquote>
                        <ul>
                           <li>Examples of Non-financial COI may include1:</li>
                           <li>Career and/or Personal Advancement (e.g., Researcher interests affect communication and decision-making) </li>
                           <li>Favoritism – Family and Other (e.g., Institution adopts a policy which provides significant non-financial benefit to another party). </li>
                           <li>Scientific Bias (e.g., Faculty Member uses textbook he/she authored for a class in an inappropriate manner)</li>
                        </ul>
                     </div>
                     <div className='col-md-6'>
                        <h4>Other Transactions</h4>
                        <Divider/>
                        <p>Other transactions that may qualify as a conflict of interest include:</p>
                        <ul>
                           <li>Material and / or services procurement from an entity if the Investigator can influence the transaction or has personal interest in the entity.</li>
                           <li>Proposals in which Investigator has a personal and / or financial interest in the sub-contractor, collaborator and vendor.</li>
                           <li>Universities hold equity stakes in businesses that sponsor research on campus.</li>
                        </ul>
                     </div>
                  </div>
                  <h4>Conflict of Commitment</h4>
                  <Divider/>
                  <p>Any external commitments which substantially burden or interfere with the employee’s primary obligations and commitments to the University.</p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Importance of Identifying COI'/>
               <Divider/>
               <CardText>
                  <p>Failure to identify, disclose, and manage COI appropriately can damage careers and undermine years of quality work.</p>
                  <p>Undisclosed or unmanaged conflicts of interest can:</p>
                  <ul>
                     <li>Arouse suspicion and undermine colleagues’, student, and public trust</li>
                     <li>Materially compromise data or interpretations of results</li>
                     <li>Place study participants, patients, or other end users of technology at risk if data, interpretations, or decision-making is compromised by conflicts</li>
                  </ul>
                  <p><strong>Remember</strong>: Conflicts of interest do not only affect an individual. An unmanaged COI can have "ripple effects" through a research team, an institution, a discipline, and millions in the public.</p>
                  <p>Institutions are updating and publicizing COI policies in response to researchers’ increased exposure to COI.</p>
                  <h4>COI Policies</h4>
                  <Divider/>
                  <p>Complex research portfolios, increased collaboration, multiple appointments and collaborations with for-profits have increased investigators’ exposure to apparent and actual COI.</p>
                  <p>In response to this increased exposure, and increased media interest and recent high-profile investigations, institutions are reiterating the importance of policies on conflict of interest.</p>
                  <p>Institutional COI policies emphasize the need to:</p>
                  <ul>
                     <li>Protect the integrity of the research</li>
                     <li>Protect the Institution, faculty, students and research staff</li>
                     <li>Protect the research participants</li>
                  </ul>
                  <p><strong>REMEMBER</strong>: Managing COI is one of the responsibilities of managing a research portfolio.</p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Is it really a COI?'/>
               <Divider/>
               <CardText>
                  <div className='row'>
                     <div className='col-md-4'>
                        <h4>Perceived</h4>
                        <Divider/>
                        <p>an association outside the University that could look like a conflict of interest.</p>
                     </div>
                     <div className='col-md-4'>
                        <h4>Potential</h4>
                        <Divider/>
                        <p>an association outside the University that could develop into a conflict of interest (or a perceived conflict of interest).</p>
                     </div>
                     <div className='col-md-4'>
                        <h4>Actual</h4>
                        <Divider/>
                        <p>an association outside the University that meets the University definition of a conflict of interest.</p>
                     </div>
                  </div>
                  <p className='text-center'><strong>All must be disclosed!</strong></p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Institutional Approach - Administrative'/>
               <Divider/>
               <CardText>
                  <ul>
                     <li>The Department Head holds a key role and responsibility in administering COI review and management plans.</li>
                     <li>The Provost provides oversight of this process.</li>
                     <li>The CSU COI Committee provides administrative assistance to the Provost, facilitating the oversight process.</li>
                     <li>In the near future, a research administration management program (Kuali Coeus, related to KFS) will be adopted by CSU. Kuali Coeus will include a COI disclosure 'module” that will allow investigators, Department Heads, the Provost and the COI Committee to administer COI disclosure and management plans electronically.</li>
                  </ul>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Disclosures – Two Types'/>
               <Divider/>
               <CardText>
                  <div className='row'>
                     <div className='col-md-6'>
                        <h4>Annual</h4>
                        <Divider/>
                        <p>Once a year usually during performance evaluations using the Role & Responsibility survey.</p>
                     </div>
                     <div className='col-md-6'>
                        <h4>Event Based</h4>
                        <Divider/>
                        <p>Whenever there is a change in circumstances in regard to a potential conflict of interest.</p>
                        <p>Event based disclosures related to a proposal submission for external funding are made using the <a href='http://provost.colostate.edu/faculty-administrative-professionals/'>Role & Responsibility Survey</a> and a <a href='https://vpr.research.colostate.edu/OSP/sponsored-programs-forms/'>Sponsored Programs form SP-10</a>.</p>
                     </div>
                  </div>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Management Plans'/>
               <Divider/>
               <CardText>
                  <p>Should describe the situation giving rise to the actual or potential conflict of interest and consider addressing the following issues as appropriate to the specific situation:</p>
                  <div className='row'>
                     <div className='col-md-6'>
                        <ul>
                           <li>Conflict of Interest Summary</li>
                           <li>Role in Contracts</li>
                           <li>Disclosures</li>
                           <li>Use of University Resources within University Policy.</li>
                           <li>Regulatory Approvals</li>
                           <li>Reaffirm Commitment to CSU</li>
                        </ul>
                     </div>
                     <div className='col-md-6'>
                        <ul>
                           <li>Conflicts related to student/advisor roles</li>
                           <li>Designate Administrator for Oversight Responsibility</li>
                           <li>Documentation of work performed provides an opportunity for others to replicate, evaluate quality and outcome</li>
                           <li>Reporting Timelines </li>
                           <li>Insert obligation disclosure</li>
                        </ul>
                     </div>
                  </div>
                  <h4>Benefits of Management Plan</h4>
                  <Divider/>
                  <ul>
                     <li>Preserves Integrity</li>
                     <li>Protects against inadvertent and unacceptable bias</li>
                     <li>Discourages suspicion of wrongdoing</li>
                     <li>Assures the faculty member, the University community and the public that research is being conducted responsibly</li>
                     <li>Preserves public support for academic research</li>
                  </ul>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Wrap-up'/>
               <Divider/>
               <CardText>
                  <ul>
                     <li>As individuals involved in research increase their involvement in entrepreneurial activities, the opportunity for real/perceived COI also increases.</li>
                     <li>One management plan does not fit all.</li>
                     <li>COI management is an ongoing activity not a one-time disclosure.</li>
                     <li>COI policies/procedures protect both the individual and the institution.</li>
                  </ul>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='COI/COC "Tool Box"'/>
               <Divider/>
               <CardText>
                  <ul>
                     <li>Provost and Executive Vice President’s Website.
                        <ul>
                           <li>References and Resources for Faculty and Administrative Professional.</li>
                           <li>Annual Role & Responsibility Survey (also used for event-based updates)</li>
                           <li><a href='http://provost.colostate.edu/faculty-administrative-professionals/'>COI/COC Assessment Guidelines</a></li>
                        </ul>
                     </li>
                     <li>Faculty Manual </li>
                     <li>College Research Associate Dean</li>
                     <li>Conflict of Interest Committee</li>
                  </ul>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Case Study: Conflict of Interest'/>
               <Divider/>
               <CardText>
                  <p>Dr. Ashanti Quick is an internationally renowned author and an established authority in Creative Writing. In addition to teaching and advising at CSU, Dr. Quick is very much in demand across the country and works with her publisher to promote her books and present lectures at various writing workshops. She also supplements her income by serving as a panel member at the Iowa Writer’s Workshop (one month in the summer and during spring and fall breaks), consulting with a state literacy advisory panel (two evenings/ month), and serving as an ad hoc consultant to a board of a private foundation (approximately 2 hours/week).</p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Question #1'/>
               <Divider/>
               <CardText>
                  <h4>Does a Financial Conflict of Interest appear to exist?</h4>
                  <RadioButtonGroup name='0'>
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer0,'a')}
                        value='a'
                        label='A) Yes' />
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer0,'b')}
                        value='b'
                        label='B) No' />
                  </RadioButtonGroup>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Question #2'/>
               <Divider/>
               <CardText>
                  <h4>Does a Conflict of Commitment appear to exist?</h4>
                  <RadioButtonGroup name='1'>
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer1,'a')}
                        value='a'
                        label='A) Yes' />
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer1,'b')}
                        value='b'
                        label='B) No' />
                  </RadioButtonGroup>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Question #3'/>
               <Divider/>
               <CardText>
                  <h4>Dr. Quick should:</h4>
                  <RadioButtonGroup name='2'>
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer2,'a')}
                        value='a'
                        label='A) Resign from CSU if she is not willing to give up her outside professional development, as conflict of interests should be eliminated' />
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer2,'b')}
                        value='b'
                        label='B) Work with her department head to disclose her outside activities in a management plan' />
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer2,'c')}
                        value='c'
                        label='C) Not do anything, as professional development and outreach is encouraged by the University' />
                  </RadioButtonGroup>
               </CardText>
            </Card>
         </SectionContainer>
      );
   }
}
