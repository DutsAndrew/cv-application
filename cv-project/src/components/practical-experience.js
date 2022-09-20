import '../styles/practical-experience.css';
import React, { Component } from 'react';

class PracticalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo, handleChange, previousPage, submitForm } = this.props;

    return (
      <div id="practical-experience">
        <p id="experience-header">Most Recent Work:</p>
        <form id="cv-experience">
          <label className='practical-label'>Company Name:</label>
          <input type='text' id="company-input" className='practical-exp' onChange={handleChange} ></input>
          <label className='practical-label'>Position Name:</label>
          <input type='text' id="position-input" className='practical-exp' onChange={handleChange} ></input>
          <label className='practical-label'>Main Tasks of Role:</label>
          <textarea type="text" id="main-tasks-input" className='practical-exp' onChange={handleChange} ></textarea>
          <label className='practical-label'>Start Employment:</label>
          <input type='date' id="start-employment-input" className='practical-exp' onChange={handleChange} ></input>
          <label className='practical-label'>End Employment:</label>
          <input type='date' id="end-employment-input" className='practical-exp' onChange={handleChange} ></input>
        </form>
        <button id="previous-button" onClick={previousPage} >Previous Page</button>
        <button id="submit-button" type="submit" onClick={submitForm} >Submit Application</button>
      </div>
    );
  }
}

export default PracticalExperience;