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
            <h4>
              Welcome ! 
            </h4>
            
            <br />
         
      
          </div>
        </div>
      </div>>
                

            </React.Fragment>
        )
    }
}
  
export default LandingPage;