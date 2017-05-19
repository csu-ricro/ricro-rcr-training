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
               <CardTitle title='Mission-Driven Institutions'/>
               <Divider/>
               <CardText>
                  <p>Most universities have similar tripartite missions. The balance of activities amongst the three missions varies depending upon the priorities of the institution.</p>
                  <p>CSU Mission: Inspired by its land-grant heritage, Colorado State University is committed to excellence, setting the standard for public research universities in teaching, research, service and extension for the benefit of the citizens of Colorado, the United States, and the world</p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='How does CSU get their revenue?'/>
               <Divider/>
               <CardText>
                  <p>As you can see, a large portion of revenue, 29%, comes from sponsored programs. It is important that we keep strong relationships with the agencies that provide us with research funding and strive for university-wide compliance to ensure that we continue to receive funding from these sponsors.</p>
                  <p className='disclaimer'>Source: <a href='http://bursar.colostate.edu/Forms/Fin_Statements/finacct15.pdf#zoom=100'>http://bursar.colostate.edu/Forms/Fin_Statements/finacct15.pdf#zoom=100</a></p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Rules Governing Purchases'/>
               <Divider/>
               <CardText>
                  <h3><em>Cost Accounting Standards</em></h3>
                  <p>Each source of funding comes with a set of rules on how and for what the money can be spent. CSU must use "<strong>Cost Accounting Standards</strong>" (CAS) including:</p>
                  <ul>
                     <li>Consistency in estimating, accumulating and reporting costs</li>
                     <li>Consistency in allocating costs incurred for the same purpose</li>
                     <li>Accounting for unallowable costs</li>
                     <li>Consistency in using the same cost accounting period</li>
                  </ul>
                  <p>When a departmental accountant or Sponsored Programs determines if a cost is "allowable", they will refer to these documents.</p>
                  <p>CAS are described in:</p>
                  <div className='row'>
                     <div className='col-md-4'>
                        <h4>OMB Circular A-21</h4>
                        <Divider/>
                        <p>This Circular establishes principles for determining costs applicable to grants, contracts, and other agreements with educational institutions:</p>
                        <ul>
                           <li>Defines the financial framework for administering Federally sponsored research</li>
                           <li>Describes the basis for calculating facilities and administrative ("F&A" or indirect) costs</li>
                           <li>Provides a reference section for determining how to charge specific, common costs </li>
                           <li>Familiar to most research personnel</li>
                        </ul>
                        <p><a className='pdf' href='http://www.whitehouse.gov/sites/default/files/omb/assets/omb/fedreg/2005/083105_a21.pdf'>OMB Circular A-21</a></p>
                     </div>
                     <div className='col-md-4'>
                        <h4>OMB Circular A-110</h4>
                        <Divider/>
                        <p>This Circular sets forth standards for obtaining consistency and uniformity among Federal agencies in the administration of grants to and agreements with institutions of higher education, hospitals, and other non-profit organizations:</p>
                        <ul>
                           <li>Subpart A - General</li>
                           <li>Subpart B – Pre-award Requirements (forms for application, special award conditions, etc.)</li>
                           <li>Subpart C – Post-award Requirements (financial management, cost sharing, allowable costs, period of availability of funds, etc.)</li>
                           <li>Subpart D – After the Award Requirements</li>
                        </ul>
                        <p><a className='pdf' href='http://www.whitehouse.gov/sites/default/files/omb/assets/omb/circulars/a110/2cfr215-0.pdf'>OMB Circular A-110</a></p>
                     </div>
                     <div className='col-md-4'>
                        <h4>OMB Circular A-133</h4>
                        <Divider/>
                        <p>This Circular sets forth standards for obtaining consistency and uniformity among Federal agencies for the audit of States, local governments, and non-profit organizations expending Federal awards:</p>
                        <ul>
                           <li>Applies to non-Federal entities that expend $500,000 or more in a year in Federal awards</li>
                           <li>Required annually (or biennial in specific cases) and usually conducted with an institution’s Financial Statement audit</li>
                           <li>Performed by an independent audit firm</li>
                           <li>A-133 provides specific guidance to auditors – "Compliance Supplement"</li>
                           <li>Must comply with GAGAS (Generally Accepted Government Auditing Standards)</li>
                           <li>Must comply with GAAP (Generally Accepted Accounting Principles)</li>
                           <li>Must comply with regulations stated in OMB Circulars (e.g. A21, A110)</li>
                        </ul>
                        <p><a className='pdf' href='http://www.whitehouse.gov/sites/default/files/omb/assets/a133/a133_revised_2007.pdf'>OMB Circular A-133</a></p>
                     </div>
                  </div>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Each Granting Agency Publishes Spending Standards '/>
               <Divider/>
               <CardText>
                  <div className='row'>
                     <div className='col-md-4'>
                        <h4>National Institutes of Health (NIH)</h4>
                        <Divider/>
                        <p>The NIH Grants Policy Statement (NIHGPS) provides policy requirements that serve as the terms and conditions of NIH grant awards.</p>
                        <p>Website: <a href='http://grants.nih.gov/grants/policy/policy.htm'>http://grants.nih.gov/grants/policy/policy.htm</a></p>
                     </div>
                     <div className='col-md-4'>
                        <h4>National Science Foundation</h4>
                        <Divider/>
                        <p>The Grant Policy Manual (GPM) is a compilation of NSF policies and procedures for use by the grantee community, including the award process, from issuance and administration of an award through closeout.</p>
                        <p>Website: <a href='http://www.nsf.gov/pubs/manuals/gpm05_131/index.jsp'>http://www.nsf.gov/pubs/manuals/gpm05_131/index.jsp</a></p>
                     </div>
                     <div className='col-md-4'>
                        <h4>Codification of federal regulations</h4>
                        <Divider/>
                        <p>The Federal Acquisition Regulations (FAR) was established to codify uniform policies for acquisition of supplies and services by agencies of the federal government.</p>
                        <p>Website: <a href='https://www.acquisition.gov/?q=browsefar'>https://www.acquisition.gov/?q=browsefar</a></p>
                     </div>
                  </div>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Laptop Woes at a University'/>
               <Divider/>
               <CardText>
                  <p>A recent audit at Duke University has highlighted problems with the purchase of a laptop on federal grants. In a Duke audit, one of the disallowed costs was a laptop costing $3,364 (plus F&A of $1,817 totaling $5,181). The sum represented 13.3% of the disallowed costs. Because it was a statistical audit, the costs were extrapolated to the population as a whole. As a result, the laptop ultimately represented $221,260 of the overall disallowance of $1,661,011 from that audit.</p>
                  <p>The University had charged the NIH grant $3,364 for a laptop computer and asserted that the computer was used solely for project data and allowed the employee "the opportunity to work from home or wherever she may be located at anytime of the day." The auditor noted, however, that the involved employee devoted only 5 percent of her time to the project charged for her computer. The auditor did not accept the assertion that the computer was used solely for project data.</p>
                  <p>An auditor could ask to see a laptop and then determine what programs and data are on it. If there is an internet browser, an e-mail program, and lots of e-mails, one may get total disallowance unless each e-mail and contact is specifically related to the project to which the laptop was charged. The burden of proof in this situation is on the user not the auditor; a case of guilty until proven innocent.</p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='What can happen with a CAS error?'/>
               <Divider/>
               <CardText>
                  <ul>
                     <li>In the second half of FY 2015, financial penalties resulting from audits of sponsored research totaled:
                        <ul>
                           <li>$1.13 billion in audit receivables</li>
                           <li>$2.2 billion in investigative receivables</li>
                        </ul>
                     </li>
                     <li>In the last decade the number of annual criminal convictions of individuals or entities that engaged in improper compliance activities has more than quadrupled, to:
                        <ul>
                           <li>925 criminal convictions in the second half of FY2015</li>
                           <li>Additionally, there were 682 civil actions</li>
                        </ul>
                     </li>
                  </ul>
                  <p className='disclaimer'>
                     <strong>Source:</strong> <a href='https://oig.hhs.gov/reports-and-publications/archives/semiannual/2015/sar-fall15.pdf'>https://oig.hhs.gov/reports-and-publications/archives/semiannual/2015/sar-fall15.pdf</a>
                  </p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Financial Responsibility Starts with Learning Concepts '/>
               <Divider/>
               <CardText>
                  <h4>Effort Reporting</h4>
                  <Divider/>
                  <p>Effort reporting is the federally-mandated process by which the salary charged to a sponsored project is certified as being reasonable in relation to the effort expended on that project. You cannot draw a huge percentage of your salary from a grant unless you are spending the same percentage of your effort on that project.</p>
                  <p>Effort is a reasonable estimate of how an individual spent their time, and must equal 100%.</p>
                  <div className='row'>
                     <div className='col-md-6'>
                        <h4>Certifying Effort or Payroll</h4>
                        <Divider/>
                        <ul>
                           <li>Effort reports often present total percentages of payroll distributions to be used as a starting point, since it is often assumed that payroll distribution is monitored and revised based on effort expended</li>
                           <li>However, these percentages may need to be revised during certification based on actual expended effort</li>
                           <li>This after-the-fact confirmation is necessary for compliant effort reporting</li>
                        </ul>
                     </div>
                     <div className='col-md-6'>
                        <h4>Who Certifies Effort</h4>
                        <Divider/>
                        <ul>
                           <li>Individuals who receive sponsored project funding or apply effort to any sponsored projects are required to certify certification reports.</li>
                           <li>Effort reports should be signed by:
                              <ul>
                                 <li>An employee, principal investigator or other authorized official, or</li>
                                 <li>An individual who has sufficient technical knowledge to identify the efforts to specific activities and projects or has suitable means of verification that the work was performed.</li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <p>Refer to <a href='http://www.whitehouse.gov/sites/default/files/omb/assets/omb/fedreg/2005/083105_a21.pdf'>OMB Circular A-21 Section J.10.c(3)(e)</a> to refer to the federal regulations on Effort Reporting and <a href='http://www.hrs.colostate.edu/pdfs/hrs-manual-9-certification-reporting.pdf'>Section 9 of the Human Resources Services Manual</a> for the CSU policy.</p>
                  <h4>Charging Costs to Grants</h4>
                  <Divider/>
                  <p>Direct charges to a sponsored project must follow the agencies’ cost accounting standards (be allocable, allowable, reasonable, and consistently treated throughout the university). You cannot interpret the standards one way in one college but a different way in another college.</p>
                  <p>OMB Circular A-21 requires costs <strong>directly</strong> charged to a sponsored project to be:</p>
                  <ul>
                     <li><strong>Allocable</strong>; provides direct benefit</li>
                     <li><strong>Allowable</strong>; per university or sponsor policy or OMB Circular A-21</li>
                     <li><strong>Reasonable</strong> and necessary</li>
                     <li><strong>Consistently</strong> treated throughout the institution</li>
                     <li><strong>Available</strong> within the budget for the award</li>
                  </ul>
                  <p>Below are examples of items that are <strong>not allowable costs</strong> on grants.</p>
                  <h4>Cost Transfer Requirements</h4>
                  <Divider/>
                  <p>An after-the-fact reallocation of an expense, either salary or non-salary costs, associated with a sponsored program after the expense was initially charged to another sponsored program or non-sponsored program must be adequately justified. You can’t suddenly transfer the costs associated with one grant to another grant solely because you realize you have "too much money" in that account.</p>
                  <ul>
                     <li>Federal requirements for cost transfers require that they are timely, supported, reasonable, allocable, allowable, and monitored </li>
                     <li>Under no circumstances may a Cost Transfer be made with the sole intent of using up the unexpended balance in a federal account</li>
                     <li>The Federal Government questions the propriety of Cost Transfers on federally funded projects</li>
                     <li>Frequent, tardy, and inadequately supported transfers, particularly if they involve projects with significant cost overruns or unexpended fund balances, raise serious questions</li>
                     <li>The Government expects documentation and an authorization process for all Cost Transfers on federally assisted projects</li>
                  </ul>
                  <p>The government expects that costs are charged appropriately at the time incurred and that significant adjustments should not be required if adequate financial management practices and policies exist.</p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='"Indirect Costs" (F&A) Support the CSU Infrastructure'/>
               <Divider/>
               <CardText>
                  <p>Direct costs are those that can be specifically identified with the project, such as salaries, supplies, equipment, travel and stipends.</p>
                  <p>Indirect cost items are associated with general infrastructure support, such as electricity, heating, and administrative support of the research infrastructure. Indirect costs are real costs to the University associated with carrying out extramurally funded research.</p>
                  <p>Reallocating expenses after a grant award can impact the amounts of direct costs the investigator has available for purchases.</p>
                  <table className='table table-hover table-bordered'>
                     <thead>
                        <tr>
                           <th>Cost</th>
                           <th>Types/Purpose</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td><strong>Direct Costs</strong> - Those costs that can be identified specifically with a particular sponsored project or that can be directly assigned to an activity relatively easily with a high degree of accuracy.</td>
                           <td>
                              <ul>
                                 <li><strong>Personnel</strong>: Salaries, wages, fringe benefits</li>
                                 <li><strong>Materials & Supplies</strong>: Goods needed to conduct the project</li>
                                 <li><strong>Purchased Services</strong>: Services needed to conduct the project</li>
                                 <li><strong>Equipment</strong>: Capital equipment purchases</li>
                                 <li><strong>Subcontracts</strong>: Work performed by other institutions</li>
                              </ul>
                           </td>
                        </tr>
                        <tr>
                           <td><strong>Indirect Costs</strong> - Costs that are incurred for common or joint objectives and therefore cannot be identified readily and specifically with a particular sponsored project or other activity.</td>
                           <td>
                              <ul>
                                 <li><strong>Operations and maintenance</strong>: utilities, repairs, custodial , and general facilities management costs</li>
                                 <li><strong>University wide administrative activities</strong>: expenses of HR, payroll, accounting, executive management</li>
                                 <li><strong>Sponsored projects administration</strong>: grant and contract office expenses</li>
                                 <li><strong>Department activities</strong>: staff salaries, supplies, other general expenses</li>
                                 <li><strong>Library operations</strong>: administration, purchase of books</li>
                              </ul>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <p>Refer to sections <a href='http://www.whitehouse.gov/sites/default/files/omb/assets/omb/fedreg/2005/083105_a21.pdf'>D.1 and F.6.b of OMB Circular A-21</a> for federal guidance on direct and indirect costs, and <a href='https://vpr.research.colostate.edu/OSP/manuals/pi-manual/'>Section VII of the Sponsored Programs Principal Investigator Manual</a> for CSU policy.</p>
               </CardText>
            </Card>
            <Card className='section-container'>
               <CardTitle title='Question'/>
               <Divider/>
               <CardText>
                  <h4>Researchers need to understand federal cost accounting standards because:</h4>
                  <RadioButtonGroup name='0'>
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer0,'a')}
                        value='a'
                        label='A) >30% of the dollars spent at CSU comes from federal, state and private grants and contracts with specific conditions regarding how monies may be spent.' />
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer0,'b')}
                        value='b'
                        label='B) Cost accounting errors can be extrapolated to the population within the university as a whole, so a $5000 error on billing a laptop computer to a grant could end up costing the university hundreds of thousands of dollars.' />
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer0,'c')}
                        value='c'
                        label='C) The indirect costs associated with the direct cost of a grant are an important contribution supporting the CSU infrastructure.' />
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer0,'d')}
                        value='d'
                        label='D) The public has the right to know that taxpayer dollars are spent wisely, and in a fair and transparent manner.' />
                     <RadioButton
                        checkedIcon={getAnswer(this.state.answer0,'e')}
                        value='e'
                        label='E) All of the above.' />
                  </RadioButtonGroup>
               </CardText>
            </Card>
         </SectionContainer>
      );
   }
}
