import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login'
import FriendList from './components/FriendsList'
import AddFriends from './components/addFriends'

function App() {
  return (
    <Router>
       <div className="App">
        <Route path='/'>
          <Login/>
        </Route>
        <Route path='/friends'>
          <FriendList/>
        </Route>
        <Route path='/friends/add'>
          <AddFriends/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
