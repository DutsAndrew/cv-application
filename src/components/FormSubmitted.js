import '../styles/FormSubmitted.css';
import React, { Component } from 'react';

class FormSubmitted extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='thank-you-message-container'>
        <p id='thank-you-message'> Thank you for submitting your application!</p>
        <p id='thank-you-message-pt-2'>~ We'll review it shortly ~</p>
      </div>
    )
  }
}

export default FormSubmitted;