/* eslint-disable max-len */
// eslint-disable max-len

import AppFrame from 'colostate-ricro-ui';
import React from 'react';
import ReactDOM from 'react-dom';
import { config } from '../assets/config';
import Question from './index';

test('renders without props', () => {
  const question = {
    id: 1,
    question:
      'Does Antonio need to seek approval for his research project with human participants? If so, who does he need approval from?',
    options: [
      {
        id: 'a',
        label: 'Yes. He should contact the professor who is teaching the psychology course.',
      },
      {
        id: 'b',
        label:
          'No, since he is not using any drugs or medications to test the individuals he does not need approval.',
      },
      {
        id: 'c',
        label:
          'Yes. He should contact the Institutional Review Board for approval to use the students in the psychology course.',
      },
      { id: 'd', label: 'No, if the student volunteers there is no approval necessary.' },
    ],
    answer: 'c',
  };
  const div = document.createElement('div');
  ReactDOM.render(
    <AppFrame config={config}>
      <Question question={question} />
    </AppFrame>,
    div,
  );
});
