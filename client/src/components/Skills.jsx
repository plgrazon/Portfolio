import style from '../styles/Skills.css';
import React, { Component } from 'react';

const Skills = () => {
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
  let testing = ['Mocha', 'Chai', 'Enzyme', 'Travis CI', 'Artillery', 'Loader'];
  let deploy = ['Docker', 'Nginx', 'Amazon Web Services'];
  let dev = ['Git', 'npm', 'Webpack', 'Babel'];
  let design = ['Adobe CC', 'Adobe Lightroom'];

  let idSkills = style.skills;

  return (
    <section className={style.skills} id="skills">
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
  );
};

export default Skills;
