import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/myApp.jsx';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedin, faGithub, faMapMarker, faEnvelope);

// React
ReactDOM.render(<App />, document.getElementById('app'));
