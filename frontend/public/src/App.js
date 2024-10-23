import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Upload from './components/Upload';
import Profile from './components/Profile';

function App() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/upload" component={Upload} />
            <Route path="/profile" component={Profile} />
        </Router>
    );
}

export default App;
