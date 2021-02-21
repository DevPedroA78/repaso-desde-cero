import React, { useState } from 'react';
import {
    Link
} from 'react-router-dom'
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
} from 'reactstrap'

function MainNav(){
    cosnt [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="dark" dark expand="md">
            <Link to="/">Blogeando</Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/posts" className="nav-link">Ver posts</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/write-post" className="nav-link">Escribe un post</Link>
                    </NavItem>
                    </Nav>
            </Collapse>
        </Navbar>
    )
}


import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './src/index.css';
import App from '../../App';
import reportWebVitals from './src/reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);


// ME TRAIGO la funcion y estilo y todo lo realizdo en el file HOME.JS
import{
    Container,
    Row,
    Col
} from 'reactstrap'

import './style.css'

function Home(){
    return(
        <Row className="Home">
            <Col xs="12" className="p-0">
                <div className="home-hero d-flex flex-column justify-content-center text-white align-items-center text-center w-100">
                    <h1>Bienvenidos blogueando</h1>
                    <h2>Esta es mi opractica de nodejs y reactjas desde cero</h2>
                </div>
            </Col>
        </Row>
    )
}

export default Home