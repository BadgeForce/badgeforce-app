import {default as badgeForce} from 'badge-rest-engine';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './pages/home/home';
const bfClient = new badgeForce.badgeforceClient("http://localhost:8545", "0x0")
console.log(bfClient);
class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path={'/'} component={Home} />
            {window.location.pathname.includes('index.html') && <Redirect to="/" />}
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
