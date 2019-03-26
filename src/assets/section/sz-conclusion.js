/* eslint-disable max-len */
import Button from '@material-ui/core/Button';
import React from 'react';

const md = `### Obtaining Certification

The Responsible Conduct of Research (RCR) Training cannot be substituted for Human Subjects Training required for individuals involved in Human Subjects Research or Laboratory Animal Use Training for individuals involved in the use of animals in their research.

You must be a **student**, **faculty/staff**, or **an associate of CSU** to obtain a certification.`;

const Conclusion = () => {
  return (
    <Button
      color="primary"
      href="https://rsweb.research.colostate.edu/RCRTraining/"
      size="large"
      variant="contained"
    >
      Certify
    </Button>
  );
};

const szConclusion = { md, AfterMd: <Conclusion /> };

export default szConclusion;
