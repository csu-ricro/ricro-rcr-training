import React from 'react';
import FontIcon from 'material-ui/FontIcon';

import config from './config.json';
import sections from './sections.json';

export const getSectionTrio = () => {
  const pathnameArray = window.location.pathname.split(config.app.root);
  const index = sections.findIndex(section => section.link === pathnameArray[pathnameArray.length - 1]);
  return {
    before: index >= 0 ? sections[index - 1] : null,
    current: sections[index],
    next: index < sections.length ? sections[index + 1] : null
  }
}

export const getAnswer = (value, answer) => {
  if (answer === value) {
    return (
      <FontIcon
      style={{color: config.statusTheme.success}}
      className='material-icons'>
      check
    </FontIcon>
    );
  }
  return (
    <FontIcon
      style={{color: config.statusTheme.danger}}
      className='material-icons'>
      close
    </FontIcon>
  );
}
