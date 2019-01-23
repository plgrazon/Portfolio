import style from '../styles/BioInfo.css';
import React, { Component } from 'react';

const BioInfo = ({ profilePhoto }) => {
  return (
    <div>
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
            applications. Programming lets me transform my ideas and channels my
            creativity into an application that many can benefit from.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BioInfo;
