/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */

const buildMd = config => `
#### Welcome to the Responsible Conduct of Research (RCR) Online Training

There are 11 Sections, each of which must be read. You may take as long as you wish to read each Section and may open each Section as many times as you wish.

#### Section Questions

Some of the Sections have questions at the end of the Section. These questions are purely to help with your understanding of the subject matter.

There is no limit to the number of times you can attempt a question, nor will it prevent you from accessing the next Section.

#### Problems or Questions about the Sections

If you are having issues with these Sections, notice an error or typo, or have any question related to the material, please don't hesitate to [contact us](${
  config.unit.contactHref
}).

## Why Responsible Conduct of Research?

The research community assumes a standard of integrity in research. We expect that all investigators share similar ethical values, such as honesty and objectivity, that they conduct research appropriately, and that they pass these values and ethics on to the next generation of investigators. Federal agencies increasingly emphasize activities that enhance education and training in the Responsible Conduct of Research (RCR).

Over the past 15 years academic institutions have experienced numerous investigations and settlements related to research compliance; CSU, too, has been impacted by misconduct investigations. Clear codes of conduct and training in RCR are needed to keep CSU in good standing with the external agencies that sponsor over 300 million dollars in research each year.

This course will provide you with tools to reduce research misconduct, develop stewardship and promote integrity across the entire university.

## When was RCR Required?

#### 2008

In 2008 the National Science Foundation (NSF) proposed to implement the America COMPETES Act (Creating Opportunities to Meaningfully Promote Excellence in Technology, Education, and Science Act) requirement for training and oversight in RCR.

#### 2009

In 2009 the National Institutes of Health started requiring RCR training for all trainees receiving NIH support through Institutional Research Training Grants, Individual Fellowships, Career Development Awards, and other grant programs with a training component.

#### 2010

2010 policies from NSF further require Postdoctoral Researchers, Graduate and Undergraduate Students paid from NSF funds to receive RCR training, and require that CSU certify that we have a training program in place when submitting both new and continuing, institutional and individual applications.

CSU's plan may be found on the [Responsible Conduct of Research website](${
  config.unit.siteHref
}rcr/training-policy-overview/).

#### 2013

2013 policies from USDA-NIFA require program directors, faculty, postdoctoral researchers, graduate and undergraduate students paid from USDA-NIFA funds to receive RCR training, and documentation of the training are subject to NIFA review upon request.

CSU's plan may be found on the [Responsible Conduct of Research website](${
  config.unit.siteHref
}rcr/training-policy-overview/).

---`;

const questions = [
  {
    id: 1,
    question:
      "The National Science Foundation (NSF) requires which of the following types of trainees to get 'RCR' (Responsible Conduct of Research) training if they are going to be paid salary off an NSF grant:",
    options: [
      { id: 'a', label: 'Undergraduate Students' },
      { id: 'b', label: 'Graduate Students' },
      { id: 'c', label: 'Postdoctoral Fellows' },
      { id: 'd', label: 'A and B' },
      { id: 'e', label: 'A, B, and C' },
    ],
    answer: 'e',
  },
];

const s0Intro = ({ config }) => ({ md: buildMd(config), questions });

export default s0Intro;
