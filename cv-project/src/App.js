import React, { Component } from 'react';
import './styles/App.css';
import EducationalExperience from './components/educational-experience';
import GeneralInfo from './components/general-info';
import PracticalExperience from './components/practical-experience';
import ProgressBar from './components/progress-bar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInfo: {
        name: '',
        email: '',
        phoneNumber: null,
      },
      educationalExperience: {
        schoolName: '',
        degree: '',
        startDate: null,
        endDate: null,
      },
      practicalExperience: {
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        startDate: '',
        endDate: '',
      },
      currentPage: 1,
    }
  }

  handleGeneralInfoChange = (e) => {
    if (e.target.id === 'name-input') {
      this.setState({
        generalInfo: {
          name: e.target.value,
        }
      });
      console.log(this.state.generalInfo.name);
      return;
    }

    if (e.target.id === 'email-input') {
      this.setState({
        generalInfo: {
          email: e.target.value,
        }
      });
      console.log(this.state.generalInfo.email);
      return;
    }

    if (e.target.id === 'phone-input') {
      this.setState({
        generalInfo: {
          phoneNumber: e.target.value,
        }
      });
      console.log(this.state.generalInfo.phoneNumber);
      return;
    }
  }

  handleEducationChange = (e) => {
    if (e.target.id === 'school-input') {
      this.setState({
        educationalExperience: {
          schoolName: e.target.value,
        }
      });
      return;
    }

    if (e.target.id === 'degree-input') {
      this.setState({
        educationalExperience: {
          degree: e.target.value,
        }
      });
      return;
    }

    if (e.target.id === 'start-studies-input') {
      this.setState({
        educationalExperience: {
          startDate: e.target.value,
        }
      });
      return;
    }

    if (e.target.id === 'end-studies-input') {
      this.setState({
        educationalExperience: {
          endDate: e.target.value,
        }
      });
      return;
    }
  }

  handlePracticalExperienceChange = (e) => {
    console.log(e.target.id);
    if (e.target.id === 'company-input') {
      this.setState({
        practicalExperience: {
          companyName: e.target.value,
        }
      });
      return;
    }

    if (e.target.id === 'position-input') {
      this.setState({
        practicalExperience: {
          positionTitle: e.target.value,
        }
      });
      return
    }

    if (e.target.id === 'main-tasks-input') {
      this.setState({
        practicalExperience: {
          mainTasks: e.target.value,
        }
      });
      return;
    }

    if (e.target.id === 'start-employment-input') {
      this.setState({
        practicalExperience: {
          startDate: e.target.value,
        }
      });
      return;
    }

    if (e.target.id === 'end-employment-input') {
      this.setState({
        practicalExperience: {
          endDate: e.target.value,
        }
      });
      return;
    }
  }

  previousPage = (e) => {
    const currentPage = this.state.currentPage;

    if (currentPage === 3) {
      this.setState({
        currentPage: 2,
      });
      return;
    }

    if (currentPage === 2) {
      this.setState({
        currentPage: 1,
      });
      return;
    }
  }

  nextPage = (e) => {
    const currentPage = this.state.currentPage;

    if (currentPage === 1) {
      this.setState({
        currentPage: 2,
      });
      return;
    }

    if (currentPage === 2) {
      this.setState({
        currentPage: 3,
      })
      return;
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  render() {
    const { generalInfo, educationalExperience, practicalExperience, currentPage } = this.state;

    if (currentPage === 1) {
      return (
        <div>
          <ProgressBar currentPage={this.state.currentPage} />
          <GeneralInfo
            generalInfo={generalInfo}
            handleChange={this.handleGeneralInfoChange}
            nextPage={this.nextPage}
          />
        </div>
      );
    }

    if (currentPage === 2) {
      return (
        <div>
          <ProgressBar currentPage={this.state.currentPage} />
          <EducationalExperience
            educationalExperience={educationalExperience}
            handleChange={this.handleEducationChange}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
      );
    }

    if (currentPage === 3) {
      return (
        <div>
          <ProgressBar currentPage={this.state.currentPage} />
          <PracticalExperience
            practicalExperience={practicalExperience}
            handleChange={this.handlePracticalExperienceChange}
            previousPage={this.previousPage}
            submitForm={this.onSubmit}
          />
        </div>
      );
    }
    
  }
}

export default App;
