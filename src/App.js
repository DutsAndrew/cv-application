import React, { useState, useEffect } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import ProgressBar from './components/ProgressBar';
import Resume from './components/Resume';
import FormSubmitted from './components/FormSubmitted';

const App = () => {

  const [generalInfo, setGeneralInfo] = useState({
    generalInfo: {
      name: '',
      email: '',
      phoneNumber: null,
    }
  });

  const [educationalExperience, setEducationalExperience] = useState({
    educationalExperience: {
      schoolName: '',
      degree: '',
      startDate: null,
      endDate: null,
    }
  });

  const [practicalExperience, setPracticalExperience] = useState({
    practicalExperience: {
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      startDate: '',
      endDate: '',
    }
  });

  const [currentPage, setCurrentPage] = useState({
    page: 1,
  });

  const previousPage = () => {

    if (currentPage.page === 4) {
      setCurrentPage({
        page: 3,
      });
      return;
    }

    if (currentPage.page === 3) {
      setCurrentPage({
        page: 2,
      });
      return;
    }

    if (currentPage.page === 2) {
      setCurrentPage({
        page: 1,
      });
      return;
    }
  }

  const nextPage = () => {

    if (currentPage.page === 1) {
      const inputName = document.getElementById('name-input').value;
      const inputEmail = document.getElementById('email-input').value;
      const inputPhone = document.getElementById('phone-input').value;

      setCurrentPage({
        page: 2,
      });

      setGeneralInfo({
          name: inputName,
          email: inputEmail,
          phoneNumber: inputPhone,
      });

      return;
    }

    if (currentPage.page === 2) {
      const schoolInput = document.getElementById('school-input').value;
      const degreeInput = document.getElementById('degree-input').value;
      const startDateInput = document.getElementById('start-studies-input').value;
      const endDateInput = document.getElementById('end-studies-input').value;

      setCurrentPage({
        page: 3,
      });

      setEducationalExperience({
          schoolName: schoolInput,
          degree: degreeInput,
          startDate: startDateInput,
          endDate: endDateInput,
      });

      return;
    }

    if (currentPage.page === 3) {
      const companyInput = document.getElementById('company-input').value;
      const positionInput = document.getElementById('position-input').value;
      const mainTasksInput = document.getElementById('main-tasks-input').value;
      const startDateInput = document.getElementById('start-employment-input').value;
      const endDateInput = document.getElementById('end-employment-input').value;

      setCurrentPage({
        page: 4,
      });

      setPracticalExperience({
          companyName: companyInput,
          positionTitle: positionInput,
          mainTasks: mainTasksInput,
          startDate: startDateInput,
          endDate: endDateInput,
      });

      return;
    }

    if (currentPage.page === 4) {
      setCurrentPage({
        page: 5,
      });

      return;
    }
  }

  if (currentPage.page === 1) {
    return (
      <div>
        <ProgressBar currentPage={currentPage.page} />
        <GeneralInfo
          generalInfo={generalInfo}
          nextPage={nextPage}
        />
      </div>
    );
  }

  if (currentPage.page === 2) {
    return (
      <div>
        <ProgressBar currentPage={currentPage.page} />
        <EducationalExperience
          educationalExperience={educationalExperience}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    );
  }

  if (currentPage.page === 3) {
    return (
      <div>
        <ProgressBar currentPage={currentPage.page} />
        <PracticalExperience
          practicalExperience={practicalExperience}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    );
  }
  
  if (currentPage.page === 4) {
    return (
      <div>
        <Resume 
          generalInfo={generalInfo}
          educationalExperience={educationalExperience}
          practicalExperience={practicalExperience}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    )
  }

  if (currentPage.page === 5) {
    return (
      <FormSubmitted />
    )
  }
}

export default App;
