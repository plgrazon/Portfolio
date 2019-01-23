import style from '../styles/ContactInfo.css';
import React, { Component } from 'react';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactInfo = () => {
  return (
    <section className={style.contactInfo} id="contactInfo">
      <h1>Get in touch</h1>
      <div>
        <a href="https://paolorazon.io">
          <FontAwesomeIcon icon="envelope" size="lg" />
        </a>
        {/* <p> plgrazon@gmail.com</p> */}
      </div>
      <div>
        <a href="https://github.com/plgrazon">
          <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
        </a>
        {/* <p> github.com/plgrazon</p> */}
      </div>
      <div>
        <a href="https://www.linkedin.com/in/paolo-razon">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
        </a>
        {/* <p> linkedin.com/in/paolo-razon</p> */}
      </div>
    </section>
  );
};

export default ContactInfo;
