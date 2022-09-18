import './styles/App.css';
import EducationalExperience from './components/educational-experience';
import GeneralInfo from './components/general-info';
import PracticalExperience from './components/practical-experience';

function App() {
  return (
    <div>
      <div id="header">Hello World!</div>
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
}

export default App;
