import style from '../styles/NavBar.css';
import React, { Component } from 'react';

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
