import style from '../styles/myApp.css';
import React, { Component } from 'react';

import profilePhoto from '../static/profilePhoto.jpg';
import abayPhoto from '../static/abayPhoto.png';
class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let frontEndSkills = [
      'JavaScript',
      'React',
      'HTML5',
      'CSS3',
      'CSS Modules',
      'Styled Components'
    ];
    let backEndSkills = [
      'Node.js',
      'Express',
      'PostgresSQL',
      'MongoDB',
      'MySQL',
      'RESTful API Development'
    ];
    let testing = [
      'Mocha',
      'Chai',
      'Enzyme',
      'Travis CI',
      'Artillery',
      'Loader'
    ];
    let deploy = ['Docker', 'Nginx', 'Amazon Web Services'];
    let dev = ['Git', 'npm', 'Webpack', 'Babel'];
    let design = ['Adobe CC', 'Adobe Lightroom'];

    return (
      <div>
        <div className={style.heading}>
          <h3>Paolo Razon</h3>
          <h1>Software Engineer</h1>
        </div>
        <section className={style.bioInfo}>
          <img className={style.bioPhoto} src={profilePhoto} />
          <div className={style.bioAboutme}>
            <h1>About me:</h1>
            <p>
              I’m passionate about solving real life problems through building
              applications. Technology and programming let me transform my ideas
              and channels my creativity into an application that many can
              benefit from.
            </p>
          </div>
        </section>
        <section className={style.skills}>
          <h1 className={style.skillsHeader}>Skills:</h1>
          <ul className={style.skillsFrontend}>
            <h4>Front-End</h4>
            {/* <p>
              JavaScript, React, HTML5, CSS3, CSS Modules, Styled Components
            </p> */}
            {/* as a list item */}
            {frontEndSkills.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <ul className={style.skillsBackend}>
            <h4>Back-End</h4>
            {/* <p>
              Node.js, Express, PostgresSQL, MongoDB, MySQL, RESTful API
              Development
            </p> */}
            {/* as a list item */}
            {backEndSkills.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <ul className={style.skillsTesting}>
            <h4>Testing</h4>
            {/* <p>Mocha, Chai, Enzyme, Travis CI, Artillery, Loader</p> */}
            {/* as a list item */}
            {testing.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <ul className={style.skillsDeployment}>
            <h4>Deployment</h4>
            {/* <p>Docker, Nginx, Amazon Web Services</p> */}
            {/* as a list item */}
            {deploy.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <ul className={style.skillsDevelopment}>
            <h4>Development</h4>
            {/* <p>Git, npm, Webpack, Babel</p> */}
            {/* as a list item */}
            {dev.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <ul className={style.skillsDesign}>
            <h4>Design</h4>
            {/* <p>Adobe CC, Adobe Lightroom</p> */}
            {/* as a list item */}
            {design.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
        </section>
        <section className={style.projects}>
          <h1 className={style.projectsHeader}>Projects</h1>
          <div className={style.abayProjectHeader}>
            <h3>aBay</h3>
            <img className={style.abayPhoto} src={abayPhoto} />
          </div>
          <div className={style.welpProjectHeader}>
            <h3>Welp</h3>
          </div>
        </section>
        <section className={style.experience}>
          <h1>Experience</h1>
          <ul>
            <li>Trilogy</li>
            <li>Metro Remittance</li>
            <li>Universal Robina Corporation</li>
          </ul>
        </section>
        <section className={style.education}>
          <h1>Education</h1>
          <ul>
            <li>Hack Reactor</li>
            <li>De La Salle Univeristy</li>
          </ul>
        </section>
        <section className={style.contactInfo}>
          <h1>Get in touch</h1>
        </section>
      </div>
    );
  }
}

export default App;
