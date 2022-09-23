import '../styles/Resume.css';
import React, { Component } from 'react';

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo, educationalExperience, practicalExperience, previousPage, nextPage } = this.props;

    return (
      <div id='resume'>
        <div id='general-resume-container'>
          <h1 id="general-resume-header">General Info:</h1>
          <p id='general-name' className='resume-item'>Name: {generalInfo.name}</p>
          <p id='general-email' className='resume-item'>Email: {generalInfo.email}</p>
          <p id='general-phone' className='resume-item'>Phone: {generalInfo.phoneNumber}</p>
        </div>
        <div id='education-resume-container'>
          <h1 id='education-resume-header'>Education:</h1>
          <p id='education-school' className='resume-item'>School: {educationalExperience.schoolName}</p>
          <p id='education-degree' className='resume-item'>Degree: {educationalExperience.degree}</p>
          <p id='education-start-date' className='resume-item'>Start Date: {educationalExperience.startDate}</p>
          <p id='education-end-date' className='resume-item'>End Date: {educationalExperience.endDate}</p>
        </div>
        <div id='experience-resume-container'>
          <h1 id='experience-resume-header'>Experience:</h1>
          <p id='practical-company' className='resume-item'>Current Company: {practicalExperience.companyName}</p>
          <p id='practical-position' className='resume-item'>Current Position: {practicalExperience.positionTitle}</p>
          <p id='practical-tasks' className='resume-item'>Current Job Tasks: {practicalExperience.mainTasks}</p>
          <p id='practical-start-date' className='resume-item'>Start Date: {practicalExperience.startDate}</p>
          <p id='practical-end-date' className='resume-item'>End Date: {practicalExperience.endDate}</p>
        </div>
        <div id='button-resume-container'>
          <button id="previous-button" onClick={previousPage}>Previous Page</button>
          <button id='final-submit-button' onClick={nextPage}>Submit Application</button>
        </div>
      </div>
    )
  }
}

export default Resume;