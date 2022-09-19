import '../styles/educational-experience.css';
import React, { Component } from 'react';

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { educationalExperience, handleChange } = this.props;

    return (
      <div id='educational-experience'>
        <p>Educational Experience:</p>
        <label className='educational-exp'>School Name:</label>
        <input type='text' id="school-input" className='educational-exp' onChange={handleChange} ></input>
        <label className='educational-exp'>Degree Name:</label>
        <input type='text' id="degree-input" className='educational-exp' onChange={handleChange} ></input>
        <label className='educational-exp'>Start of Studies:</label>
        <input type='date' id="start-studies-input" className='educational-exp' onChange={handleChange} ></input>
        <label className='educational-exp'>End of Studies:</label>
        <input type='date' id="end-studies-input" className='educational-exp' onChange={handleChange} ></input>
      </div>
    )
  }
}

export default EducationalExperience;