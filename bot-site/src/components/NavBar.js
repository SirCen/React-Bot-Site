import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import '../resources/navbar.css';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor() {
        super()
        this.state = {}
    }    
        
    render() {
        return (
            <Navbar expand="lg" sticky="top" className="navbar">
                <Navbar.Brand href="#" className="navbar-brand"><img src={require('../assets/pubbotlogo.svg')} alt=''/>{'Pub Bot '}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/">About</Nav.Link></Nav.Item>
                        <Nav.Item><Link className="nav-link"to="/invite">Invite</Link></Nav.Item>
                        <NavDropdown title="Commands" id="commands-dropdown" className="commands-drop-menu">
                            <NavDropdown.Item href="/">Admin</NavDropdown.Item>
                            <NavDropdown.Item href="/">Music</NavDropdown.Item>
                            <NavDropdown.Item href="/">Translate</NavDropdown.Item>
                            <NavDropdown.Item href="/">Fun</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">All</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item><Nav.Link href="/">Support</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/">Donate</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}