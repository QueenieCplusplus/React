// code queens.js on 2020.3/01 PM2:00 by Queenie

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './src/App';
import index from './index';
import queens from './src/queens';

export default(
    <Route path="/" component={App}>
      <IndexRoute component={index}/>
      <Route path="/queen" component={queens}/>
    </Route>
);