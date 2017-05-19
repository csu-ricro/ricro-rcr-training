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
          <CardTitle title='Forms of Collaboration'/>
          <Divider/>
          <CardText>
            <div className='row'>
              <div className='col-md-4'>
                <h4>Proximity</h4>
                <Divider/>
                <p>Collaboration may occur internally, across disciplines, across institutions, and/or around the globe.</p>
              </div>
              <div className='col-md-4'>
                <h4>Project size</h4>
                <Divider/>
                <p>Collaborative research ranges from one-on-one partnerships to multi-faceted projects involving numerous researchers from varied backgrounds and everything in between.</p>
              </div>
              <div className='col-md-4'>
                <h4>Institutional Partners</h4>
                <Divider/>
                <p>Collaborations may occur with researchers based at universities, nonprofits, or commercial entities.</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Trends and Public Policy'/>
          <Divider/>
          <CardText>
            <p>Science & engineering research has become increasingly collaborative. Collaboration is supported by policy initiatives.</p>
            <p>Between 1988 and 2005, the share of publications with authors from multiple institutions grew from 40% to 61%.</p>
            <ul>
              <li>Coauthored articles with only domestic institutions in the bylines grew from 32% to 41% of all articles.</li>
              <li>Articles with institutions from multiple countries—an indicator of international collaboration and the globalization of science—grew from 8% to 20%.<sup>1</sup></li>
            </ul>
            <p className='disclaimer'><sup>1</sup> Science and Engineering Indicators (2008)</p>
            <div className='row'>
              <div className='col-md-6'>
                  <h4>National Science Foundation <small>NSF</small></h4>
                  <Divider/>
                  <blockquote>
                    Discovery Goal: Investment Priority #1 –
                    <br/>
                    Promote transformational, multidisciplinary research.
                    <br/>
                    NSF will emphasize investigations that cross disciplinary boundaries and require a systems approach to address complex problems (e.g., the neural basis of behavior, natural hazards and grid technologies) at the frontiers of discovery.
                    <footer>National Science Foundation Strategic Plan (2006)</footer>
                  </blockquote>
              </div>
              <div className='col-md-6'>
                  <h4>National Institutes of Health <small>NIH</small></h4>
                  <Divider/>
                  <blockquote>
                    The scale and complexity of today's.. research problems increasingly demand that scientists move beyond the confines of their own discipline and explore new organizational models for team science… Many scientists will still continue to pursue individual research projects, but they too will be encouraged to make changes in the way they approach the scientific enterprise.
                    <footer>National Institutes of Health Roadmap for Research (2004)</footer>
                  </blockquote>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Institutional Structure'/>
          <Divider/>
          <CardText>
            <p>CSU has over 100 Centers, Institutes, and Other Special Units (CIOSUs) which are collaborations that extend beyond an academic unit. A complete list of CIOSUs can be found at: <a href='https://vpr.colostate.edu/centers-and-institutes/'>https://vpr.colostate.edu/centers-and-institutes/</a></p>
            <div className='row'>
              <div className='col-md-4'>
                <h4>Physical Sciences: Cooperative Institute for Research in the Atmosphere (CIRA)</h4>
                <Divider/>
                <p>A research partnership created to conduct research in the atmospheric sciences.</p>
                <p><a href='http://www.cira.colostate.edu/'>http://www.cira.colostate.edu/</a></p>
              </div>
              <div className='col-md-4'>
                <h4>Life Sciences: Animal Cancer Center (ACC)</h4>
                <Divider/>
                <p>The Colorado State University Animal Cancer Center (ACC) is the preeminent cancer center for animals offering the latest in diagnostics and treatment for all kinds of cancer in companion animals including surgery, chemotherapy and radiation therapy.</p>
                <p><a href='http://www.csuanimalcancercenter.org/'>http://www.csuanimalcancercenter.org/</a></p>
              </div>
              <div className='col-md-4'>
                <h4>Humanities: Center for Fair and Alternative Trade (CFAT)</h4>
                <Divider/>
                <p>A multidisciplinary research center created to provide objective and in-depth analysis of market-based social change.</p>
                <p><a href='http://www.cfat.colostate.edu/'>http://www.cfat.colostate.edu/</a></p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Project Management and Challenges – Individual and Institutional Differences'/>
          <Divider/>
          <CardText>
            <p>Working with a collaborator can introduce project management challenges.</p>
            <ul>
              <li>Management styles and techniques may differ among collaborators.</li>
              <li>Personality differences can lead to disagreements, frustrations and confusion.</li>
              <li>Culture, standards and norms may vary by researcher or discipline.</li>
              <li>Policies and procedures may differ among collaborating institutions.</li>
            </ul>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Project Management and Challenges – Key Discussion Topics'/>
          <Divider/>
          <CardText>
            <p>Up-front discussion of key project management areas will maximize efficiency and prevent conflicts.</p>
            <ul>
              <li>Roles and responsibilities for investigators and project team</li>
              <li>Authorship – ranking, writing and publishing</li>
              <li>Accountability – financial and personal</li>
              <li>Laboratory and equipment usage</li>
              <li>Data collection, dissemination and management use and retention</li>
              <li>Intellectual property including data, inventions, and publications</li>
              <li>Project conclusion</li>
            </ul>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Project Management Best Practices'/>
          <Divider/>
          <CardText>
            <p>Clear roles and communication are vital to successful collaboration.</p>
            <table className='table table-hover table-bordered'>
              <thead>
                <tr>
                  <th></th>
                  <th>Proposal & Setup</th>
                  <th>Project Execution</th>
                  <th>Publication & Closeout</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>PI & Co-Investigators</th>
                  <td>
                    <ul>
                      <li><strong>Establish timeline</strong> and milestones.</li>
                      <li><strong>Articulate role</strong> of each team member and establish a "Lead".</li>
                      <li><strong>Assign key tasks</strong>, such as submission of progress reports, financial management, and authorship.</li>
                      <li>Discuss <strong>intellectual property</strong>.</li>
                      <li>Execute formal <strong>collaboration agreements</strong> as needed.</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li><strong>Manage expectations</strong> for timelines.</li>
                      <li><strong>Explain methodologies</strong> and discuss any changes.</li>
                      <li><strong>Follow through</strong> on roles and responsibilities.</li>
                      <li><strong>Communicate</strong> openly about progress, concerns, and financial management.</li>
                      <li><strong>Amend or renew agreements</strong> as needed.</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li><strong>Publication</strong> - adhere to, or renegotiate, agreed-upon authorship roles.</li>
                      <li><strong>Intellectual Property</strong> - clarify ownership and disclose inventions to sponsor as appropriate.</li>
                      <li><strong>Financial management</strong> - process and report expenditure in a timely fashion, take responsibility for cost overruns as necessary.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Research Team</th>
                  <td>
                    <ul>
                      <li><strong>Communicate</strong> openly, listen.</li>
                      <li><strong>Understand role</strong> and responsibilities.</li>
                      <li>Understand and follow applicable institutional and federal <strong>policies and regulations</strong> for both on and off site project work.</li>
                      <li><strong>Disclose</strong> conflicts of interest.</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li><strong>Meet regularly</strong> for status updates, ask questions.</li>
                      <li><strong>Maintain ethical standards</strong> and adhere to federal and institutional policies and procedures.</li>
                      <li><strong>Adapt</strong> to new management styles and techniques.</li>
                      <li><strong>Be accountable</strong>.</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li><strong>Support</strong> closeout process as needed.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Institutional Resources'/>
          <Divider/>
          <CardText>
            <div className='row'>
              <div className='col-md-4'>
                <h4><a href='https://vpr.colostate.edu/OSP/'>Office of Sponsored Programs</a></h4>
                <Divider/>
                <ul>
                  <li>Reviews & submits proposal to sponsor.</li>
                  <li>Negotiates and accepts sponsored awards.</li>
                  <li>Issues subawards to collaborators.</li>
                  <li>May provide guidance regarding collaboration with industry partners.</li>
                  <li>Can advise on award terms and financial management.</li>
                </ul>
              </div>
              <div className='col-md-4'>
                <h4><a href='https://vpr.colostate.edu/RICRO/'>Research Integrity and Compliance Review Office (RICRO)</a></h4>
                <Divider/>
                <ul>
                  <li>Research Integrity and Compliance Review Office (RICRO)</li>
                  <li>Ensures institutional and project compliance with federal and institutional policies and procedures.</li>
                  <li>Collects assurances from each site for multisite projects.</li>
                  <li>Addresses any potential or known conflicts of interest.</li>
                  <li>Can advise on compliance issues such as human subjects involvement, animal care & use, and conflict of interest.</li>
                </ul>
              </div>
              <div className='col-md-4'>
                <h4><a href='http://csurf.org/'>Colorado State University Research Foundation (CSURF)</a></h4>
                <Divider/>
                <ul>
                  <li>Identifies and patents new inventions and copyright materials, including software, resulting from research projects.</li>
                  <li>With a collaborative research project, this becomes even more important and complex. </li>
                  <li>Tech Transfer can help develop the documentation necessary to protect intellectual property rights appropriately for all involved.</li>
                </ul>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Case Study: Collaborative Research'/>
          <Divider/>
          <CardText>
            <p>Dr. Yount, the leading brain cancer researcher in the country wants to collaborate with Dr. May, a renowned social scientist at CSU who specializes in stress, and the effects it has on individual’s health . Dr. Yount is excited about the opportunity of working side-by-side with Dr. May, but is worried that the NIH will be less likely to fund him if he collaborates with another individual who is not in his field.</p>
          </CardText>
        </Card>
        <Card className='section-container'>
          <CardTitle title='Question'/>
          <Divider/>
          <CardText>
            <h4>Do you think that Dr. Yount should be more worried about funding if he collaborates with another researcher? Would he be more likely to get funding if he applied for the grant without Dr. May?</h4>
            <RadioButtonGroup name='0'>
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'a')}
                value='a'
                label='A) Yes, the NIH is less likely to fund Dr. Yount and Dr. May if they collaborate because they would have to provide the doctors with more funding than if Dr. Yount applied solo.' />
              <RadioButton
                checkedIcon={getAnswer(this.state.answer0,'b')}
                value='b'
                label='B) No, the NIH prioritizes collaborative research and believes that research problems often demand that scientists move beyond the confines of their own discipline, and explore team science.' />
            </RadioButtonGroup>
          </CardText>
        </Card>
      </SectionContainer>
    );
  }
}
