import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';




class Header extends React.Component {

    

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="/">SS-KAKS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        <Nav.Link href="sql">SQL Injection</Nav.Link>
                        <Nav.Link href="#link">IDOR/URL</Nav.Link>
                        <Nav.Link href="#link">CSRF</Nav.Link>
                        <Nav.Link href="#link">XSS</Nav.Link>
                       

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">SQL Injection</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">IDOR/URL</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">CSRF</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">XSS</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                       
                        {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form> */}
                        <Nav style={{marginRight: "30px"}}>
                        <Nav.Link href="login">Login</Nav.Link>
                        <Nav.Link href="register">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>

            </React.Fragment>
        )
    }
}
 


export default Header