import React from 'react';
import {
  Link
} from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import config from './config.json';

const SecContainer = (props) => {
  window.scrollTo(0, 0);
  const nextLinkOffset = props.sectionTrio.before == null ? 'col-md-offset-6 col-md-6' : 'col-md-6';
  const nextLink = props.sectionTrio.next == null ? null : (
    <Link className={nextLinkOffset} to={config.appRoot+props.sectionTrio.next.link}>
      <RaisedButton
        label={props.sectionTrio.next.title}
        labelPosition='before'
        primary={true}
        fullWidth={true}
        icon={<FontIcon className='material-icons'>navigate_next</FontIcon>}
        />
    </Link>
  );
  const beforeLink = props.sectionTrio.before == null ? null : (
    <Link className='col-md-6' to={config.appRoot+props.sectionTrio.before.link}>
      <FlatButton
        label={props.sectionTrio.before.title}
        labelPosition='after'
        primary={true}
        fullWidth={true}
        icon={<FontIcon className='material-icons'>navigate_before</FontIcon>}
        />
    </Link>
  );
  return (
    <div>
      <h2>{props.sectionTrio.current.title}</h2>
      <p>{props.sectionTrio.current.description}</p>
      <hr/>
      {props.children}
      <div className='row'>
        {beforeLink}
        {nextLink}
      </div>
    </div>
  );
}

export default SecContainer;
