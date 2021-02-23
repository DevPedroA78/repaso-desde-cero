//import logo from './logo.png';
import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,  
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import MainNav from './Components/MainNav/index'
import './Pages/Home' //Lo importamos despues de crear la funcion y exportar en file Home.js
import Home from './Pages/Home/Home';
import WriteAPost from './Pages/WriteAPost/WriteAPost'
import PostDetail from './Pages/PostDetail';

function App() {

    return (
        <div className="App">
            <Router>
                <MainNav/>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Container fluid>
                    <Switch>
                        <Route path="/posts">
                            <PostPage/>
                        </Route>
                        <Route path="/post-detail">
                            <PostDetail/>
                        </Route>
                        <Route path="/Write-post">
                            <WriteAPost/>
                        </Route>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default App;