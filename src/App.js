//import logo from './logo.png';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="App">
            <Router>
                <Navbar color="dark" dark expand="md">
                <Link to="/">Blogeando</Link>
                <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/components/">Ver posts</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/write-post">Escribe un post</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/White-post">
                        <h1>Vista para escribir un post</h1>
                    </Route>
                    <Route path="/post">
                        <h1>Vista de post</h1>
                    </Route>
                    <Route path="/">
                        <h1>Vista del home</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;