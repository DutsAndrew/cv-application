import '../styles/ProgressBar.css';
import React from 'react';

const ProgressBar = props => {

  const { currentPage } = props;

    if (currentPage === 1) {
      return (
        <p id="progress-bar" className='show-one-third'>33%</p>
      )
    }

    if (currentPage === 2) {
      return (
        <p id="progress-bar" className='show-two-thirds'>66%</p>
      )
    }
    
    if (currentPage === 3) {
      return (
        <p id="progress-bar" className='show-three-thirds'>100%</p>
      )
    }
}

export default ProgressBar;