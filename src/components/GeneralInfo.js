import '../styles/GeneralInformation.css';
import React from 'react';

const GeneralInfo = props => {

  const { generalInfo, nextPage } = props;

  return (
    <div id="general-information">
      <p id="general-header">General Information:</p>
      <form id="cv-general">
        <label className='general-info-name'>Name:</label>
        <input id="name-input" className='general-info' type="text" placeholder={generalInfo.name} ></input>
        <label className='general-info-email'>Email:</label>
        <input id="email-input" className='general-info' type="email" placeholder={generalInfo.email} ></input>
        <label className='general-info-phone'>Phone Number:</label>
        <input id="phone-input" className='general-info' type="number" placeholder={generalInfo.phoneNumber} ></input>
      </form>
      <button id="next-button" onClick={nextPage} >Next Page</button>
    </div>
  );

}

export default GeneralInfo;