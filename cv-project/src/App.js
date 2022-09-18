import React, { Component } from 'react';
import './styles/App.css';
import EducationalExperience from './components/educational-experience';
import GeneralInfo from './components/general-info';
import PracticalExperience from './components/practical-experience';

class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInfo: {
        name: '',
        email: '',
        phoneNumber: null,
      },
      EducationalExperience: {
        schoolName: '',
        degree: '',
        startDate: null,
        endDate: null,
      },
      PracticalExperience: {
        companyName: '',
        positionTitle: '',
        JobRole: '',
        hireDate: '',
        endEmployment: '',
      }
    }
  }

  handleChange = (e) => {
    console.log(e);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  render() {
    const { generalInfo, educationalExperience, practicalExperience } = this.state;

    return (
      <div>
        <div id="header">Hello World!</div>
        <form id="cv">
          <GeneralInfo generalInfo={generalInfo} />
          <EducationalExperience educationalExperience={educationalExperience} />
          <PracticalExperience practicalExperience={practicalExperience} />
          <button id="submit-button" type="submit" onClick={this.onSubmit} >Submit Application</button>
        </form>
      </div>
    );
  }
}

export default App;
