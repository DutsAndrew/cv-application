import '../styles/educational-experience.css';
import React, { Component } from 'react';

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='educational-experience'>
        <p>Educational Experience:</p>
        <label className='educational-exp'>School Name:</label>
        <input type='text' className='educational-exp'></input>
        <label className='educational-exp'>Degree Name:</label>
        <input type='text' className='educational-exp'></input>
        <label className='educational-exp'>Start of Studies:</label>
        <input type='date' className='educational-exp'></input>
        <label className='educational-exp'>End of Studies:</label>
        <input type='date' className='educational-exp'></input>
      </div>
    )
  }
}

export default EducationalExperience;