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
          <CardTitle title='Why Should You Care about Lab Safety?' />
          <Divider/>
          <CardText>
            <div className='row'>
              <div className='col-md-6'>
                <h4>Dartmouth College, 1996</h4>
                <Divider/>
                <p>Professor Karen Wetterhahn, founding director of the University’s Toxic Metals Research Program, spilled a drop of dimethylmercury on her gloved hand. She died 10 months later. Her mercury levels were 80 times the toxic threshold.</p>
                <p><strong>She was following the standard safety protocol at the time which included:</strong></p>
                <ul>
                  <li>Conducting the chemical transfer in a fume hood</li>
                  <li>Wearing eye protection</li>
                  <li>Wearing disposable latex gloves</li>
                  <li>Following the directions on the MSDS sheet</li>
                </ul>
                <p><strong>What went wrong?</strong></p>
                <ul>
                  <li>There was no industry level permeation testing on dimethylmercury to determine the type of glove would provide adequate protection</li>
                </ul>
              </div>
              <div className='col-md-6'>
                <h4>UCLA, 2008</h4>
                <Divider/>
                <p>Sheri Sangi, a research assistant, was transferring a tert-butyllithium solution in hexanes when the plunger of the syringe she was using separated from the barrel, spraying her hands with the pyrophoric compound. The chemicals ignited and lit her sweater on fire. Her coworkers doused the flames and she was rushed to the hospital. She died from her injuries weeks later.</p>
                <p><strong>What went wrong?</strong></p>
                <ul>
                  <li>She never received adequate training for working with hazardous chemicals</li>
                  <li>She did not follow proper safety procedures for handling pyrophoric reagents</li>
                  <li>She did not wear a lab coat</li>
                </ul>
                <p><strong>What were the consequences?</strong></p>
                <ul>
                  <li>
                    Felony criminal charges were filed against both the University of California Regents and Professor Harran for willfully violating occupational health and safety standards.
                    <ul>
                      <li>In 2012 UCLA enacted stringent policies and SOP’s regarding hazardous chemicals and began inspecting labs more frequently. Lab safety training classes became mandatory and fire-resistant lab coats were made available to workers.</li>
                      <li>On June 20th, 2014 Professor Harran reached a deferred prosecution agreement with the condition that the 4 criminal counts will be dropped in 5 years if he pays $10K in fines, fulfills 800 hours of community service at UCLA’s hospital, and conducts a summer chemistry course for inner-city high school graduates.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <h4>And Other Incidents...</h4>
            <Divider/>
            <div className='row'>
              <div className='col-md-4'>
                <h4>Centers for Disease Control, 2014, Atlanta, GA</h4>
                <Divider/>
                <ul>
                  <li>It was feared that 75 people were exposed to live anthrax after improper shipment of live bacteria.  Employees not wearing protective gear worked with bacteria that were supposed to have been killed but may not have been.  All were offered a vaccine and antibiotics.</li>
                  <li>A culture of non-pathogenic bird flu was cross-contaminated with the highly virulent H5N1 strain at its influenza laboratory in early 2014 before being shipped to a facility operated by the Department of Agriculture.</li>
                </ul>
              </div>
              <div className='col-md-4'>
                <h4>Texas Tech University, 2010, Lubbock, TX</h4>
                <Divider/>
                <p>A graduate student removed protective eye wear before crushing nickel hydrazine perchlorate with a mortal and pestle on the bench top.  The substance detonated, and the student suffered serious injuries to his face, an eye, and lost 3 fingers.</p>
              </div>
              <div className='col-md-4'>
                <h4>National Institute of Standards and Technology (NIST), 2008, Boulder, CO.</h4>
                <Divider/>
                <p>Researcher broke a bottle of plutonium sulfate.  Upon washing his hands to remove the spill he introduced plutonium into the Boulder sewer system and subsequently to the hallway surrounding the lab.</p>
              </div>
            </div>
            <h4>Recently at CSU...</h4>
            <Divider/>
            <ul>
              <li>A chemistry graduate student was transferring waste when a chemical in the container reacted and caused a gas expansion, resulting in an explosion, causing the student serious injuries.</li>
              <li>An employee was performing a dissection in a biosafety cabinet on an animal infected with a BSL3 infectious agent.  During the procedure, the lymph node exploded unexpectedly, resulting in a biological spill and potentially exposing the worker and others to the agent.  This incident was not reported for several weeks as the worker did not think it was a reportable event, was very busy, and forgot about it.</li>
              <li>A student suffered a serious eye injury (hole in cornea) from a laser while improperly adjusting optics without the appropriate eye protection</li>
              <li>An employee suffered a puncture wound from a needle contaminated with human tumor cells.  Employee underwent a biopsy to monitor for cancer cell invasion.</li>
            </ul>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='What Goes Wrong?' />
          <Divider/>
          <CardText>
            <ul>
              <li>Failure to follow an established standard operating procedure (SOP)</li>
              <li>Lack of appropriate personal protective equipment (PPE)</li>
              <li>Lack of training or general knowledge</li>
              <li>Inadequate oversight</li>
              <li>Honest accident</li>
              <li>Uncertainty at the cutting edge</li>
            </ul>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Think Before You Act' />
          <Divider/>
          <CardText>
            <div>
              <ul>
                <li>Do you know what you are doing?</li>
                <li>Do you understand the risks?</li>
                <li>Do you have the training that you need?</li>
                <li>Do you have the equipment that you need?</li>
                <li>Are you exploring unknown territory?</li>
              </ul>
              <h4>If you have any questions or concerns contact:</h4>
              <p><a href='http://www.ehs.colostate.edu/'>CSU’s Environmental Health Services</a></p>
              <p>Remember, no question is a dumb question. It just may save your life.
                <br/>
                <em>We are here to help you, not get you in trouble!</em>
              </p>
              <p><strong>Let’s create a culture of safety, not of compliance</strong></p>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Laboratory Safety' />
          <Divider/>
          <CardText>
            <h4>At CSU, oversight of laboratory safety is categorized into:</h4>
            <div className='row'>
              <div className='col-md-6'>
                <h4>Biologic Safety</h4>
                <Divider/>
                <ul>
                  <li>Infectious agents</li>
                  <li>Recombinant DNA (rDNA)</li>
                  <li>Select agents and toxins</li>
                  <li>Human tissues and fluids</li>
                </ul>
              </div>
              <div className='col-md-6'>
                <h4>Environmental safety</h4>
                <Divider/>
                <ul>
                  <li>Hazardous waste</li>
                  <li>Radiation and laser safety</li>
                  <li>Ergonomics</li>
                  <li>Water quality</li>
                </ul>
              </div>
            </div>
            <p>The <a href='http://www.ehs.colostate.edu/'>Occupational Health and Safety Program (OHSP)</a> bridges these two categories of lab risks. All persons working in CSU labs must have their occupational risks assessed by the OHSP Coordinator.</p>
            <p><a href=''>View more information on who to contact at CSU if you have questions or concerns about Laboratory Safety.</a></p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='The Institutional Biosafety Committee (IBC)' />
          <Divider/>
          <CardText>
            <ul>
              <li>Federal oversight by the NIH "Office of Biotechnology Activities" (OBA) can include site inspections, sanctions and recommendations</li>
              <li>Regulatory instructions provided in the NIH "Guidelines", and are outlined in CSU <a href='https://vprnet.research.colostate.edu/RICRO/ibc/ibc-training-and-tutorials/'>online IBC training for PIs</a></li>
              <li>Before initiating work, <a href='https://vprnet.research.colostate.edu/RICRO/ibc/ibc-forms'>approval by the IBC</a> is necessary</li>
              <li>The approval process begins with the online <a href='https://vprnet.research.colostate.edu/RICRO/ibc/'>IBC website</a></li>
              <li>Faculty scientific and bioethical peer review of biologics
                <ul>
                  <li><a href='https://vprnet.research.colostate.edu/RICRO/ibc/ibc-forms/'>AARF: Agent Approval Review Form</a></li>
                  <li><a href='https://vprnet.research.colostate.edu/RICRO/ibc/ibc-forms/'>PARF: Project Approval Review Form</a></li>
                </ul>
              </li>
              <li>During work, oversight and inspections are provided by "<a href='https://vprnet.research.colostate.edu/bso/'>Biosafety Officers</a>" (BSOs) that provide training and site inspections</li>
            </ul>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Environmental Health and Safety' />
          <Divider/>
          <CardText>
            <ul>
              <li>All personnel generating hazardous waste work in labs must take the online <a href='http://www.ehs.colostate.edu/WHazWaste/Home.aspx'>Hazardous Waste</a> training. Disposal of hazardous waste into the landfill or water supply is not allowed.</li>
              <li>All personnel who work in labs that use ionizing radiation must take <a href='http://www.ehs.colostate.edu/WRad/Home.aspx'>Radiation Control Office</a> (RCO) training appropriate to their level of exposure.</li>
              <li>All personnel who work with lasers should take the <a href='http://www.ehs.colostate.edu/WLaserSafety/Home.aspx'>Online Laser Safety Training</a></li>
              <li>EHS provides many other resources to researchers regarding physical parameters of labs and offices, such as laboratory safety, air/water quality, fume hood safety, chemical safety and work-place ergonomics.</li>
            </ul>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Contacts for Questions or Concerns' />
          <Divider/>
          <CardText>
            <h4>Animal Welfare</h4>
            <Divider/>
            <div className='row flex'>
              <div className='col-md-4 flex'>
                <div className='contact-block'>
                  <p className='name'>Mark Zabel</p>
                  <p className='title'>Chair of the IACUC</p>
                </div>
              </div>
              <div className='col-md-4 flex'>
                <div className='contact-block'>
                  <p className='name'>Lon Kendall</p>
                  <p className='title'>Attending Veterinarian and Director of Laboratory Animal Resources (LAR)</p>
                </div>
              </div>
              <div className='col-md-4 flex'>
                <div className='contact-block'>
                  <p className='name'>Bernard Rollin</p>
                  <p className='title'>University Bioethicist</p>
                </div>
              </div>
            </div>
            <div className='row flex'>
              <div className='col-md-6 flex'>
                <div className='contact-block'>
                  <p className='name'>Elaine Kim</p>
                  <p className='title'>RICRO Senior IACUC Coordinators</p>
                </div>
              </div>
              <div className='col-md-6 flex'>
                <div className='contact-block'>
                  <p className='name'>Laura Hinds</p>
                  <p className='title'>RICRO Senior IACUC Coordinators</p>
                </div>
              </div>
            </div>
            <h4>Human Subjects Research</h4>
            <Divider/>
            <div className='row flex'>
              <div className='col-md-6 flex'>
                <div className='contact-block'>
                  <p className='name'>Matt Hickey</p>
                  <p className='title'>Biomedical IRB Chair</p>
                </div>
              </div>
              <div className='col-md-6 flex'>
                <div className='contact-block'>
                  <p className='name'>Gene Gloeckner</p>
                  <p className='title'>Social, Behavioral, and Educational Research (SBER) Chair</p>
                </div>
              </div>
            </div>
            <div className='row flex'>
              <div className='col-md-6 flex'>
                <div className='contact-block'>
                  <p className='name'>Evelyn Swiss</p>
                  <p className='title'>RICRO IRB Coordinator</p>
                </div>
              </div>
              <div className='col-md-6 flex'>
                <div className='contact-block'>
                  <p className='name'>Tammy Felton-Noyle</p>
                  <p className='title'>RICRO IRB Coordinator</p>
                </div>
              </div>
            </div>
            <h4>Laboratory Safety</h4>
            <Divider/>
            <div className='row flex'>
              <div className='col-md-6 flex'>
                <div className='contact-block'>
                  <p className='name'>James C. Graham</p>
                  <p className='title'>Director, Environmental Health Services (EHS)</p>
                </div>
              </div>
              <div className='col-md-6 flex'>
                <div className='contact-block'>
                  <p className='name'>Bob Ellis</p>
                  <p className='title'>Biosafety Officer and "Responsible Official" for biologics and select agent matters</p>
                </div>
              </div>
            </div>
            <div className='row flex'>
              <div className='col-md-6 flex'>
                <div className='contact-block'>
                  <p className='name'>Chaoping Chen</p>
                  <p className='title'>Chair of the IBC</p>
                </div>
              </div>
              <div className='col-md-6 flex'>
                <div className='contact-block'>
                  <p className='name'>Christine Johnson</p>
                  <p className='title'>RICRO Coordinator</p>
                </div>
              </div>
            </div>
            <div>
              <p>Each building has a "Building Proctor" who is the point of contact for Facilities Management, the CSU Police Department and Environmental Health Services.</p>
              <p><strong>In case of an emergency, dial 911.</strong></p>
            </div>
          </CardText>
        </Card>
      </SectionContainer>
    );
  }
}
