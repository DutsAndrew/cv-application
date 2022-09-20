import '../styles/progress-bar.css';
import React, { Component } from 'react';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentPage } = this.props;

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
}

export default ProgressBar;