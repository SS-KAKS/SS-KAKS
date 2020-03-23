import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from '../components/Header';


class LandingPage extends React.Component {


    render() {
      const { user } = this.props.auth;
      if(user.name===undefined){
        return (
            <React.Fragment style={{minHeight: window.innerHeight - 120}}>

                <Header/>
                <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <br></br>
            <br></br>
            <h4>
              You must login to access site! 
            </h4>
            <br></br>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
              <br></br>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            
            <br />
         
      
          </div>
        </div>
      </div>
                

            </React.Fragment>
        )
      }else{
        return (
          <React.Fragment style={{minHeight: window.innerHeight - 120}}>

              <Header/>
              <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <br></br>
          <br></br>
          <h4>
            Welcome to the home page  
            <t style={{fontWeight: "Bold"}}> {user.name}</t>, feel free to look around and try to exploit this page.
          </h4>
          <br></br>
          <br />
       
    
        </div>
      </div>
    </div>
              

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
  mapStateToProps
)(LandingPage);
  
