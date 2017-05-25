import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import SecIntro from './training-sections/SecIntro';
import Sec1 from './training-sections/Sec1';
import Sec2 from './training-sections/Sec2';
import Sec3 from './training-sections/Sec3';
import Sec4 from './training-sections/Sec4';
import Sec5 from './training-sections/Sec5';
import Sec6 from './training-sections/Sec6';
import Sec7 from './training-sections/Sec7';
import Sec8 from './training-sections/Sec8';
import Sec9 from './training-sections/Sec9';
import Sec10 from './training-sections/Sec10';
import Sec11 from './training-sections/Sec11';
import SecConclusion from './training-sections/SecConclusion';
import SecReviewResources from './training-sections/SecReviewResources';

import config from './config.json';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(config.muiTheme)}>
    <Router>
      <App>
        <Route exact path={config.app.root} component={SecIntro} />
        <Route exact path={config.app.root+'ethics-and-social-responsibility'} component={Sec1} />
        <Route exact path={config.app.root+'data-acquisition-and-management'} component={Sec2} />
        <Route exact path={config.app.root+'research-misconduct'} component={Sec3} />
        <Route exact path={config.app.root+'publication-practices-and-responsible-authorship'} component={Sec4} />
        <Route exact path={config.app.root+'collaborative-science'} component={Sec5} />
        <Route exact path={config.app.root+'animal-safety'} component={Sec6} />
        <Route exact path={config.app.root+'human-safety'} component={Sec7} />
        <Route exact path={config.app.root+'laboratory-safety'} component={Sec8} />
        <Route exact path={config.app.root+'conflict-of-interest'} component={Sec9} />
        <Route exact path={config.app.root+'mentor-and-trainee-responsibilities'} component={Sec10} />
        <Route exact path={config.app.root+'fiscal-responsibility'} component={Sec11} />
        <Route exact path={config.app.root+'conclusion'} component={SecConclusion} />
        <Route exact path={config.app.root+'review-and-resources'} component={SecReviewResources} />
      </App>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
