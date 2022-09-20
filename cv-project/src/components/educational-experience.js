import '../styles/educational-experience.css';
import React, { Component } from 'react';

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { educationalExperience, handleChange, previousPage, nextPage } = this.props;

    return (
      <div id='educational-experience'>
        <p id="education-header">Educational Experience:</p>
        <form id="cv-education">
          <label className='education-school'>School Name:</label>
          <input type='text' id="school-input" className='educational-exp' onChange={handleChange} ></input>
          <label className='education-degree'>Degree Name:</label>
          <input type='text' id="degree-input" className='educational-exp' onChange={handleChange} ></input>
          <label className='education-start-studies'>Start of Studies:</label>
          <input type='date' id="start-studies-input" className='educational-exp' onChange={handleChange} ></input>
          <label className='education-end-studies'>End of Studies:</label>
          <input type='date' id="end-studies-input" className='educational-exp' onChange={handleChange} ></input>
        </form>
        <button id="previous-button" onClick={previousPage} >Previous Page</button>
        <button id="next-button" type="submit" onClick={nextPage} >Next page</button>
      </div>
    )
  }
}

export default EducationalExperience;