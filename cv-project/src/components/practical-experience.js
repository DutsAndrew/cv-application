import '../styles/practical-experience.css';
import React, { Component } from 'react';

class PracticalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { practicalExperience, handleChange, previousPage, nextPage } = this.props;

    return (
      <div id="practical-experience">
        <p id="experience-header">Most Recent Work:</p>
        <form id="cv-experience">
          <label className='practical-label'>Company Name:</label>
          <input type='text' id="company-input" className='practical-exp' placeholder={practicalExperience.companyName} onChange={handleChange} ></input>
          <label className='practical-label'>Position Name:</label>
          <input type='text' id="position-input" className='practical-exp' placeholder={practicalExperience.positionTitle} onChange={handleChange} ></input>
          <label className='practical-label'>Main Tasks of Role:</label>
          <textarea type="text" id="main-tasks-input" className='practical-exp' placeholder={practicalExperience.mainTasks} onChange={handleChange} ></textarea>
          <label className='practical-label'>Start Employment:</label>
          <input type='date' id="start-employment-input" className='practical-exp' placeholder={practicalExperience.startDate} onChange={handleChange} ></input>
          <label className='practical-label'>End Employment:</label>
          <input type='date' id="end-employment-input" className='practical-exp' placeholder={practicalExperience.endDate} onChange={handleChange} ></input>
        </form>
        <button id="previous-button" onClick={previousPage} >Previous Page</button>
        <button id="next-button" type="submit" onClick={nextPage} >Submit Application</button>
      </div>
    );
  }
}

export default PracticalExperience;