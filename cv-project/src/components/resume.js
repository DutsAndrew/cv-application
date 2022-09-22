import '../styles/resume.css';
import React, { Component } from 'react';

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo, educationalExperience, practicalExperience, previousPage } = this.props;

    return (
      <div id='resume'>
        <div>
          <h1 id="general-header">General Info:</h1>
          <p id='general-name' className='resume-item'>{generalInfo.name}</p>
          <p id='general-email' className='resume-item'>{generalInfo.email}</p>
          <p id='general-phone' className='resume-item'>{generalInfo.phoneNumber}</p>
        </div>
        <div>
          <h1 id='education-header'>Education:</h1>
          <p id='education-school' className='resume-item'>{educationalExperience.schoolName}</p>
          <p id='education-degree' className='resume-item'>{educationalExperience.degree}</p>
          <p id='education-start-date' className='resume-item'>Start Date: {educationalExperience.startDate}</p>
          <p id='education-end-date' className='resume-item'>End Date: {educationalExperience.endDate}</p>
        </div>
        <div>
          <h1 id='experience-header'>Experience:</h1>
          <p id='practical-company' className='resume-item'>{practicalExperience.companyName}</p>
          <p id='practical-position' className='resume-item'>{practicalExperience.positionTitle}</p>
          <p id='practical-tasks' className='resume-item'>{practicalExperience.mainTasks}</p>
          <p id='practical-start-date' className='resume-item'>Start Date: {practicalExperience.startDate}</p>
          <p id='practical-end-date' className='resume-item'>End Date: {practicalExperience.endDate}</p>
        </div>
        <button id="previous-button" onClick={previousPage}>Previous Page</button>
      </div>
    )
  }
}

export default Resume;