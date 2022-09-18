import '../styles/general-information.css';
import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo } = this.props;
    console.log(generalInfo);

    return (
      <div id="general-information">
        <p>General Information:</p>
        <label className='general-info-name'>Name:</label>
        <input className='general-info' type="text"></input>
        <label className='general-info-email'>Email:</label>
        <input className='general-info' type="email"></input>
        <label className='general-info-phone'>Phone Number:</label>
        <input className='general-info' type="number"></input>
      </div>
    )
  }
}

export default GeneralInfo;