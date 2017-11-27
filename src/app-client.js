'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';


window.onload = () => {
  ReactDOM.render(<AppRoutes />, document.getElementById('main'));
};
