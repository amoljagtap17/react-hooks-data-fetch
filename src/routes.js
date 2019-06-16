import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Header from './components/Header/Header'

import 'foundation-sites/dist/css/foundation.min.css'

const Routes = () => (
  <Router>
    <Header />
    <div className="grid-container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </div>
  </Router>
)

export default Routes
