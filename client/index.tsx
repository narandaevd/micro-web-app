import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import 'normalize.css';

const application: React.ReactElement<{}> = (
    <App />
);

ReactDOM.render(application, document.getElementById('application'));