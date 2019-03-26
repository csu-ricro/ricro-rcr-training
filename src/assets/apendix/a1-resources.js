/* eslint-disable max-len */
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { MarkdownParser } from 'colostate-ricro-ui';
import MdiChevronDown from 'mdi-material-ui/ChevronDown';
import PropTypes from 'prop-types';
import React from 'react';
import a1Intro from './a1-1-intro';
import a1Mentor from './a1-10-mentor';
import a1Fiscal from './a1-11-fiscal';
import a1Data from './a1-2-data';
import a1Research from './a1-3-research';
import a1Publication from './a1-4-publication';
import a1Collab from './a1-5-collab';
import a1Safety from './a1-6_8-safety';
import a1Conflict from './a1-9-conflict';

const mdC1 = <MarkdownParser source={a1Intro} />;
const mdC2 = <MarkdownParser source={a1Data} />;
const mdC3 = <MarkdownParser source={a1Research} />;
const mdC4 = <MarkdownParser source={a1Publication} />;
const mdC5 = <MarkdownParser source={a1Collab} />;
const mdC6 = <MarkdownParser source={a1Safety} />;
const mdC7 = <MarkdownParser source={a1Conflict} />;
const mdC8 = <MarkdownParser source={a1Mentor} />;
const mdC9 = <MarkdownParser source={a1Fiscal} />;

const styles = theme => ({
  headingContainer: { '& > div': { alignItems: 'center' } },
  heading: {
    flexBasis: '60%',
    flexShrink: 0,
    marginRight: 16,
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
});

class Resources extends React.Component {
  state = {
    panels: [
      { section: '1', title: 'Ethics and Social Responsibility', md: mdC1, expanded: false },
      { section: '2', title: 'Data Acquisition and Management', md: mdC2, expanded: false },
      { section: '3', title: 'Research Misconduct', md: mdC3, expanded: false },
      {
        section: '4',
        title: 'Publication Practices and Responsible Authorship',
        md: mdC4,
        expanded: false,
      },
      { section: '5', title: 'Collaborative Science', md: mdC5, expanded: false },
      {
        section: '6-8',
        title: 'Animal, Human, and Laboratory Safety',
        md: mdC6,
        expanded: false,
      },
      { section: '9', title: 'Conflict of Interest', md: mdC7, expanded: false },
      { section: '10', title: 'Mentor & Trainee Responsibilities', md: mdC8, expanded: false },
      { section: '11', title: 'Fiscal Responsibility', md: mdC9, expanded: false },
    ],
  };

  handleChangeold = panel => () => {
    this.setState(state => {
      const expanded = [...state.expanded];
      if (expanded.includes(panel)) {
        expanded.splice(expanded.indexOf(panel), 1);
        return { expanded };
      }
      expanded.push(panel);
      return { expanded };
    });
  };

  handleChange = id => () => {
    this.setState(state => {
      state.panels[id] = { ...state.panels[id], expanded: !state.panels[id].expanded };
      return {
        panels: state.panels,
      };
    });
  };

  render() {
    const { classes } = this.props;
    const { panels } = this.state;
    return (
      <React.Fragment>
        {panels.map((panel, id) => (
          <React.Fragment>
            <ExpansionPanel
              key={panel.title}
              expanded={panel.expaned}
              onChange={this.handleChange(id)}
            >
              <ExpansionPanelSummary
                className={classes.headingContainer}
                expandIcon={<MdiChevronDown />}
              >
                <Typography className={classes.heading} variant="h6">
                  {panel.title}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  {`Section ${panel.section}`}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>{panel.md}</ExpansionPanelDetails>
            </ExpansionPanel>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

Resources.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ResourcesStyled = withStyles(styles)(Resources);

const a1Resources = { md: <ResourcesStyled /> };

export default a1Resources;
