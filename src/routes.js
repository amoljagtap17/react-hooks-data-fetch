import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Header from './components/Header/Header'
import DataFetchContextProvider from './hooks/contexts/DataFetchContext'

import 'foundation-sites/dist/css/foundation.min.css'

const Routes = () => (
  <Router>
    <Header />
    <div className="grid-container">
      <Switch>
        <DataFetchContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/details" component={Details} />
        </DataFetchContextProvider>
      </Switch>
    </div>
  </Router>
)

export default Routes
