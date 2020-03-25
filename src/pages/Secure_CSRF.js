import React from 'react';
import Header from '../components/Header';
import { connect } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";
//import objectHash from "object-hash";


class Secure_CSRF extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {firstname: '', lastname: '', csrf_token: ''};
  }

  onSubmit(i) {
    const { user } = this.props.auth;
    
    console.log(this.props.auth.user.id);
    i.preventDefault();
    let token = this.refs.csrf.value;
    if (token === this.props.auth.user.id) {
      alert("Successfully authorized");
      window.location = '/secure_csrf';
    }
    else {
      console.log(user.name);
      alert("Not Logged in!");
      window.location = '/login';
    }
  }



    render() {
      //const { user } = this.props.auth;
      
        return (
          <Router>
            <Header />

            <br></br>
            <div id="main-content"  style={{textAlign: "center"}}>
              <h1>CSRF</h1>

              <p>Only logged in users can update this info...</p>

              
              <form method="POST" onSubmit={this.onSubmit}>

                New Username:
                <br/>
                <input type="text" name="firstname" />
                <br></br>
                <br/>
                New Password:<br/>
                <input type="text" name="lastname" />
                <input ref = "csrf" name="csrf_token" type="hidden" value={this.props.auth.user.id} />
                <br/>
                <br></br>
                <input type="submit" value="Update"/>

              </form>

            </div>

            
          </Router>
        )
      
    }
}
const mapStateToProps = state => ({
  auth: state.auth,
  name: state.name
}
);
export default connect(
  mapStateToProps
)(Secure_CSRF);


