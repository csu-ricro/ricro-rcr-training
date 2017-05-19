import React, {
  Component
} from 'react';
import {
  Card,
  CardTitle,
  CardText
} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import {
  getSectionTrio
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
            <CardTitle title='Obtaining Certification'/>
            <Divider/>
            <CardText>
               <p>The Responsible Conduct of Research (RCR) Training cannot be substituted for Human Subjects Training required for individuals involved in Human Subjects Research or Laboratory Animal Use Training for individuals involved in the use of animals in their research.</p>
               <p>You must be a <strong>student</strong>, <strong>faculty/staff</strong>, or <strong>associate of CSU</strong> to obtain a certification.</p>
               <div className='center-block'>
                  <a href='https://rsweb.research.colostate.edu/RCRTraining/'>
                     <RaisedButton label='Certify' primary={true} />
                  </a>
               </div>
            </CardText>
         </Card>
      </SectionContainer>
    );
  }
}
