import style from '../styles/Education.css';
import React, { Component } from 'react';

const Education = () => {
  return (
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
  );
};

export default Education;
