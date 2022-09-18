import '../styles/practical-experience.css';
import React, { Component } from 'react';

class PracticalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="practical-experience">
        <p>Most Recent Work:</p>
        <label className='practical-exp'>Company Name:</label>
        <input type='text' className='practical-exp'></input>
        <label className='practical-exp'>Position Name:</label>
        <input type='text' className='practical-exp'></input>
        <label className='practical-exp'>Main Tasks of Role:</label>
        <textarea type='text-area' className='practical-exp' rows="5" cols="100"></textarea>
        <label className='practical-exp'>Start Employment:</label>
        <input type='date' className='practical-exp'></input>
        <label className='practical-exp'>End Employment:</label>
        <input type='date' className='practical-exp'></input>
      </div>
    )
  }
}

export default PracticalExperience;