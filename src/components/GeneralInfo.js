import '../styles/GeneralInformation.css';
import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo, handleChange, nextPage } = this.props;

    return (
      <div id="general-information">
        <p id="general-header">General Information:</p>
        <form id="cv-general">
          <label className='general-info-name'>Name:</label>
          <input id="name-input" className='general-info' type="text" placeholder={generalInfo.name} onInput={handleChange} ></input>
          <label className='general-info-email'>Email:</label>
          <input id="email-input" className='general-info' type="email" placeholder={generalInfo.email} onInput={handleChange} ></input>
          <label className='general-info-phone'>Phone Number:</label>
          <input id="phone-input" className='general-info' type="number" placeholder={generalInfo.phoneNumber} onInput={handleChange} ></input>
        </form>
        <button id="next-button" onClick={nextPage} >Next Page</button>
      </div>
    );
  }
}

export default GeneralInfo;