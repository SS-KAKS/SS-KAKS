import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { logoutUser } from  "../actions/authActions";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component {

    updateState(event){

    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
      }
      
   

    render() {  
        //const myColor = { color: 'white' };
         const { user } = this.props.auth;
        // const userLink = (
        //     <ul className="navbar-nav">
        //       <li className="nav-item">
        //         <Link to="/profile" className="nav-link">
        //           User
        //         </Link>
        //       </li>
        //       <li className="nav-item">
        //         <a href="" onClick={this.logOut.bind(this)} className="nav-link">
        //           Logout
        //         </a>
        //       </li>
        //     </ul>
        //   )
     
        if(user.name === undefined ){

            return (
                <React.Fragment>
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand href="/">SS-KAKS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">



                            </Nav>


                            <nav>
                                                <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                                </li>
                            </ul>
                            </nav>
                            <nav>
                                                <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link to="/register" className="nav-link">
                                    Signup
                                </Link>
                                </li>
                            </ul>
                            </nav>


                        </Navbar.Collapse>
                        </Navbar>

                </React.Fragment>
            )


        }else{
        return (
            <React.Fragment>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="/">SS-KAKS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        {/* <Nav.Link href="sql">SQL Injection</Nav.Link>
                        <Nav.Link href="#link">IDOR/URL</Nav.Link>
                        <Nav.Link href="#link">CSRF</Nav.Link>
                        <Nav.Link href="#link">XSS</Nav.Link> */}


                        <NavDropdown title="Unsecured Methods" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/sql">SQL Injection</NavDropdown.Item>
                            <NavDropdown.Item href="/idor">IDOR/URL</NavDropdown.Item>
                            <NavDropdown.Item href="/csrf">CSRF</NavDropdown.Item>
                            <NavDropdown.Item href="/xss">XSS</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>


                        <NavDropdown title="Secured Methods" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/sql-sec">SQL Injection</NavDropdown.Item>
                            <NavDropdown.Item href="/secure/idor">IDOR/URL</NavDropdown.Item>
                            <NavDropdown.Item href="/secure/csrf">CSRF</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">XSS</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>

                        </Nav>



                       {/* <h2 style={ myColor }>  {user.name}   </h2> */}
             <button
              style={{
                borderRadius: "3px",
                letterSpacing: "1.5px",
                //marginLeft: "1rem",
                color: 'white'
              } }
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
                    </Navbar.Collapse>
                    </Navbar>

            </React.Fragment>
        )
    }
    }
}


  const mapStateToProps = state => ({
    auth: state.auth,
    name: state.name
  }
  );
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(withRouter(Header));

//export default  withRouter(Header)
