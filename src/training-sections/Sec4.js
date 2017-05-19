import React, {
  Component
} from 'react';
import {
  RadioButton,
  RadioButtonGroup
} from 'material-ui/RadioButton';
import {
  Card,
  CardTitle,
  CardText
} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import {
  getSectionTrio,
  getAnswer
} from '../Utils';
import SectionContainer from '../SectionContainer';

export default class Sec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer0: getSectionTrio().current.answers[0]
    }
  }
  render() {
    return (
      <SectionContainer sectionTrio={getSectionTrio()}>
        <Card className='section-container'>
          <CardTitle title='Importance of Responsible Authorship and Peer Review'/>
          <Divider/>
          <CardText>
            <p>The authorship recognition given for a publication is “important to the reputation, academic promotion, and grant support of the individuals involved, as well as to the strength and reputation of their institution."<sup>1</sup>  Authorship can directly correlate with research funding; good publications may lead to more opportunities for research funding. Thus, there is a lot of pressure amongst researchers to publish.</p>
            <p>The authorship that appears on a publication serves to give credit for those that made significant contributions to the work that is reported. It also provides resources for others who may have questions about methods, data, and results. Authors are typically listed in order of their contribution, with special significance on the first and last author. Even though the International Committee of Medical Journal Editors (“ICMJE") requirements note that “the order of authorship on the byline should be a joint decision of the coauthors,"<sup>2</sup> the responsibility of authorship ultimately resides with the authors themselves as each publication may have different guidelines.</p>
            <p className='disclaimer'><sup>1</sup>Nicholas H Steneck, “Introduction to Responsible Conduct of Research," 2007.</p>
            <p className='disclaimer'><sup>2</sup>International Committee of Medical Journal Editor’s Uniform Requirements for Manuscripts Submitted to Biomedical Journals</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Discussing Authorship'/>
          <Divider/>
          <CardText>
            <p>Early discussions regarding the division of credit within research groups (especially those anticipating a publication) can prevent later challenges in attributing appropriate authorship. The best practice is to determine the authorship credit early and explicitly communicate the determination to all researchers.</p>
            <p>Sensitivity should be given to each researcher based on the role performed. If, for example, a graduate student invites an undergraduate student to contribute to the research, and the graduate student sets the project in motion and defines the role of the undergraduate student, then additional credit should be given to the graduate student.</p>
            <p>Even senior researchers understand the importance of giving credit where credit is due. Any significant contribution by a junior researcher should be recognized by giving the junior researcher co-author credit.<sup>1</sup></p>
            <p>At times, there may be pressure to include an honorary researcher even though that person performed little of the research.</p>
            <h4>Honorary Researchers</h4>
            <Divider/>
            <p>The honorary researcher may be a department chair where the research was conducted or had provided funds to initiate the research.  Recognizing an honorary researcher gives him or her more credit than is due.  In addition, it lessens the credit provided to the other authors.  Even though the honorary researcher may have made some type of contribution, they should not be listed as authors if they did not actively partake in and make a significant contribution to the research performed.</p>
            <p className='disclaimer'><sup>1</sup> The National Academic Press, On Being a Scientist website</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Corresponding Author'/>
          <Divider/>
          <CardText>
            <p>It is common to establish a corresponding author to assume primary responsibility for publication. The corresponding author is responsible for the article as it moves through the journal’s submission process, including making any edits to the article and submitting revisions as it moves from one stage to the next. In addition, the corresponding author is responsible for the:</p>
            <ul>
              <li>accuracy of the data</li>
              <li>names listed as authors (all deserve authorship and no one has been neglected)</li>
              <li>approval of the final draft by all authors</li>
              <li>handling of all correspondence and responding to inquiries<sup>1</sup></li>
            </ul>
            <p className='disclaimer'><sup>1</sup> Nicholas H Steneck, “Introduction to Responsible Conduct of Research," 2007.</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Authorship Credit'/>
          <Divider/>
          <CardText>
            <p>According to the ICMJE Statement of Authorship, An “author" is generally considered to be someone who has made substantive intellectual contributions to a published study.</p>
            <p>Authorship credit should be based on:</p>
            <ul>
              <li>substantial contributions to conception and design, or acquisition of data, or analysis and interpretation of data</li>
              <li>drafting the article or revising it critically for important intellectual content</li>
              <li>final approval of the version to be published</li>
              <li>Agreement to be accountable for all aspects of the work in ensuring that questions related to the accuracy or integrity of any part of the work are appropriately investigated and resolved.</li>
            </ul>
            <p>All persons designated as authors should qualify for authorship, and all those whqualify should be listed.</p>
            <p>Each author should have participated sufficiently in the work to take public responsibility for appropriate portions of the content.<sup>1</sup></p>
            <p className='disclaimer'><sup>1</sup> International Committee of Medical Journal Editor’s Uniform Requirements for Manuscripts Submitted to Biomedical Journals</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Not included as an author? Were you plagiarized?'/>
          <Divider/>
          <CardText>
            <p>According to the Office of Research Integrity’s working definition, “ORI considers plagiarism to include both the theft or misappropriation of intellectual property and the substantial unattributed textual copying of another’s work. It does not include authorship or credit disputes."<sup>1</sup></p>
            <p>When researchers collaborate and participate jointly in a research project and later go their separate ways, it is not considered plagiarism if one of the researchers publishes or makes independent use of the jointly developed methods and results. The collaborative nature of scientists “supports a presumption of implied consent to use the products of the collaboration by any of the former collaborators."<sup>1</sup></p>
            <p>ORI considers this scenario to represent an authorship and credit dispute, but not a form of plagiarism.</p>
            <p className='disclaimer'><sup>1</sup> <a href='http://ori.dhs.gov/policies/plagarism.shtml'>http://ori.dhs.gov/policies/plagarism.shtml</a></p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Peer Review'/>
          <Divider/>
          <CardText>
            <p>The peer review process allows verification of research findings of both papers and research grants. Its true, ultimate goal is to validate scholarly work, research, and ideas through the review of many parties. It is important to the research community, its numerous sponsors, and the public at large to allow this process to take its time.</p>
            <p>All major funding agencies today require peer review of grant applications. To initiate the peer review process, the application goes before a committee of peers. Depending on the agency or sponsor, it may also go to external reviewers for their input as well. Click here to read examples of NIH's and NSF's peer review process.</p>
            <div className='col-md-6 text-box'>
              <h4>National Institutes of Health (NIH)</h4>
              <Divider/>
              <blockquote className='center-block'>
                The NIH has a double review: the application is first reviewed by a committee of peers and then, if approved at the first level, is reviewed further by an advisory council.
              </blockquote>
            </div>
            <div className='col-md-6 text-box'>
              <h4>The National Science Foundation (NSF)</h4>
              <Divider/>
              <blockquote className='center-block'>
                The NSF proposals are reviewed by a program officer and three to ten outside NSF experts. The program officer receives comments about the application by mail, panel meetings, or site visits. Senior staff at the NSF then review the recommendations of the program officer.  Finally, a division director decides whether an award is approved for funding.
              </blockquote>
            </div>
            <p>Peer review centers around the idea that peers with similar backgrounds and experience are best able to review a publication under consideration. The peer review takes place after the findings are submitted to a journal for publication. The journal forwards the findings to peer reviewers, who may be a mixture of internal and external resources. In many cases, the reviewer knows the identity of the author but the author does not know the identity of the reviewer. Based on the feedback from the peer reviewers, the journal editor will then determine  whether to accept the publication as is, accept the publication with modifications, or reject the publication.</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Key Attributes of Peer Review'/>
          <Divider/>
          <CardText>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Responsiveness</strong></div>
              <div className='col-md-10 def'>Reviewers and editors should be able to complete reviews in a timely fashion. If a reviewer or editor cannot meet deadlines, he or she should decline to perform the review or should inform the appropriate party.</div>
            </div>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Competence</strong></div>
              <div className='col-md-10 def'>Reviewers and editors should accept an assignment only if he or she has adequate expertise to provide an authoritative assessment.</div>
            </div>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Impartiality</strong></div>
              <div className='col-md-10 def'>Reviewers and editors should be as objective as possible in considering the article or application and ignore possible personal or professional bias.</div>
            </div>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Confidentiality</strong></div>
              <div className='col-md-10 def'>Material under review is privileged information and should not be shared with anyone outside the review process unless doing so is necessary and is approved by the editor or funding agency.</div>
            </div>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Exceptions to Confidentiality</strong></div>
              <div className='col-md-10 def'>If a reviewer or editor becomes aware, based upon reading a grant application or a submitted manuscript, that his or her (the reviewer or editor’s) own research may be unprofitable or a waste of resources, it is considered ethical to discontinue that line of work. The decision should be communicated to the individual requesting the review (e.g., editor, editor in chief).</div>
            </div>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Constructive Criticism</strong></div>
              <div className='col-md-10 def'>Reviewers and editors should acknowledge positive aspects of the material under review, assess negative aspects constructively, and indicate where improvements are needed.</div>
            </div>
            <div className='row define-term'>
              <div className='col-md-2 term'><strong>Responsibility to Science</strong></div>
              <div className='col-md-10 def'>It is the responsibility of members of the scientific profession to engage in peer review even though they usually do not get any financial compensation for the work, which can be difficult. The benefit to reviewers or editors is that they become more aware of the work of their peers.</div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Policies & Procedures'/>
          <Divider/>
          <CardText>
            <p>Recently the White House Office of Management and Budget (OMB) published peer review standards which indicate when peer review is required and what type of peer review processes are appropriate standards. This policy was made to make sure that when important scientific information is disseminated it is reviewed by qualified specialists.</p>
            <p>Almost all federal agencies in the U.S. government must comply with these standards before the agency can disseminate certain scientific findings that they funded.  All influential scientific information from federal agencies must be submitted to the peer review process before it can be made available to the public.</p>
            <div className='row'>
              <div className='col-md-6'>
                <div className='text-box'>
                  <h4>Scientific Information</h4>
                  <Divider/>
                  <p>Factual inputs, data, models, analyses, technical information, or scientific assessments related to such disciplines as the behavioral and social sciences, public health and medical sciences, life and earth sciences, engineering, and physical sciences<sup>1</sup>.</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='text-box'>
                  <h4>Influential Scientific Information</h4>
                  <Divider/>
                  <p>Scientific information the agency reasonably can determine will have or does have a clear and substantial impact on important public policies or  private sector decisions.  In the term “influential scientific information", the term “influential" should be interpreted consistently with OMB’s government-wide information quality guidelines and the information quality guidelines of the agency<sup>1</sup>.</p>
                </div>
              </div>
            </div>
            <p className='disclaimer'><sup>1</sup> Office of Management and Budget, Bulletin</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='The Case for Peer Review'/>
          <Divider/>
          <CardText>
            <p>So, what are the advantages and disadvantages of the peer review process?</p>
            <div className='row'>
              <div className='col-md-6'>
                <div className='text-box'>
                  <h4>Pros</h4>
                  <Divider/>
                  <p>Its critics say it is slow, misunderstood, and sometimes just not effective.  The critics aside, here are some of the reasons to have the peer review process:</p>
                  <ul>
                    <li>Reduce mistakes and errors</li>
                    <li>Identify weaknesses</li>
                    <li>Allows more work to be reviewed</li>
                    <li>Allows for a diversity of opinions</li>
                    <li>Protect the public from erroneous claims and discoveries</li>
                    <li>Optimize the best use of scarce resources</li>
                    <li>Discourages cronyism in funding and publishing</li>
                    <li>Allows for unbiased criticism</li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='text-box'>
                  <h4>Cons</h4>
                  <Divider/>
                  <p>The peer review process has many valid criticisms. It is a process that seeks to do its very best, but, sometimes fails to meet its mission.  Some of the criticisms and failures of the peer review process are:</p>
                  <ul>
                    <li>It is a slow process</li>
                    <li>Fraught with conflicts of interest</li>
                    <li>Cronyism in funding and publication decisions</li>
                    <li>Editors serve as gatekeepers</li>
                    <li>Suppresses dissent</li>
                    <li>An elite few control information</li>
                    <li>Cannot detect fraud by authors</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Case Study: Authorship and Peer Review'/>
          <Divider/>
          <CardText>
            <p>Dr. Cook and Dr. Bedell are prominent researchers from distinct fields. Dr. Cook is a noted social scientist who agrees to collaborate with Dr. Bedell, a top infectious diseases researcher. They set clear project objectives from the start and although they use different methodologies, their research study produces eye opening results. Although they had revealing results, Dr. Cook and Dr. Bedell decide to go their separate ways, and continue doing research in their specialties of social science and infectious disease.</p>
            <p>Years later, after Dr. Bedell completes research on AIDS, he publishes an article using findings from this study, as well as from the research he and Dr. Cook completed upwards of five years ago, without giving Dr. Cook any authorship credit. Dr. Cook reads the article and sues Dr. Bedell for plagiarism.</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Question'/>
          <Divider/>
          <CardText>
            <h4>Is this considered plagiarism?</h4>
            <RadioButtonGroup name='0'>
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'a')}
                value='a'
                label='A) Yes, Dr. Cook  should have given Dr. Bedell credit in the article as an author, or should have at least cited him.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'b')}
                value='b'
                label='B) No, when researchers collaborate and participate jointly in a research project and later go their separate ways, it is not considered plagiarism if one of the researchers publishes or makes independent use of the jointly developed methods and results.' />
            </RadioButtonGroup>
          </CardText>
        </Card>
      </SectionContainer>
    );
  }
}
