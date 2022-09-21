import '../styles/resume.css';
import React, { Component } from 'react';

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo, educationalExperience, practicalExperience, previousPage } = this.props;

    return (
      <div>
        <p>{generalInfo.name}</p>
      </div>
    )
  }
}

export default Resume;