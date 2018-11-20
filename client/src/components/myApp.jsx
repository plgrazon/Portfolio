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

    return (
      <div>
        <section className="heading">
          <h3>Paolo Razon</h3>
          <h1>Software Engineer</h1>
        </section>
        <section className="bio-info">
          <h1>About me:</h1>
          <p>
            I’m passionate about solving real life problems through building
            applications. Technology and programming has captivated the whole of
            me, it lets me transform my ideas and channels my creativity into an
            application that many can benefit from.
          </p>
          <h1>Skills:</h1>
          <ul className="frontend">
            {frontEndSkills.map(skill => {
              return <li>{skill}</li>;
            })}
          </ul>
          <ul className="backend">
            <h4>Back-End</h4>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgresSQL</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>RESTful API Developemt</li>
          </ul>
          <ul className="testing">
            <h4>Testing</h4>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Enzyme</li>
            <li>Travis CI</li>
            <li>Artillery</li>
            <li>Loader</li>
          </ul>
          <ul className="Deployment">
            <h4>Deployment</h4>
            <li>Docker</li>
            <li>Nginx</li>
            <li>Amazon Web Services</li>
          </ul>
          <ul className="Development">
            <h4>Development</h4>
            <li>Git</li>
            <li>npm</li>
            <li>Webpack</li>
            <li>Babel</li>
          </ul>
          <ul className="Design">
            <h4>Design</h4>
            <li>Adobe CC</li>
            <li>Adobe Lightroom</li>
          </ul>
        </section>
        <section>
          <h1>Projects</h1>
          <h3>aBay</h3>
          <h3>Welp</h3>
        </section>
      </div>
    );
  }
}

export default App;
