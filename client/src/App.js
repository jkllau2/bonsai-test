import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Dashboard from './containers/Dashboard/Dashboard.js'
import Navigation from './components/Nav/Nav.js'
import Profile from './containers/Profile/Profile.js'

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="outer-contaienr">
        <Helmet
          titleTemplate="%s - Shop Bonsai"
          defaultTitle="Shop Bonsai"
        />
        <Navigation />
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect(null, null)(App))
