import style from '../styles/myApp.css';
import React, { Component } from 'react';

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
        <section className={style['bio-info']}>
          <img
            className={style['bio-photo']}
            src="../../static/profilePhoto copy.jpg"
          />
          <div className={style['bio-aboutme']}>
            <h1>About me:</h1>
            <p>
              I’m passionate about solving real life problems through building
              applications. Technology and programming has captivated the whole
              of me, it lets me transform my ideas and channels my creativity
              into an application that many can benefit from.
            </p>
          </div>
        </section>
        <section className={style.skills}>
          <h1>Skills:</h1>
          <ul className={style['skills-frontend']}>
            <h4>Front-End</h4>
            {frontEndSkills.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <ul className={style['skills-backend']}>
            <h4>Back-End</h4>
            {backEndSkills.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <ul className={style['skills-testing']}>
            <h4>Testing</h4>
            {testing.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <ul className={style['skills-deployment']}>
            <h4>Deployment</h4>
            {deploy.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <ul className={style['skills-development']}>
            <h4>Development</h4>
            {dev.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <ul className={style['skills-design']}>
            <h4>Design</h4>
            {design.map(skill => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
        </section>
        <section className={style['projects']}>
          <h1>Projects</h1>
          <h3>aBay</h3>
          <h3>Welp</h3>
        </section>
        <section className={style['experience']}>
          <h1>Experience</h1>
          <ul>
            <li>Trilogy</li>
            <li>Metro Remittance</li>
            <li>Universal Robina Corporation</li>
          </ul>
        </section>
        <section className={style['education']}>
          <h1>Education</h1>
          <ul>
            <li>Hack Reactor</li>
            <li>De La Salle Univeristy</li>
          </ul>
        </section>
        <section className={style['contact-info']}>
          <h1>Get in touch</h1>
        </section>
      </div>
    );
  }
}

export default App;
