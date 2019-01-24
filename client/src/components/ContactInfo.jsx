import style from '../styles/ContactInfo.css';
import React, { Component } from 'react';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactInfo = () => {
  return (
    <section className={style.contactInfo} id="contactInfo">
      <h1>Get in touch</h1>
      <div className={style.contactLinks}>
        <a
          className={style.contactIcon}
          href="mailto:plgrazon@gmail.com"
          target="_blank"
        >
          <FontAwesomeIcon icon="envelope" size="lg" />
        </a>
        {/* <p> plgrazon@gmail.com</p> */}
        <a
          className={style.contactIcon}
          href="https://github.com/plgrazon"
          target="_blank"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
        </a>
        {/* <p> github.com/plgrazon</p> */}
        <a
          className={style.contactIcon}
          href="https://www.linkedin.com/in/paolo-razon"
          target="_blank"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
        </a>
        {/* <p> linkedin.com/in/paolo-razon</p> */}
      </div>
    </section>
  );
};

export default ContactInfo;
