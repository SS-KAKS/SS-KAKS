import React from 'react';
import { Link } from "react-router-dom";

import Header from '../components/Header';


class LandingPage extends React.Component {


    render() {
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
      </div>>
                

            </React.Fragment>
        )
    }
}
  
export default LandingPage;