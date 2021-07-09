import React, { useState } from "react";
import {Navbar,
        Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '@material-ui/core/Avatar';


const Navbarr = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link >Home</Nav.Link>
                </Nav>
                <Nav>
                <Avatar src="/broken-image.jpg" style={{marginRight:"6px"}} />
                <Nav.Link eventKey={2} >
                    Logout
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbarr;
