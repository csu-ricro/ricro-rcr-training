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
          <CardTitle title='Then vs. Now' />
          <Divider/>
          <CardText>
            <p>There are several examples of animal research abuse prior to federal regulation being implemented. Some of the most famous examples include:</p>
            <p><strong><a href='http://en.wikipedia.org/wiki/Silver_Spring_monkeys'>Silver Spring Monkeys</a></strong>: This experiment demonstrated a fundamentally important scientific principle regarding the ability of adult brains to rewire (neuroplasticity), but the cruelty of the experiments themselves outraged most citizens.</p>
            <p>Stan Wayman’s photo essay on "<strong><a href='http://www.vintag.es/2014/11/concentration-camps-for-dogs-1966.html'>Concentration Camp for Lost and Stolen Dogs</a></strong>". Images of starving and neglected dogs of the "animal dealer", Lester Brown, propelled Congressional action to approve the Animal Welfare Act, which continues to provide protection of animals used in research and teaching.</p>
            <blockquote>
              <p>The most critical factor leading to social disenchantment with science has been the singular failure of the scientific community to engage the myriad ethical issues emerging from scientific activity. This is particularly problematic in an age that is suffused with ethical concern, a situation that paradigmatically characterizes the United States during the last half-century.</p>
              <footer>B.E. Rollin, <cite>Science and Ethics</cite> (2006)</footer>
            </blockquote>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='CSU’s IACUC' />
          <Divider/>
          <CardText>
            <p>The conduct of ethical research is a long-standing tradition at Colorado State University (CSU). Part of this tradition is a continuing dedication to the humane and ethical care of animals used in research and teaching. This dedication, as well as federal regulations pertaining to the use of animals in research and teaching, requires Colorado State University to maintain a supervisory committee for the use of animals in research. This committee is known as the <a href='https://vpr.research.colostate.edu/RICRO/iacuc/about-the-iacuc'>Institutional Animal Care and Use Committee</a> or <a href='https://vpr.research.colostate.edu/RICRO/iacuc/'>IACUC</a>. The IACUC reviews and regulates the use of animals for both research and teaching.</p>
            <blockquote>
              <p>A moment’s reflection on the development of large-scaled animal research and high-technology agriculture will elucidate why these innovations have led to the advent of a demand for a new ethic for animals in society. In a nutshell, these innovations represent a radically different playing field for animal use from what has characterized most of human history, and one wherein the traditional ethic grows increasingly relevant. … People realize that biomedical and other scientific research, toxicological safety testing, uses of animals in teaching, pharmaceutical product extraction from animals, and so on, all produce far more suffering than does overt cruelty.</p>
              <footer>B.E. Rollin. <cite>An Introduction to Veterinary Medical Ethics</cite>, p.36 (1999) </footer>
            </blockquote>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Applicable Laws & Regulations ' />
          <Divider/>
          <CardText>
            <p>Federal statutes have granted Animal & Plant Health Inspection Service (APHIS), and Office of laboratory Animal Welfare (OLAW) responsibility for specific areas of animal welfare.</p>
            <h4>Animal Welfare Act</h4>
            <Divider/>
            <p>The Animal Welfare Act (AWA) was enacted by Congress in 1966 and amended in 1970, 1976, 1985, 1990, 2002 and 2007. It is the principal Federal statute governing the sale, handling, transport and use of animals.</p>
            <table className='table'>
              <tbody>
                <tr>
                  <th>Governing Agency</th>
                  <td>
                    <strong>USDA > APHIS</strong>
                    <br/>
                    Animal & Plant Health Inspection Service (APHIS)
                  </td>
                </tr>
                <tr>
                  <th>Impact</th>
                  <td>
                    <ul>
                      <li>Requires establishment of Institutional Animal Care and Use Committee (IACUC)</li>
                      <li>Licenses institutions to breed, sell, transport, or use animals</li>
                      <li>Actively inspects licensees; authorized to impose sanctions</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Scope</th>
                  <td>
                    <ul>
                      <li>Applies to all species of warm blooded vertebrate animals used for research, testing, or teaching, except farm animals used for agricultural research but not biomedical research. (Excludes Mice, Rats, Birds, and agricultural animals).</li>
                      <li>Sets standards for appropriate housing, care, & handling by species.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Codification</th>
                  <td>
                    <ul>
                      <li>CFR Title 9, Chapter 1, Subchapter A, Parts 1, 2 and 3</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Implementation</th>
                  <td>
                    <ul>
                      <li>Key Agency: USDA Animal and Plant Health Inspection Service (APHIS).</li>
                      <li>Research facilities that use regulated animals must register with APHIS.</li>
                      <li>Each research facility or institution establishes an Institutional Animal Care and Use Committee (IACUC) to oversee the humane care and use of regulated animals</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <h4>Health Research Extension Act</h4>
            <Divider/>
            <p>The Health Research Extension Act of 1985, or "HREA" (Public Law 99-158) provides the legislative mandate for the policy established by the Public Health Service (PHS).</p>
            <table className='table'>
              <tbody>
                <tr>
                  <th>Governing Agency</th>
                  <td>
                    <strong>HHS > NIH > OER > OLAW</strong>
                    <br/>
                    Office of Laboratory Animal Welfare (OLAW)
                  </td>
                </tr>
                <tr>
                  <th>Impact</th>
                  <td>
                    <ul>
                      <li>Delegated responsibility for lab animal care policy to DHHS, and thereby to NIH</li>
                      <li>Issues institutional assurances</li>
                      <li>Monitors for compliance</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Scope</th>
                  <td>
                    <ul>
                      <li>The PHS Policy implements the Health Research Extension Act of 1985 and applies to the use of live, vertebrate animals in any activity supported or conducted by the PHS.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Codification</th>
                  <td>
                    <ul>
                      <li>45 CFR &sect; 74.14 and 42 CFR &sect; 52.9</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Implementation</th>
                  <td>
                    <ul>
                      <li>HREA directs HHS to establish guidelines for the proper care and treatment of animals used in research, and for the organization and operation of IACUCs.</li>
                      <li>HREA mandates that the PHS guidelines address appropriate use of tranquilizers, analgesics, anesthetics, paralytics, and euthanasia, and appropriate pre-surgical and post-surgical veterinary medical and nursing care for animals.</li>
                      <li>HREA stipulates: reporting minority views of IACUC members, Animal Welfare Assurances, and instruction or training in methods that <strong>limit the use of animals or limit animal distress</strong>, consistent with the Animal Welfare Act.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>The NIH addresses the entire institutional program of animal care and use, and requires that every institution with animal research has an IACUC. All programs must include the following components:</p>
            <div className='row'>
              <div className='col-md-4'>
                <h4>IACUC Board and Institutional Leadership</h4>
                <Divider/>
                <ul>
                  <li>Designation of an Institutional Official</li>
                  <li>Appointment of an Institutional Animal Care and Use Committee (IACUC)</li>
                  <li>Administrative support for the IACUC</li>
                  <li>Standard IACUC procedures</li>
                </ul>
              </div>
              <div className='col-md-4'>
                <h4>Animal Care</h4>
                <Divider/>
                <ul>
                  <li>Arrangements for a veterinarian with authority and responsibility for animals</li>
                  <li>Adequate veterinary care</li>
                  <li>Maintenance of animal facilities</li>
                </ul>
              </div>
              <div className='col-md-4'>
                <h4>Training</h4>
                <Divider/>
                <ul>
                  <li>Formal or on-the-job training for personnel that care for or use animals</li>
                  <li>Occupational health and safety program for those who have animal contact</li>
                </ul>
              </div>
            </div>
            <h4>Federal Food Drug and Cosmetic Act</h4>
            <Divider/>
            <p>The Federal Food, Drug and Cosmetic Act (<a href='http://www.fda.gov/regulatoryinformation/legislation/federalfooddrugandcosmeticactfdcact/default.htm'>FFD&CA</a>) was enacted by Congress in 1938 and amended in 1951, 1962,1984,1994,1997 and 2007). It is the principal Federal statute overseeing the safety of food, drugs, and cosmetics. </p>
            <table className='table'>
              <tbody>
                <tr>
                  <th>Governing Agency</th>
                  <td>
                    <strong>HHS > FDA</strong>
                    <br/>
                    Food & Drug Administration (FDA)
                  </td>
                </tr>
                <tr>
                  <th>Impact</th>
                  <td>
                    <ul>
                      <li>Amendment established Good Lab Practice Regulations (GLPRs) (1974)</li>
                      <li>GLPRs govern non-clinical laboratory studies</li>
                      <li>FDA monitors via active reviews by field inspectors, & can impose sanctions<sup>1</sup></li>
                    </ul>
                    <p className='disclaimer'><sup>1</sup> Memorandum of understanding among The Animal and Plant Health Inspection Service (APHIS), USDA and the Food and Drug Administration U.S. DHHS and the National Institutes of Health (HHS)
                      <a href='http://grants.nih.gov/grants/olaw/references/finalmou.htm'>http://grants.nih.gov/grants/olaw/references/finalmou.htm</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>Scope</th>
                  <td>
                    <ul>
                      <li>The <a href='http://www.fda.gov/default.htm'>Food and Drug Administration (FDA)</a> is an agency of the US DHHS responsible for protecting and promoting public health through the regulation and supervision of food safety, tobacco products, dietary supplements, prescription and over-the-counter pharmaceutical drugs (medications), vaccines, biopharmaceuticals, blood transfusions, medical devices, electromagnetic radiation emitting devices, veterinary products, and cosmetics.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Codification</th>
                  <td>
                    <ul>
                      <li><a href='http://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/cfrsearch.cfm'>CFR Title 21</a></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Implementation</th>
                  <td>
                    <p>The FDA is comprised of <a href='http://www.fda.gov/AboutFDA/CentersOffices/default.htm'>Offices and Centers</a>, including those most relevant to CSU:</p>
                    <ul>
                      <li><a href='http://www.fda.gov/AboutFDA/CentersOffices/OrganizationCharts/ucm347874.htm'>Center for Biologics Evaluation and Research</a></li>
                      <li><a href='http://www.fda.gov/AboutFDA/CentersOffices/OrganizationCharts/ucm347835.htm'>Center for Devices and Radiological Health</a></li>
                      <li><a href='http://www.fda.gov/AboutFDA/CentersOffices/OrganizationCharts/ucm347877.htm'>Center for Drug Evaluation and Research</a></li>
                      <li><a href='http://www.fda.gov/AboutFDA/CentersOffices/OrganizationCharts/ucm385057.htm'>Center for Food Safety and Applied Nutrition</a></li>
                      <li><a href='http://www.fda.gov/AboutFDA/CentersOffices/OrganizationCharts/ucm352058.htm'>Center for Veterinary Medicine</a></li>
                      <li><a href='http://www.fda.gov/AboutFDA/CentersOffices/OrganizationCharts/ucm352058.htm'>National Center for Toxicological Research</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Institutional Animal Care and Use Committees' />
          <Divider/>
          <CardText>
            <table className='table table-hover'>
              <tbody>
                <tr>
                  <th>Composition</th>
                  <td>
                    <p>Federal agencies require IACUCs, which must include a minimum of five members, and must include individuals meeting the criteria below. This helps to provide a diversity of perspectives, and avoid conflict of interest.</p>
                    <ul>
                      <li><strong>Veterinarian</strong> with program responsibilities</li>
                      <li><strong>Scientist</strong> experienced in laboratory animal procedures</li>
                      <li><strong>Non-scientist</strong></li>
                      <li><strong>Non-affiliate</strong>, someone with no affiliation with the institution other than sitting on the IACUC committee.</li>
                    </ul>
                    <p>At CSU, we also have representatives from each college that uses animals, as well as a University Bioethicist.</p>
                  </td>
                </tr>
                <tr>
                  <th>Responsibilities</th>
                  <td>
                    <ul>
                      <li><strong>Review and approve</strong>, require modifications to, or withhold approval to animal care and use protocols.</li>
                      <li><strong>Review and investigate</strong> legitimate concerns involving the care and use of laboratory animals resulting from public, employee or student complaints. </li>
                      <li><strong>Suspend</strong> an activity involving animals if non-compliance is verified; take corrective action and report non-compliance to funding agencies. </li>
                      <li><strong>Inspect</strong> all of the animal facilities, including animal study areas and satellite facilities at least once every six months.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='When do you need to engage the IACUC about your activities?' />
          <Divider/>
          <CardText>
            <ul>
              <li>Before you do research or testing with animals</li>
              <li>Before you use animals to teach or demonstrate anything</li>
              <li>Before you conduct exhibits with animals</li>
              <li>When you have concerns about the welfare of animals used in any of the above</li>
            </ul>
            <p>You will need IACUC approval of a "<strong>protocol</strong>." In addition:</p>
            <ul>
              <li>Graduate students may not be the PI on a protocol</li>
              <li>All personnel must demonstrate their training qualifications prior to being named on a protocol</li>
            </ul>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Animal Protocols' />
          <Divider/>
          <CardText>
            <ul>
              <li>Must be submitted online at <a href='https://csu.keyusa.net/'>https://csu.keyusa.net/</a></li>
              <li>Are reviewed once a month by the IACUC; protocols that involve procedures causing no more than momentary pain or distress are reviewed on an ongoing basis</li>
              <li>Annual continuing review is required</li>
              <li>Are peer reviewed to reduce, refine, and replace animal use and make judgments on key concepts such as "pain" and "distress" that the animal will obtain</li>
              <li>Address issues that, when they go wrong, could be viewed by others as having contributed to "animal abuse"</li>
            </ul>
            <h4>The Three Rs</h4>
            <Divider/>
            <p>In 1959, two British scientists, William Russell and Rex Burch, described three important concepts (now known widely as the "Three R's") with the goal of minimizing animal use and pain or distress while achieving scientific objectives.</p>
            <div className='row'>
              <div className='col-md-4'>
                <h4>Replacement</h4>
                <Divider/>
                <p>Replacement of animals by other systems</p>
                <p><em>Methods</em>: Computer modeling or in vitro testing may be a substitute for animal models. "Lower" or non-vertebrate animals, such as the fruit fly may be used in some situations rather than a higher order animal.</p>
              </div>
              <div className='col-md-4'>
                <h4>Reduction</h4>
                <Divider/>
                <p>Reduction of the number of animals used for research</p>
                <p><em>Methods</em>: Statistical analysis can maximize statistical power while minimizing the number of animals used. Pilot studies may help determine optimal group size. In some cases, use of more animals may humanely reduce the number of procedures on each animal.</p>
              </div>
              <div className='col-md-4'>
                <h4>Refinement</h4>
                <Divider/>
                <p>Refinement of study design to decrease the amount of pain and distress experienced by animals</p>
                <p><em>Methods</em>: Anesthetics and analgesics are used to relieve pain wherever possible. The use of early endpoints – or euthanizing animals at early indicators of disease, before they experience further suffering - can also be a form of refinement.</p>
              </div>
            </div>
            <h4>Pain and Distress</h4>
            <Divider/>
            <p>The USDA requires an annual report on the number of animals (by species) in which:</p>
            <ul>
              <li>Procedures caused no pain or distress;</li>
              <li>Pain or distress during procedures was appropriately relieved using pain- or distress-relieving drugs;</li>
              <li>Procedures caused pain or distress that was not relieved for scientific reasons.</li>
            </ul>
            <p>Thus, the IACUC generally asks an investigator to categorize the animals they request in their protocol by using the same USDA system.</p>
            <blockquote>
              <p>Common sense would dictate that one of the worst things one can do to a research animal is to cause unrelieved pain. As animals do not understand sources of pain—particularly the sort of pain inflicted in experiments—they cannot rationalize that it will end soon, and their whole life becomes the pain. This insight has led veterinary pain specialists … to surmise that animal pain might be even worse than human pain; after all, humans have hope. Furthermore, pain is a source of stress, and can skew the results of experiments in numerous ways. Therefore, for both moral and scientific reasons, one would expect a crucial emphasis on pain control in painful experiments.</p>
              <footer>B.E. Rollin, <cite>Animal research: a moral science</cite>. EMBO Reports 8:521-525 (2007)</footer>
            </blockquote>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Case Study: Animal Safety' />
          <Divider/>
          <CardText>
            <p>Your colleague, Dr. Jay Mahata, is an NIH supported investigator who has an established collaboration with a field biologist, Dr. Ellen Yu, in another state. Dr. Yu does not receive any grant support for her research. Dr. Mahata sometimes receives blood and other tissue samples for analysis from the wild rodents that Dr. Yu traps for her research; her only reason for collecting the blood is to provide it to Dr. Mahata. Dr. Mahata has asked you to read his latest IACUC protocol prior to its formal submission. You note that the collaboration is not mentioned in the protocol. When you ask Dr. Mahata about this he says that he "does not have to report this activity to the IACUC because there are not any animal welfare concerns involved". He points out to you that he does not sacrifice the rodents or collect the blood and tissues. He maintains that the relevant animal welfare concerns are between Dr. Yu and her institution. Lastly, he suggests that because the NIH does not support her work, it does not have to conform to the same guidelines to which his own work is subject.</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Question' />
          <Divider/>
          <CardText>
            <h4>Choose the best response:</h4>
            <RadioButtonGroup name='0'>
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'a')}
                value='a'
                label='A) The CSU IACUC does not regulate a CSU faculty member’s research if it is performed out of state.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'b')}
                value='b'
                label='B) The CSU IACUC does not regulate animal research unless it is funded by the NIH.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'c')}
                value='c'
                label='C) CSU requires IACUC oversight of animal research being done in conjunction with any CSU faculty member, no matter where the research is being performed.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'d')}
                value='d'
                label='D) Wild rodents are not laboratory animals and therefore are never regulated by the IACUC.' />
            </RadioButtonGroup>
          </CardText>
        </Card>
      </SectionContainer>
    );
  }
}
