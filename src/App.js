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
//import './Pages/Home' //Lo importamos despues de crear la funcion y exportar en file Home.js
import Home from './Pages/Home/Home';

function App() {

    return (
        <div className="App">
            <Router>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Container fluid>
                    <Switch>
                        <Route path="/">
                            <Home/>
                        </Route>
                        <Route path="/post">
                            <h1>Vista de post</h1>
                        </Route>
                        <Route path="/White-post">
                            <h1>Vista para escribir un post</h1>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default App;