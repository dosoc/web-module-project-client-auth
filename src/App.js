import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login'
import Friends from './components/Protected'

function App() {
  return (
    <Router>
      <nav>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </nav>
       <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/protected" component={Friends}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
