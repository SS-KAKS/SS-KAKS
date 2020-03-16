import React from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router} from "react-router-dom";



class CSRF extends React.Component {


    render() {
        return (
          <Router>
            <Header />

            <br></br>
            <div id="main-content"  style={{textAlign: "center"}}>
              <h1>CSRF</h1>

              <p>Only admins can update this info...</p>

              
              <form method="GET">

                New Username:
                <br/>
                <input type="text" name="firstname"/>
                <br></br>
                <br/>
                New Password:<br/>
                <input type="text" name="lastname"/>
                <input type="hidden" name="csrf_token" value="user"/>
                <br/>
                <br></br>
                <input type="submit" value="Update"/>

              </form>

            </div>

            
          </Router>
        )
    }
}

export default CSRF;


