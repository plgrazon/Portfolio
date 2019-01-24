import style from '../styles/App.css';
import React, { Component } from 'react';

// Component
import NavBar from './NavBar.jsx';
import BioInfo from './BioInfo.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import ContactInfo from './ContactInfo.jsx';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Images
import profilePhoto from '../static/profilePhotoSquare.jpg';
import abayPhoto from '../static/abayPhoto.png';
import welpPhoto from '../static/welpPhoto.png';

const photos = { profilePhoto, abayPhoto, welpPhoto };
class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    for (let src in photos) {
      const img = new Image();
      img.src = photos[src];
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <BioInfo profilePhoto={profilePhoto} />
        <Skills />
        <Projects abayPhoto={abayPhoto} welpPhoto={welpPhoto} />
        <Experience />
        <Education />
        <ContactInfo />
      </div>
    );
  }
}

export default App;
