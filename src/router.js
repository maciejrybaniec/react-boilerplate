/**
 * Application routing handler.
 * @module Application Router
 * @author maciej.rybaniec@gmail.com
 * @exports Router
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Main from './Modules/Main';

export default {
    /**
     * Run application router.
     * @method run
     */
    run() {
        ReactDOM.render(
          <Router history={hashHistory}>
            <Route name="app" path="/" component={Main} />
          </Router>
        , document.getElementsByTagName('app')[0]);
    }
};
