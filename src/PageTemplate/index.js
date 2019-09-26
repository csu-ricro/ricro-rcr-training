import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { MarkdownParser } from 'colostate-ricro-ui';
import PropTypes from 'prop-types';
import React from 'react';
import Question from '../Question';
import NextBackButtons from './NextBackButtons';

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: theme.breakpoints.values.md,
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: { marginBottom: theme.spacing.unit * 4 },
  flex: { flex: 1 },
});

class PageTemplate extends React.Component {
  state = {};

  componentDidMount() {
    // Fixes bug: user navigates to new page but scroll stays at the bottom
    window.scrollTo(0, 0);
  }

  render() {
    const { classes, config, body, name } = this.props;
    const { AfterMd, BeforeMd, md, questions = [] } =
      typeof body === 'function' ? body({ config }) : body;
    const navList = config.app.nav[1];
    return (
      <div className={classes.root}>
        <div>
          <Typography className={classes.header} variant="h3">
            {name}
          </Typography>
          {BeforeMd}
          {typeof md === 'string' ? <MarkdownParser source={md} escapeHtml={false} /> : md}
          {questions.map(q => (
            <Question key={q.id} question={q} />
          ))}
          {AfterMd}
          {typeof body === 'string' && <MarkdownParser source={body} escapeHtml={false} />}
        </div>
        <div className={classes.flex} />
        <NextBackButtons name={name} navList={navList} />
      </div>
    );
  }
}

PageTemplate.propTypes = {
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]).isRequired,
  classes: PropTypes.object.isRequired, // MUI withStyles()
  config: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(PageTemplate);
