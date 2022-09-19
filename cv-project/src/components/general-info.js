import '../styles/general-information.css';
import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo, handleChange } = this.props;

    return (
      <div id="general-information">
        <p>General Information:</p>
        <label className='general-info-name'>Name:</label>
        <input id="name-input" className='general-info' type="text" onChange={handleChange} ></input>
        <label className='general-info-email'>Email:</label>
        <input id="email-input" className='general-info' type="email" onChange={handleChange} ></input>
        <label className='general-info-phone'>Phone Number:</label>
        <input id="phone-input" className='general-info' type="number" onChange={handleChange} ></input>
      </div>
    )
  }
}

export default GeneralInfo;