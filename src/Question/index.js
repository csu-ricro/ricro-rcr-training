import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import MdiCheckCircle from 'mdi-material-ui/CheckCircle';
import MdiCloseCircle from 'mdi-material-ui/CloseCircle';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  question: { fontWeight: 'bold', marginTop: theme.spacing.unit * 3 },
  optionsContainer: { marginLeft: theme.spacing.unit * 3 },
  colorCorrect: { color: theme.palette.alerts.success.main },
  colorIncorrect: { color: theme.palette.alerts.danger.main },
});

class Question extends React.Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes, question } = this.props;
    const { value } = this.state;
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <Typography className={classes.question} variant="body1">
              {question.question}
            </Typography>
          </FormLabel>
          <RadioGroup
            aria-label={`question ${question.id}`}
            className={classes.optionsContainer}
            name={`question-${question.id}`}
            onChange={this.handleChange}
            value={this.state.value}
          >
            {question.options.map(option => (
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    checkedIcon={
                      value === question.answer ? (
                        <MdiCheckCircle className={classes.colorCorrect} />
                      ) : (
                        <MdiCloseCircle className={classes.colorIncorrect} />
                      )
                    }
                  />
                }
                key={option.id}
                label={`${option.id.toUpperCase()}) ${option.label}`}
                value={option.id}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

Question.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles
  question: PropTypes.shape({
    answer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired,
    ),
    question: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Question);
