import style from '../styles/Experience.css';
import React, { Component } from 'react';

const Experience = () => {
  return (
    <section className={style.experience}>
      <h1 className={style.experienceHeader}>Experience</h1>
      <div>
        <h3>MID Makers</h3>
        <ul>
          <li>
            Designed a responsive React-Native app that renders user data that
            is fetched from a cloud-based database.
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
            Managed accounting records for all financial transactions and made
            sure that they are compliant to the federal, state, and Philippine
            laws.
          </li>
          <li>
            Generated budget and forecast quarterly and this is presented to the
            management team.
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
  );
};

export default Experience;
