import React from 'react';
import Header from '../components/Header';
import IdorTable from '../components/table.idor.component';
import CompleteTable from '../components/table.idor.admin.component';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from "react-redux";


class IDOR extends React.Component {
  //user.name is how its refered
    render() {
        
        // var userName = user.name;
        // var cc = User.findOne({ userName });
        // console.log(cc);
        try{ 
          console.log(this.props);
        }
        catch(g)
        {

        }
        return (
          <Router>
            <Header />

            <br></br>
            <div id="main-content"  style={{textAlign: "center"}}>
              <h1>IDOR</h1>
            </div>
            <Route exact path="/idor" component={IdorTable} />
            <Route exact path="/idor/admin" component={CompleteTable} />
          </Router>
        )
    }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(IDOR);
