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

class Sec extends Component {
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
          <CardTitle title='Welcome to the RCR Online Training' />
          <Divider />
          <CardText>
            <p>There are 11 Modules, each of which must be read. You may take as long as you wish to read each Module and may open each Module as many times as you wish.</p>
            <div className='row'>
              <div className='col-md-6'>
                <h4>Module Questions</h4>
                <Divider/>
                <p>Some of the Modules have questions at the end of the Module. These questions are purely to help with your understanding of the subject matter.</p>
                <p>There is no limit to the number of times you can attempt a question, nor will it prevent you from accessing the next Module.</p>
              </div>
              <div className='col-md-6'>
                <h4>Problems or Questions about the Modules</h4>
                <Divider/>
                <p>If you are having issues with these Modules, notice an error or typo, or have any question related to the material, please don't hesitate to <a href={config.unit.contactHref}>contact us</a>.</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container' id='section-2'>
          <CardTitle title='Why Responsible Conduct of Research?' />
          <Divider/>
          <CardText>
            <p>The research community assumes a standard of integrity in research. We expect that all investigators share similar ethical values, such as honesty and objectivity, that they conduct research appropriately, and that they pass these values and ethics on to the next generation of investigators. Federal agencies increasingly emphasize activities that enhance education and training in the Responsible Conduct of Research (RCR).</p>
            <p>Over the past 15 years academic institutions have experienced numerous investigations and settlements related to research compliance; CSU, too, has been impacted by misconduct investigations. Clear codes of conduct and training in RCR are needed to keep CSU in good standing with the external agencies that sponsor over 300 million dollars in research each year.</p>
            <p>This course will provide you with tools to reduce research misconduct, develop stewardship and promote integrity across the entire university.</p>
          </CardText>
        </Card>
        <Card className='section-container' id='section-3'>
          <CardTitle title='When was RCR Required?' />
          <Divider/>
          <CardText>
            <div className='row'>
              <div className='col-md-3'>
                  <h4>2008</h4>
                  <Divider/>
                  <p>In 2008 the National Science Foundation (NSF) proposed to implement the America COMPETES Act (Creating Opportunities to Meaningfully Promote Excellence in Technology, Education, and Science Act) requirement for training and oversight in RCR.</p>
              </div>
              <div className='col-md-3'>
                  <h4>2009</h4>
                  <Divider/>
                  <p>In 2009 the National Institutes of Health started requiring RCR training for all trainees receiving NIH support through Institutional Research Training Grants, Individual Fellowships, Career Development Awards, and other grant programs with a training component.</p>
              </div>
              <div className='col-md-3'>
                  <h4>2010</h4>
                  <Divider/>
                  <p>2010 policies from NSF further require Postdoctoral Researchers, Graduate and Undergraduate Students paid from NSF funds to receive RCR training, and require that CSU certify that we have a training program in place when submitting both new and continuing, institutional and individual applications.</p>
                  <p>CSU’s plan may be found on the <a href='https://vpr.colostate.edu/ricro/rcr/csus-rcr-training-policy-overview/'>Responsible Conduct of Research website</a>.</p>
              </div>
              <div className='col-md-3'>
                  <h4>2013</h4>
                  <Divider/>
                  <p>2013 policies from USDA-NIFA require program directors, faculty, postdoctoral researchers, graduate and undergraduate students paid from USDA-NIFA funds to receive RCR training, and documentation of the training	are subject to NIFA review upon request.</p>
                  <p>CSU’s plan may be found on the <a href='https://vpr.colostate.edu/ricro/rcr/csus-rcr-training-policy-overview/'>Responsible Conduct of Research website</a>.</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container' id='section-4'>
          <CardTitle title='Question' />
          <Divider/>
          <CardText>
            <h4>The National Science Foundation (NSF) requires which of the following types of trainees to get 'RCR' (Responsible Conduct of Research) training if they are going to be paid salary off an NSF grant:</h4>
            <RadioButtonGroup name='intro-1'>
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'a')}
                value='a'
                label='A) Undergraduate Students' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'b')}
                value='b'
                label='B) Graduate Students' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'c')}
                value='c'
                label='C) Postdoctoral Fellows' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'d')}
                value='d'
                label='D) A and B' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'e')}
                value='e'
                label='E) A, B, and C' />
            </RadioButtonGroup>
          </CardText>
        </Card>
      </SectionContainer>
    );
  }
}

export default Sec;
