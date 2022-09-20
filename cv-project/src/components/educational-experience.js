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
          <label className='educational-exp'>School Name:</label>
          <input type='text' id="school-input" className='educational-exp' onChange={handleChange} ></input>
          <label className='educational-exp'>Degree Name:</label>
          <input type='text' id="degree-input" className='educational-exp' onChange={handleChange} ></input>
          <label className='educational-exp'>Start of Studies:</label>
          <input type='date' id="start-studies-input" className='educational-exp' onChange={handleChange} ></input>
          <label className='educational-exp'>End of Studies:</label>
          <input type='date' id="end-studies-input" className='educational-exp' onChange={handleChange} ></input>
        </form>
        <button className="next-button" onClick={previousPage} >Previous Page</button>
        <button className="next-button" type="submit" onClick={nextPage} >Next page</button>
      </div>
    )
  }
}

export default EducationalExperience;