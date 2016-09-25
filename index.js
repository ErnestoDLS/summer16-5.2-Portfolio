import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './lib/App'
import About from './lib/About'
import Repo from './lib/Repo'
import Repos from './lib/Repos'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
      <Route path="/repos" component={Repos}/>
    </Route>
  </Router>
), document.getElementById('app'))
