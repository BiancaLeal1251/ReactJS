import React from 'react';
import ReactDOM from 'react-dom';
import Metronome from './Metronome';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Metronome />, document.getElementById('root'));
registerServiceWorker();
