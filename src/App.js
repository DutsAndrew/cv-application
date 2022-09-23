import React, { Component } from 'react';
import './styles/App.css';
import EducationalExperience from './components/EducationalExperience';
import GeneralInfo from './components/GeneralInfo';
import PracticalExperience from './components/PracticalExperience';
import ProgressBar from './components/ProgressBar';
import Resume from './components/Resume';
import FormSubmitted from './components/FormSubmitted';

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

  previousPage = (e) => {
    const currentPage = this.state.currentPage;

    if (currentPage === 4) {
      this.setState({
        currentPage: 3,
      });
      return;
    }

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
      const inputName = document.getElementById('name-input').value;
      const inputEmail = document.getElementById('email-input').value;
      const inputPhone = document.getElementById('phone-input').value;

      this.setState({
        currentPage: 2,
        generalInfo: {
          name: inputName,
          email: inputEmail,
          phoneNumber: inputPhone,
        }
      });
      return;
    }

    if (currentPage === 2) {
      const schoolInput = document.getElementById('school-input').value;
      const degreeInput = document.getElementById('degree-input').value;
      const startDateInput = document.getElementById('start-studies-input').value;
      const endDateInput = document.getElementById('end-studies-input').value;

      this.setState({
        currentPage: 3,
        educationalExperience: {
          schoolName: schoolInput,
          degree: degreeInput,
          startDate: startDateInput,
          endDate: endDateInput,
        }
      })
      return;
    }

    if (currentPage === 3) {
      const companyInput = document.getElementById('company-input').value;
      const positionInput = document.getElementById('position-input').value;
      const mainTasksInput = document.getElementById('main-tasks-input').value;
      const startDateInput = document.getElementById('start-employment-input').value;
      const endDateInput = document.getElementById('end-employment-input').value;

      this.setState({
        currentPage: 4,
        practicalExperience: {
          companyName: companyInput,
          positionTitle: positionInput,
          mainTasks: mainTasksInput,
          startDate: startDateInput,
          endDate: endDateInput,
        }
      })
      return;
    }

    if (currentPage === 4) {
      this.setState({
        currentPage: 5,
      });
      return;
    }
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
            nextPage={this.nextPage}
          />
        </div>
      );
    }
    
    if (currentPage === 4) {
      return (
        <div>
          <Resume 
            generalInfo={generalInfo}
            educationalExperience={educationalExperience}
            practicalExperience={practicalExperience}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
      )
    }

    if (currentPage === 5) {
      return (
        <FormSubmitted />
      )
    }
  }
}

export default App;
