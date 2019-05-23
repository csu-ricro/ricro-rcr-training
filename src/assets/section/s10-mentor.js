/* eslint-disable max-len */
const md = `
This section will guide you through mentor and trainee responsibilities in relation to sponsored programs. Both mentors and trainees must uphold high standards of research conduct and this section will explain: their unique roles and responsibilities, challenges they face, best practices for mentors and mentees and suggested guidelines.

## Who is a mentor?

Experienced professionals with impartial insight and knowledge to benefit mentees, who are well versed in institutional and regulatory policies and procedures.

While most mentors stand out as senior faculty or Principal Investigators, any junior faculty or Post-Doctoral Researcher who fosters and guides the development of less experienced staff are also considered mentors since their role is inclusive of imparting knowledge and cultivating skills.

> Mentoring is one of the primary means for one generation of scientists to impart their knowledge to succeeding generations. More than textbooks and formal classes, the relatively informal dimensions of scientific research, including the relationship between mentor and trainee, prepare the next generation of science professionals
>
> Comments from CITI module

## How does one mentor?

- By developing a lifelong commitment to students for continued networking and advice; development and progress toward career goals
- By assisting students early in their careers while also teaching them to be independent
- By encouraging students with enthusiasm, passion and support
- By setting up periodical meetings (group, individual, on a timeline for goal setting)
- By explaining how to credit sources and authorship; avoiding plagiarism; reviewing articles, publishing work, citing sources, accepting and using criticism; honing writing skills and mastering oral presentations with internal/external peers
- By fostering and cultivating responsible conduct of research
- Duties are not limited to supervising

## What are the mentor's key responsibilities?

- Explain how to work with a budget, expensive lab equipment, supplies, etc.
- Provide adequate training on proper methodologies and standards
- Provide consistency and timeliness to ensure trainees fully understand policies and procedures
- Offer contact information for follow-up questions and concerns
- Create proactive vs. reactive communication and support
- Distinguish between appropriate training methods for different types of research (basic, clinical or epidemiological)
- Display appropriate treatment to all mentees and not show favoritism
- Avoid putting trainees in awkward or strenuous situations
- Adapt to needs of various types of mentees (foreign, post-docs, experienced, novices)

## Who is the trainee?

While mentors act as resources to guide and train their mentees, trainees also play an important role in the relationship. Knowing whom to contact, what is expected regarding their role and understanding both institutional and regulatory guidelines relating to sponsored research are essential for success.

Trainees may include recent undergraduates, foreign Fellows or post-doctoral researchers. As such, their needs will vary and mentors should adapt to those unique needs.

## What are the trainee's key responsibilities?

- Meet several potential mentors and choosing the best mentor to fulfill career goals
- Articulate expectations about the relationship
- Attend training courses on RCR including: legal and ethical training, intellectual property, technology transfer and data ownership and management
- Differentiate between "written" versus "unwritten" rules
- Distinguish regulatory vs. institutional policies
- Display honest and open communication with their mentors
- Communicate concerns regarding fellow trainees or relationship with mentor/mentees
- Question when doubtful on policies and procedures
- Design career plans and working on research projects that are aligned with those plans
- Learn how to read, edit and evaluate manuscripts and publications
- Attend regional and national seminars/conferences for exposure to experts in their field of study
- Polish writing and oral presentations skills
- Master the art of diplomacy, networking and communication

## What are the challenges faced?

- Trainees may feel unfair treatment between mentor, themselves and among fellow students
- Uncomfortable trainees may not request information on RCR from PI resulting in inadequate/sufficient training
- Trainees may feel burdened with mentor's own work rather than mentor supporting trainees' research and progress
- Mentor exploiting mentees for their own research purposes
- Trainees must understand what is private property vs. what belongs to the institution (notebooks, computers, external hard drives, flash drives, cloud storage, etc.)
- Due to the transient nature of academic science, trainees and mentors need clarification during the entire research project to understand what data may or may not leave the institution when the trainee transfers elsewhere
- Dialogue between mentors and trainees is crucial for honesty and understanding
- Web based courses, defined policies and institutional procedures and access to pertinent information is necessary
- Language barriers must be handled according to institutional standards

## Case Study: Mentor & Trainee Responsibilities

Samantha Jackson is a post-doc working in the lab of Dr. Luis Lopez. She is a tenacious student and spends nearly seven days a week in the lab putting final touches on her thesis which is due in a few weeks. Lately, she has put off her own work to assist Dr. Lopez with some lab experiments; for which the results will be presented at an important national seminar next Thursday.

As she is heading out the door for the weekend, Dr. Lopez asks Samantha if she is able to analyze more data and prepare figures and graphs. While she intended to work on her thesis, she knew he needed the help so agreed. He thanked her and explained she would be listed as the third author behind him and the data collector, Meredith.

Samantha leaves and tells Dr. Lopez she looks forward to working with him in the morning, to which he smirks and replies he will not be there.

---`;

const questions = [
  {
    id: 1,
    question: 'What challenge is Samantha Jackson facing with her mentor Dr. Lopez?',
    options: [
      {
        id: 'a',
        label: 'Dr. Lopez is breaking a CSU policy by asking her to work over the weekend.',
      },
      {
        id: 'b',
        label:
          "Samantha Jackson feels burdened with Dr. Lopez's work rather than feeling like Dr. Lopez is mentoring her and supporting her research and progress.",
      },
      {
        id: 'c',
        label:
          'Dr. Lopez is violating CSU policy by not supervising and mentoring Samantha while she completes the work over the weekend.',
      },
      {
        id: 'd',
        label:
          'Dr. Lopez is bribing Samantha by saying he will give her authorship credit which is unacceptable.',
      },
    ],
    answer: 'b',
  },
];

const s10Mentor = { md, questions };

export default s10Mentor;
