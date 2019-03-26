/* eslint-disable max-len */

const md = `
Whether working in a chemistry lab or writing a short story for a creative writing class, we all acquire and accumulate data while conducting our work at CSU. Both sponsors and institutions require that this data be stored and managed appropriately. It is important that faculty, researchers, and students understand the laws and policies affecting data, recognize their responsibilities in managing this data, and know how to access university policy and guidelines related to these issues.

## So what exactly is data?

The term data is very broad in nature, but, we want to focus on its meaning in terms of the sponsored research process. With this in mind, it is defined as the collection of measurements, facts or observations. There are two types of data:

#### Quantitative

Quantitative data are data that are in numerical form.

#### Qualitative

Qualitative data includes words, pictures, sound recordings, and video. Things that may not seem to be data, can be data.

#### Examples of data in sponsored research projects include:

- DNA sequences
- Chemical compositions
- Animal or human subject observations
- Physical specimens
- Tissue samples
- Musical scores
- Charts and graphs
- Pictures
- Surveys
- Questionnaires
- Video footage
- Computations

## Data Selection

A common challenge amongst all disciplines is selection of data sets. When and how to include and remove data points within a data set can be challenging, and the process of selecting suitable data for a research project can impact data integrity.

#### Considerations in Data Selection

There are a number of practices that researchers can follow in order to help with selecting data including:

- seek statistical training and advice before selecting a data set;
- follow suitable procedures in order to obtain a representative sample;
- use the proper instruments to collect data; and
- develop a detailed research plan, and be sure to carry it out as planned.

## Data Storage

Traditionally, data are recorded in:

- Lab notebooks, journals
- Computers
- Related media (e.g. external hard drives, flash drives, etc.)

However, these media can be lost, suffer bit-rot and subsequent data loss/corruption, and format obsolescence...

## Applicable Laws and Regulations

#### Freedom of Information Act (1966)

The Freedom of Information Act (FOIA). Gives individuals and organizations the right to request and receive records and data from the government. Exemptions to this law may include personnel and medical files that would invade personal privacy and national security.

#### Colorado Open Records Act (1969)

The Colorado Open Records Act (CORA). All public records shall be open for inspection by any person at reasonable times, except as otherwise provided by law. Public records are defined by this law as writings made or maintained by a state institution, such as CSU, regardless of the format or medium of the records, and expressly includes e-mail communications. There are some exceptions to CORA, but these must be determined by legal counsel.

#### Bayh-Dole Act (1980)

The Bayh-Dole Act Enables universities and small businesses to license new technology to the private sector from federally-funded research projects. Any discoveries or inventions will be retained by the host university for licensing to the private sector. The federal government generally no longer retains the rights to those discoveries or inventions.

#### Electronic Freedom of Information Act (1996)

The Electronic Freedom of Information Act. A federal law that allows individuals to access electronically created documents and information, such as electronic databases, electronic documents, word-processing documents, and e-mail.

#### The Patriot Act (2001)

The Patriot Act made it easier for the federal government to collect information and intelligence to obstruct international and domestic terrorism. The act directly affected sponsored research because many scientific experiments require the use of toxins, biological agents and compounds that are now on a list created by the Office of Homeland Security that must be monitored by institutions that purchase them for their use in research.

## Data Ownership and Data Sharing

Many institutions have developed their own self-monitoring and auditing policies to show compliance with the Patriot Act.

#### Data Ownership

All data collected and stored in notebooks, journals, or computers and their related media are the property of CSU and/or the sponsor. Ownership of data is explained in the sponsor agreement or award notice. The copyright of data reverts back CSU when it is funded with federal funds. Retention of data may be required for three to five years or more depending on institution and sponsor requirements.

#### Data Sharing

The **National Institutes of Health (NIH)** developed a data sharing policy that went into effect in 2003, for applicants seeking NIH funding of $500,000 or more in direct costs in any one year. This policy helps ensure that final research data will be made available to other investigators. This collaborative approach will further all types of research, and lead to more findings and increased knowledge to improve human health in the future.

The **National Science Foundation (NSF)** developed a data management & sharing policy that went into effect in 2010. Investigators are expected to share primary data, samples, physical collections and other materials gathered in the course of work under NSF grants. Proposals submitted after January, 2011 must include a supplementary document labeled "Data Management Plan."

The **Office of Science & Technology Policy (OSTP)** declared an open data policy (2013) making open and machine-readable data the new default for government information. The intent is to make government-held data more accessible to the public and entrepreneurs while appropriately safeguarding sensitive information and protecting privacy.

## Case Study: Data Acquisition

A social scientist is conducting an anonymous survey of college students on their opinions on various academic integrity issues. The survey is administered in four difference sections of an introduction to sociology course. The survey includes 20 questions in which respondents can use a 1-5 rating scale to answer various questions: 1=strong agreement with 5=strong disagreement. The survey also includes 10 open-ended questions that ask for the students to state their opinions. The social scientist distributes 480 surveys and 320 students respond.

When examining the survey results, the social scientist encounters some problems. First, it appears that eight surveys are practical jokes using obscenities in the opinion section and adding extra numbers to the rating scale. Second, in 35 surveys, the students apparently misunderstood the instructions on how to use the rating scale as they answered "5" on questions where it would seem "1" would be the most logical answer given their comments. Third, on 29 surveys, the respondents wrote their names on the survey when they were instructed not to do so.

---`;

const questions = [
  {
    id: 1,
    question: 'How should the social scientist deal with these issues of their data?',
    options: [
      {
        id: 'a',
        label:
          'The social scientist should just re-do the 35 surveys where the students misunderstood the instructions on how to use the rating scale himself, and populate the number that they should have circled based on their responses. (ie. If they strongly agreed but circled 5, he should just switch it to a 1)',
      },
      {
        id: 'b',
        label:
          'He should seek advice on this sample, and research if he would still have a statistically representative sample if he threw out the 72 surveys that had issues.',
      },
      {
        id: 'c',
        label: 'He should only throw out the 8 surveys that people did not take seriously.',
      },
    ],
    answer: 'b',
  },
];

const s2Data = { md, questions };

export default s2Data;
