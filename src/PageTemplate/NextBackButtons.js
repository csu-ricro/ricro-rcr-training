import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import _ from 'lodash';
import MdiChevronLeft from 'mdi-material-ui/ChevronLeft';
import MdiChevronRight from 'mdi-material-ui/ChevronRight';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = theme => ({
  button: { height: '100%' },
  gridContainer: {
    marginTop: theme.spacing.unit * 3,
    '& > div': {
      padding: `0 ${theme.spacing.unit}px`,
    },
  },
});

class NextBackButtons extends React.Component {
  render() {
    const { classes, name, navList } = this.props;
    const navIndex = _.findIndex(navList, nav => nav.name === name);
    return (
      navIndex !== -1 && (
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={6}>
            {navIndex !== 0 && (
              <Button
                className={classes.button}
                component={Link}
                fullWidth
                size="large"
                to={navList[navIndex - 1].link}
                variant="outlined"
              >
                <MdiChevronLeft />
                {navList[navIndex - 1].name}
              </Button>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {navIndex !== navList.length - 1 && (
              <Button
                className={classes.button}
                color="primary"
                component={Link}
                fullWidth
                size="large"
                to={navList[navIndex + 1].link}
                variant="contained"
              >
                {navList[navIndex + 1].name}
                <MdiChevronRight />
              </Button>
            )}
          </Grid>
        </Grid>
      )
    );
  }
}

NextBackButtons.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  name: PropTypes.string.isRequired,
  navList: PropTypes.array.isRequired,
};

export default withStyles(styles)(NextBackButtons);
