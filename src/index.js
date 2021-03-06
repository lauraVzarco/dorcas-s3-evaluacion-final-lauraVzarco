import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
    <HashRouter>
        <App className="App" />
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
