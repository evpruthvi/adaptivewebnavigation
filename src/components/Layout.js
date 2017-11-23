'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <span className="glyphicon glyphicon glyphicon-tree-deciduous"></span>
                        Group 10 - StackOverflow
                    </a>
                </div>
            </div>
            </nav>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
         <p> © Copyright 2017 - Adaptive Web Group 10
          </p>
        </footer>
      </div>
    );
  }
}
