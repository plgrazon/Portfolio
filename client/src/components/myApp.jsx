import style from '../styles/myApp.css';
import React, { Component } from 'react';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Images
import profilePhoto from '../static/profilePhotoSquare.jpg';
import abayPhoto from '../static/abayPhoto.png';
import welpPhoto from '../static/welpPhoto.png';
import testingPhoto from '../static/testing.png';

const photos = { profilePhoto, abayPhoto, welpPhoto, testingPhoto };
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

    let idSkills = style.skills;

    return (
      <div>
        <nav className={style.navBar}>
          <a className={style.navLink} href="#bioInfo">
            About
          </a>
          <a className={style.navLink} href="#skills">
            Skills
          </a>
          <a className={style.navLink} href="#projects">
            Projects
          </a>
          <a className={style.navLink} href="#contactInfo">
            Contact
          </a>
        </nav>
        <div className={style.heading}>
          <h1>Paolo Razon</h1>
          <h3>Software Engineer</h3>
        </div>
        <section className={style.bioInfo} id="bioInfo">
          <img className={style.bioPhoto} src={profilePhoto} />
          <div className={style.bioAboutme}>
            <h1>About me:</h1>
            <p className={style.bioParagraph}>
              I’m passionate about solving real life problems through building
              applications. Programming lets me transform my ideas and channels
              my creativity into an application that many can benefit from.
            </p>
          </div>
        </section>
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
        <section className={style.projects} id="projects">
          <h1 className={style.projectsHeader}>Projects</h1>
          <div className={style.abayProject}>
            <h3>aBay</h3>
            <img className={style.abayPhoto} src={abayPhoto} />
            <p className={style.abaySkills}>
              React | NodeJS | Express | Docker | AWS EC2 | AWS S3
            </p>
            <p className={style.abayParagraph}>
              Built a microservice that handles shipping and billing. The
              microservice is connected to its own database which is PostgreSQL.
              The component renders dynamically depending on user inputs and
              with modularity in mind CSS-Modules was used for a seamless
              integration throughout the app. Deployed to AWS using Docker to
              make sure the microservice is available to the team and will work
              on any platform.
            </p>
          </div>
          <div className={style.welpProject}>
            <h3>Welp</h3>
            <img className={style.welpPhoto} src={welpPhoto} />
            <p className={style.welpSkills}>
              AWS | PostgeSQL | MongoDB | Nginx | New Relic
            </p>
            <p className={style.welpParagraph}>
              Optimized the backend for a legacy code base, benchamarked MongoDB
              and PostgreSQL to determine which database suits the application.
              The backend is scaled to handle thousands of requests per second
              through the implentation of a load balancer and multiple
              instances. Server routes and database queries were optimized
              through pooling, indexing, and caching.
            </p>
          </div>
        </section>
        <section className={style.experience}>
          <h1 className={style.experienceHeader}>Experience</h1>
          <div>
            <h3>MID Makers</h3>
            <ul>
              <li>
                Designed a responsive React-Native app that renders user data
                that is fetched from a cloud-based database.
              </li>
              <li>
                Established server-side authentication using Node, Passport, and
                Bcrypt to hash passwords.
              </li>
            </ul>
          </div>
          <div>
            <h3>Trilogy</h3>
            <ul>
              <li>
                Provided curriculum support for HTML5, CSS3, JavaScript, jQuery,
                Bootstrap, Node.js, Express.js, React, Heroku, Authentication,
                MongoDB, MySQL, Java, and Git.
              </li>
            </ul>
          </div>
          <div>
            <h3>Metro Remittance</h3>
            <ul>
              <li>
                Managed accounting records for all financial transactions and
                made sure that they are compliant to the federal, state, and
                Philippine laws.
              </li>
              <li>
                Generated budget and forecast quarterly and this is presented to
                the management team.
              </li>
            </ul>
          </div>
          <div>
            <h3>Universal Robina Corporation</h3>
            <ul>
              <li>Lead a team of 20 salesmen and warehouse personnel.</li>
              <li>Handled around $2M of monthly sales.</li>
              <li>Created trade marketing programs to boost sales.</li>
            </ul>
          </div>
        </section>
        <section className={style.education}>
          <h1>Education</h1>
          <div>
            <h3>Hack Reactor</h3>
            <p>Software Engineering Immersive</p>
          </div>
          <div>
            <h3>De La Salle University</h3>
            <p>Bachelor of Science in Business Management</p>
          </div>
        </section>
        <section className={style.contactInfo} id="contactInfo">
          <h1>Get in touch</h1>
          <div>
            <FontAwesomeIcon icon="envelope" size="lg" />
            <p> plgrazon@gmail.com</p>
          </div>
          <div>
            <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
            <p> github.com/plgrazon</p>
          </div>
          <div>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
            <p> linkedin.com/in/paolo-razon</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
