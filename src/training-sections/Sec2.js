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
        <Card className="section-container">
          <CardTitle title="So what exactly is data?" />
          <Divider/>
          <CardText>
            <p>The term data is very broad in nature, but, we want to focus on its meaning in terms of the sponsored research process. With this in mind, it is defined as the collection of measurements, facts or observations. There are two types of data:</p>
            <div className="row">
              <div className="col-md-6">
                <h4>Quantitative</h4>
                <Divider/>
                <p>Quantitative data are data that are in numerical form.</p>
              </div>
              <div className="col-md-6">
                <h4>Qualitative</h4>
                <Divider/>
                <p>Qualitative data includes words, pictures, sound recordings, and video. Things that may not seem to be data, can be data.</p>
              </div>
            </div>
            <h4>Examples of data in sponsored research projects include:</h4>
            <Divider/>
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>DNA sequences</li>
                  <li>Chemical compositions</li>
                  <li>Animal or human subject observations</li>
                  <li>Physical specimens</li>
                  <li>Tissue samples</li>
                  <li>Musical scores</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Charts and graphs</li>
                  <li>Pictures</li>
                  <li>Surveys</li>
                  <li>Questionnaires</li>
                  <li>Video footage</li>
                  <li>Computations</li>
                </ul>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className="section-container">
          <CardTitle title="Data Selection" />
          <Divider/>
          <CardText>
            <p>A common challenge amongst all disciplines is selection of data sets. When and how to include and remove data points within a data set can be challenging, and the process of selecting suitable data for a research project can impact data integrity.</p>
            <h4>Considerations in Data Selection</h4>
            <Divider/>
            <p>There are a number of practices that researchers can follow in order to help with selecting data including:</p>
            <ul>
              <li>seek statistical training and advice before selecting a data set;</li>
              <li>follow suitable procedures in order to obtain a representative sample;</li>
              <li>use the proper instruments to collect data; and</li>
              <li>develop a detailed research plan, and be sure to carry it out as planned.</li>
            </ul>
          </CardText>
        </Card>
        <Card className="section-container">
          <CardTitle title="Data Storage" />
          <Divider/>
          <CardText>
            <p>Traditionally, data are recorded in:</p>
            <ul className="text-left">
              <li>Lab notebooks, journals</li>
              <li>Computers</li>
              <li>Related media (e.g. external hard drives, flash drives, etc.)</li>
            </ul>
            <p>However, these media can be lost, suffer bit-rot and subsequent data loss/corruption, and format obsolescence...</p>
          </CardText>
        </Card>
        <Card className="section-container">
          <CardTitle title="Applicable Laws and Regulations" />
          <Divider/>
          <CardText>
            <div className="row">
              <div className="col-md-4">
                <h4>Freedom of Information Act <small>1966</small></h4>
                <Divider/>
                <p>The Freedom of Information Act (FOIA). Gives individuals and organizations the right to request and receive records and data from the government. Exemptions to this law may include personnel and medical files that would invade personal privacy and national security.</p>
              </div>
              <div className="col-md-4">
                <h4>Colorado Open Records Act <small>1969</small></h4>
                <Divider/>
                <p>The Colorado Open Records Act (CORA). All public records shall be open for inspection by any person at reasonable times, except as otherwise provided by law. Public records are defined by this law as writings made or maintained by a state institution, such as CSU, regardless of the format or medium of the records, and expressly includes e-mail communications. There are some exceptions to CORA, but these must be determined by legal counsel. </p>
              </div>
              <div className="col-md-4">
                <h4>Bayh-Dole Act <small>1980</small></h4>
                <Divider/>
                <p>The Bayh-Dole Act Enables universities and small businesses to license new technology to the private sector from federally-funded research projects. Any discoveries or inventions will be retained by the host university for licensing to the private sector. The federal government generally no longer retains the rights to those discoveries or inventions.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h4>Electronic Freedom of Information Act <small>1996</small></h4>
                <Divider/>
                <p>The Electronic Freedom of Information Act. A federal law that allows individuals to access electronically created documents and information, such as electronic databases, electronic documents, word-processing documents, and e-mail.</p>
              </div>
              <div className="col-md-6">
                <h4>The Patriot Act <small>2001</small></h4>
                <Divider/>
                <p>The Patriot Act made it easier for the federal government to collect information and intelligence to obstruct international and domestic terrorism. The act directly affected sponsored research because many scientific experiments require the use of toxins, biological agents and compounds that are now on a list created by the Office of Homeland Security that must be monitored by institutions that purchase them for their use in research.</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className="section-container">
          <CardTitle title="Data Ownership and Data Sharing" />
          <Divider/>
          <CardText>
            <p>Many institutions have developed their own self-monitoring and auditing policies to show compliance with the Patriot Act.</p>
            <div className="row">
              <div className="col-md-6">
                <h4>Data Ownership</h4>
                <Divider/>
                <p>All data collected and stored in notebooks, journals, or computers and their related media are the property of CSU and/or the sponsor. Ownership of data is explained in the sponsor agreement or award notice. The copyright of data reverts back CSU when it is funded with federal funds. Retention of data may be required for three to five years or more depending on institution and sponsor requirements.</p>
              </div>
              <div className="col-md-6">
                <h4>Data Sharing</h4>
                <Divider/>
                <p>The <strong>National Institutes of Health (NIH)</strong> developed a data sharing policy that went into effect in 2003, for applicants seeking NIH funding of $500,000 or more in direct costs in any one year. This policy helps ensure that final research data will be made available to other investigators. This collaborative approach will further all types of research, and lead to more findings and increased knowledge to improve human health in the future.</p>
                <p>The <strong>National Science Foundation (NSF)</strong> developed a data management & sharing policy that went into effect in 2010. Investigators are expected to share primary data, samples, physical collections and other materials gathered in the course of work under NSF grants. Proposals submitted after January, 2011 must include a supplementary document labeled "Data Management Plan."</p>
                <p>The <strong>Office of Science & Technology Policy (OSTP)</strong> declared an open data policy (2013) making open and machine-readable data the new default for government information. The intent is to make government-held data more accessible to the public and entrepreneurs while appropriately safeguarding sensitive information and protecting privacy.</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className="section-container">
          <CardTitle title="Case Study: Data Acquisition" />
          <Divider/>
          <CardText>
            <p>A social scientist is conducting an anonymous survey of college students on their opinions on various academic integrity issues. The survey is administered in four difference sections of an introduction to sociology course. The survey includes 20 questions in which respondents can use a 1-5 rating scale to answer various questions: 1=strong agreement with 5=strong disagreement. The survey also includes 10 open-ended questions that ask for the students to state their opinions. The social scientist distributes 480 surveys and 320 students respond.</p>
            <p>When examining the survey results, the social scientist encounters some problems. First, it appears that eight surveys are practical jokes using obscenities in the opinion section and adding extra numbers to the rating scale. Second, in 35 surveys, the students apparently misunderstood the instructions on how to use the rating scale as they answered "5" on questions where it would seem "1" would be the most logical answer given their comments. Third, on 29 surveys, the respondents wrote their names on the survey when they were instructed not to do so.</p>
          </CardText>
        </Card>
        <Card className="section-container">
          <CardTitle title="Question" />
          <Divider/>
          <CardText>
            <h4>How should the social scientist deal with these issues of their data?</h4>
            <RadioButtonGroup name='0'>
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'a')}
                value='a'
                label='A) The social scientist should just re-do the 35 surveys where the students misunderstood the instructions on how to use the rating scale himself, and populate the number that they should have circled based on their responses. (ie. If they strongly agreed but circled 5, he should just switch it to a 1)' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'b')}
                value='b'
                label='B) He should seek advice on this sample, and research if he would still have a statistically representative sample if he threw out the 72 surveys that had issues.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'c')}
                value='c'
                label='C) He should only throw out the 8 surveys that people did not take seriously.' />
            </RadioButtonGroup>
          </CardText>
        </Card>
      </SectionContainer>
    );
  }
}
