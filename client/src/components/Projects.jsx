import style from '../styles/Projects.css';
import React, { Component } from 'react';

const Projects = ({ abayPhoto, welpPhoto, portfolioPhoto }) => {
  return (
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
          microservice is connected to its own database which is PostgreSQL. The
          component renders dynamically depending on user inputs and with
          modularity in mind CSS-Modules was used for a seamless integration
          throughout the app. Deployed to AWS using Docker to make sure the
          microservice is available to the team and will work on any platform.
        </p>
      </div>
      <div className={style.welpProject}>
        <h3>Welp</h3>
        <img className={style.welpPhoto} src={welpPhoto} />
        <p className={style.welpSkills}>
          AWS | PostgeSQL | MongoDB | Nginx | New Relic
        </p>
        <p className={style.welpParagraph}>
          Optimized the backend for a legacy code base, benchamarked MongoDB and
          PostgreSQL to determine which database suits the application. The
          backend is scaled to handle thousands of requests per second through
          the implentation of a load balancer and multiple instances. Server
          routes and database queries were optimized through pooling, indexing,
          and caching.
        </p>
      </div>
      <div className={style.portfolioProject}>
        <h3>Portfolio</h3>
        <img className={style.portfolioPhoto} src={portfolioPhoto} />
        <p className={style.portfolioSkills}>
          React | CSS | Webpack | Grunt | AWS
        </p>
        <p className={style.portfolioParagraph}>
          Built my portfolio using react and it is hosted on AWS. My static
          files are in a S3 bucket which then are being served using CloudFront.
          File uploading is automated with the use of Grunt.
        </p>
      </div>
    </section>
  );
};

export default Projects;
