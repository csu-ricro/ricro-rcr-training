/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
const md = `
Collaborative research occurs when two or more researchers work together on a project. Collaboration is enhanced at CSU by its multicultural, global campus. With approximately 1,200 foreign students and scholars from over 90 different countries, their various backgrounds, cultures, and ideas enable CSU to be one of the nation’s leading research universities.

### Forms of Collaboration

#### Proximity

Collaboration may occur internally, across disciplines, across institutions, and/or around the globe.

#### Project size

Collaborative research ranges from one-on-one partnerships to multi-faceted projects involving numerous researchers from varied backgrounds and everything in between.

#### Institutional Partners

Collaborations may occur with researchers based at universities, nonprofits, or commercial entities.

## Trends and Public Policy

Science & engineering research has become increasingly collaborative. Collaboration is supported by policy initiatives.

Between 1988 and 2005, the share of publications with authors from multiple institutions grew from 40% to 61%.

- Coauthored articles with only domestic institutions in the bylines grew from 32% to 41% of all articles.
- Articles with institutions from multiple countries—an indicator of international collaboration and the globalization of science—grew from 8% to 20%.<sup>1</sup>

<sup>1</sup> Science and Engineering Indicators (2008)

#### National Science Foundation NSF

> Discovery Goal: Investment Priority \#1 –
>  Promote transformational, multidisciplinary research.
>  NSF will emphasize investigations that cross disciplinary boundaries and require a systems approach to address complex problems (e.g., the neural basis of behavior, natural hazards and grid technologies) at the frontiers of discovery.
> National Science Foundation Strategic Plan (2006)

#### National Institutes of Health NIH

> The scale and complexity of today's.. research problems increasingly demand that scientists move beyond the confines of their own discipline and explore new organizational models for team science... Many scientists will still continue to pursue individual research projects, but they too will be encouraged to make changes in the way they approach the scientific enterprise.
> National Institutes of Health Roadmap for Research (2004)

## Institutional Structure

CSU has over 100 Centers, Institutes, and Other Special Units (CIOSUs) which are collaborations that extend beyond an academic unit. A complete list of CIOSUs can be found at: [https://vpr.colostate.edu/centers-and-institutes/](https://vpr.colostate.edu/centers-and-institutes/)

#### Physical Sciences: Cooperative Institute for Research in the Atmosphere (CIRA)

A research partnership created to conduct research in the atmospheric sciences.

[http://www.cira.colostate.edu/](http://www.cira.colostate.edu/)

#### Life Sciences: Animal Cancer Center (ACC)

The Colorado State University Animal Cancer Center (ACC) is the preeminent cancer center for animals offering the latest in diagnostics and treatment for all kinds of cancer in companion animals including surgery, chemotherapy and radiation therapy.

[http://www.csuanimalcancercenter.org/](http://www.csuanimalcancercenter.org/)

#### Humanities: Center for Fair and Alternative Trade (CFAT)

A multidisciplinary research center created to provide objective and in-depth analysis of market-based social change.

[http://www.cfat.colostate.edu/](http://www.cfat.colostate.edu/)

## Project Management and Challenges – Individual and Institutional Differences

Working with a collaborator can introduce project management challenges.

- Management styles and techniques may differ among collaborators.
- Personality differences can lead to disagreements, frustrations and confusion.
- Culture, standards and norms may vary by researcher or discipline.
- Policies and procedures may differ among collaborating institutions.

## Project Management and Challenges – Key Discussion Topics

Up-front discussion of key project management areas will maximize efficiency and prevent conflicts.

- Roles and responsibilities for investigators and project team
- Authorship – ranking, writing and publishing
- Accountability – financial and personal
- Laboratory and equipment usage
- Data collection, dissemination and management use and retention
- Intellectual property including data, inventions, and publications
- Project conclusion

## Project Management Best Practices

Clear roles and communication are vital to successful collaboration.

### PI & Co-Investigators

#### Proposal & Setup

- **Establish timeline** and milestones.
- **Articulate role** of each team member and establish a "Lead".
- **Assign key tasks**, such as submission of progress reports, financial management, and authorship.
- Discuss **intellectual property**.
- Execute formal **collaboration agreements** as needed.

#### Project Execution

- **Manage expectations** for timelines.
- **Explain methodologies** and discuss any changes.
- **Follow through** on roles and responsibilities.
- **Communicate** openly about progress, concerns, and financial management.
- **Amend or renew agreements** as needed.

#### Publication & Closeout

- **Publication** - adhere to, or renegotiate, agreed-upon authorship roles.
- **Intellectual Property** - clarify ownership and disclose inventions to sponsor as appropriate.
- **Financial management** - process and report expenditure in a timely fashion, take responsibility for cost overruns as necessary.

### Research Team

#### Proposal & Setup

- **Communicate** openly, listen.
- **Understand role** and responsibilities.
- Understand and follow applicable institutional and federal **policies and regulations** for both on and off site project work.
- **Disclose** conflicts of interest.

#### Project Execution

- **Meet regularly** for status updates, ask questions.
- **Maintain ethical standards** and adhere to federal and institutional policies and procedures.
- **Adapt** to new management styles and techniques.
- **Be accountable**.

#### Publication & Closeout

- **Support** closeout process as needed.

## Institutional Resources

**[Office of Sponsored Programs](https://vpr.colostate.edu/OSP/)**

- Reviews & submits proposal to sponsor.
- Negotiates and accepts sponsored awards.
- Issues subawards to collaborators.
- May provide guidance regarding collaboration with industry partners.
- Can advise on award terms and financial management.

**[Research Integrity and Compliance Review Office (RICRO)](https://vpr.colostate.edu/RICRO/)**

- Research Integrity and Compliance Review Office (RICRO)
- Ensures institutional and project compliance with federal and institutional policies and procedures.
- Collects assurances from each site for multisite projects.
- Addresses any potential or known conflicts of interest.
- Can advise on compliance issues such as human subjects involvement, animal care & use, and conflict of interest.

**[Colorado State University Research Foundation (CSURF)](http://csurf.org/)**

- Identifies and patents new inventions and copyright materials, including software, resulting from research projects.
- With a collaborative research project, this becomes even more important and complex.
- Tech Transfer can help develop the documentation necessary to protect intellectual property rights appropriately for all involved.

## Case Study: Collaborative Research

Dr. Yount, the leading brain cancer researcher in the country wants to collaborate with Dr. May, a renowned social scientist at CSU who specializes in stress, and the effects it has on individual's health . Dr. Yount is excited about the opportunity of working side-by-side with Dr. May, but is worried that the NIH will be less likely to fund him if he collaborates with another individual who is not in his field.

---`;

const questions = [
  {
    id: 1,
    question:
      'Do you think that Dr. Yount should be more worried about funding if he collaborates with another researcher? Would he be more likely to get funding if he applied for the grant without Dr. May?',
    options: [
      {
        id: 'a',
        label:
          'Yes, the NIH is less likely to fund Dr. Yount and Dr. May if they collaborate because they would have to provide the doctors with more funding than if Dr. Yount applied solo.',
      },
      {
        id: 'b',
        label:
          'No, the NIH prioritizes collaborative research and believes that research problems often demand that scientists move beyond the confines of their own discipline, and explore team science.',
      },
    ],
    answer: 'b',
  },
];

const s5Collab = { md, questions };

export default s5Collab;
