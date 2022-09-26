import '../styles/FormSubmitted.css';
import React from 'react';

const FormSubmitted = props => {

  return (
    <div id='thank-you-message-container'>
      <p id='thank-you-message'> Thank you for submitting your application!</p>
      <p id='thank-you-message-pt-2'>~ We'll review it shortly ~</p>
    </div>
  )

}

export default FormSubmitted;