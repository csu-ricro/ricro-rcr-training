import { createConfig } from 'colostate-ricro-ui';
import _ from 'lodash';
import pk from '../../package.json';
import a1Resources from './apendix/a1-resources';
import s0Intro from './section/s0-intro';
import sec1 from './section/s1-ethics';
import sec10 from './section/s10-mentor';
import sec11 from './section/s11-fiscal';
import sec2 from './section/s2-data';
import sec3 from './section/s3-research';
import sec4 from './section/s4-publication';
import sec5 from './section/s5-collab';
import sec6 from './section/s6-animal';
import sec7 from './section/s7-human';
import sec8 from './section/s8-lab';
import sec9 from './section/s9-conflict';
import sec100Conclusion from './section/sz-conclusion';

const rawConfig = {
  app: {
    name: 'Responsible Conduct of Research Training',
    basename: pk.homepage,
    hasLogin: false,
    nav: [
      [
        {
          name: 'Introduction',
          link: '/',
          body: s0Intro,
        },
        {
          name: 'Ethics and Social Responsibility',
          link: '/ethics-and-social-responsibility',
          body: sec1,
        },
        {
          name: 'Data Acquisition and Management',
          link: '/data-acquisition-and-management',
          body: sec2,
        },
        {
          name: 'Research Misconduct',
          link: '/research-misconduct',
          body: sec3,
        },
        {
          name: 'Publication Practices and Responsible Authorship',
          link: '/publication-practices-and-responsible-authorship',
          body: sec4,
        },
        {
          name: 'Collaborative Science',
          link: '/collaborative-science',
          body: sec5,
        },
        {
          name: 'Animal Safety',
          link: '/animal-safety',
          body: sec6,
        },
        {
          name: 'Human Safety',
          link: '/human-safety',
          body: sec7,
        },
        {
          name: 'Laboratory Safety',
          link: '/laboratory-safety',
          body: sec8,
        },
        {
          name: 'Conflict of Interest',
          link: '/conflict-of-interest',
          body: sec9,
        },
        {
          name: 'Mentor and Trainee Responsibilities',
          link: '/mentor-and-trainee-responsibilities',
          body: sec10,
        },
        {
          name: 'Fiscal Responsibility',
          link: '/fiscal-responsibility',
          body: sec11,
        },
        {
          name: 'Conclusion',
          link: '/conclusion',
          body: sec100Conclusion,
        },
      ],
      [
        {
          name: 'Review and Resources',
          link: '/review-and-resources',
          body: a1Resources,
        },
      ],
    ],
  },
};

export default rawConfig;
export const config = createConfig(_.cloneDeep(rawConfig));
