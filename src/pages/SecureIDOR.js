import React from 'react';
import Header from '../components/Header';
import IdorTable from '../components/table.idor.component';
import CompleteTable from '../components/table.idor.admin.component';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from "react-redux";

class SecureIDOR extends React.Component {
  //user.name is how its refered
    render() {
        const { user } = this.props.auth;
        // var userName = user.name;
        // var cc = User.findOne({ userName });
        // console.log(cc);
        return (
          <Router>
            <Header />

            <br></br>
            <div id="main-content"  style={{textAlign: "center"}}>
              <h1>IDOR</h1>
            </div>
            <Route exact path="/secure/idor" component={IdorTable} />
            {
                user.name === "admin" &&
            <Route exact path="/secure/idor/admin" component={CompleteTable} />
            }
          </Router>
        )
    }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(SecureIDOR);
