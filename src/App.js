import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import Login from './components/Login'
import FriendList from './components/FriendsList'
import AddFriends from './components/addFriends'
import Logout from './components/Logout'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
       <div className="App">
        <header>
          <h2>Friends App</h2>
          <Link className='link' to="/login">Login</Link>
          <Link className='link' to='/friends'>Friends</Link>
          <Link className='link' to='/friends/add'>Add Friends</Link>
          <Link className='link' to="/logout">Logout</Link>
        </header>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route exact path='/login'>
          <Redirect to="/"/>
        </Route>
        <PrivateRoute exact path='/friends' component={FriendList}/>
        <PrivateRoute path='/friends/add' component={AddFriends}/>
        <PrivateRoute path='/logout' component={Logout}/>
      </div>
    </Router>
  );
}

export default App;
