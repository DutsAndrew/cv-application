import '../styles/EducationalExperience.css';
import React from 'react';

const EducationalExperience = props => {

    const { educationalExperience, previousPage, nextPage } = props;

    return (
      <div id='educational-experience'>
        <p id="education-header">Educational Experience:</p>
        <form id="cv-education">
          <label className='education-school'>School Name:</label>
          <input type='text' id="school-input" className='educational-exp' placeholder={educationalExperience.schoolName} ></input>
          <label className='education-degree'>Degree Name:</label>
          <input type='text' id="degree-input" className='educational-exp' placeholder={educationalExperience.degree} ></input>
          <label className='education-start-studies'>Start of Studies:</label>
          <input type='date' id="start-studies-input" className='educational-exp' placeholder={educationalExperience.startDate} ></input>
          <label className='education-end-studies'>End of Studies:</label>
          <input type='date' id="end-studies-input" className='educational-exp' placeholder={educationalExperience.endDate} ></input>
        </form>
        <button id="previous-button" onClick={previousPage} >Previous Page</button>
        <button id="next-button" type="submit" onClick={nextPage} >Next page</button>
      </div>
    )
}

export default EducationalExperience;