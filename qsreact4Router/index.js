// code queens.js on 2020.3/01 PM2:15 by Queenie

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Router, browserHistory } from 'react-router';

// Entry Point to render Routers Component
ReactDOM.render(

    <Router history={browserHistory} routes={Routes}/>,
    document.getElementById('main')

);
