import React from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router} from "react-router-dom";



class CSRF extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {firstname: '', lastname: '', csrf_token: ''};
  }

  onSubmit(i) {
    i.preventDefault();
    let token = this.refs.csrf.value;
    console.log(token);
    if (token === "admin") {
      alert("Congrats");
      window.location = '/sql';
    }
    else {
      console.log(token);
      alert("Try Again Hacker!");
      //window.location = '/sql/' + this.state.search;
    }
  }

    




    render() {
        return (
          <Router>
            <Header />

            <br></br>
            <div id="main-content"  style={{textAlign: "center"}}>
              <h1>CSRF</h1>

              <p>Only admins can update this info...</p>

              
              <form method="GET" onSubmit={this.onSubmit}>

                New Username:
                <br/>
                <input type="text" name="firstname" />
                <br></br>
                <br/>
                New Password:<br/>
                <input type="text" name="lastname" />
                <input ref = "csrf" name="csrf_token" type="hidden" value="user" />
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


