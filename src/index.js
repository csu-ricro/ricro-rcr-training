import AppFrame from 'colostate-ricro-ui';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import rawConfig, { config } from './assets/config';
import PageTemplate from './PageTemplate';
import * as serviceWorker from './serviceWorker';

const routeSections = [...rawConfig.app.nav];

ReactDOM.render(
  <AppFrame config={config} disableGutters>
    {routeSections.map(section =>
      section.map(route => (
        <Route
          exact
          key={route.link}
          path={route.path || route.link}
          render={() => <PageTemplate {...route} config={config} />}
        />
      )),
    )}
  </AppFrame>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
