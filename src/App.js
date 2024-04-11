// import logo from './logo.svg';
import React, { useEffect } from 'react';
import PersonalInfo from './components/PersonalInfo';
import EducationalBackground from './components/EducationalBackground';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import './App.css';

function App() {
  useEffect(() => {
    const button = document.createElement('button');
    button.textContent = 'Back to Top';
    button.className = 'back-to-top-button'; // Apply the class
    document.body.appendChild(button);
    
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    return () => {
      button.removeEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    };
  }, []);

  return (
    <div>
      <nav class="navbar">
        <ul>
          <li><a href="#personal">Personal Info</a></li>
          <li><a href="#education">Educational Background</a></li>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
      <div className="section-container" id="personal"> {/* Added className */}
        <PersonalInfo />
      </div>
      <div className="section-container" id="education"> {/* Added className */}
        <EducationalBackground />
      </div>
      <div className="section-container" id="experience"> {/* Added className */}
        <WorkExperience />
      </div>
      <div className="section-container" id="projects"> {/* Added className */}
        <Projects />
      </div>
    </div>
  );
  
}

export default App;
