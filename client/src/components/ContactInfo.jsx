import style from '../styles/ContactInfo.css';
import React, { Component } from 'react';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
