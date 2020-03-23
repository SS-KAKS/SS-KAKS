import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from "react-redux";
import Header from '../components/Header';
import Table from '../components/table.component';
import Search from '../components/search.component';
import { Link } from "react-router-dom";


class SQL extends React.Component {


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
    </div>>
              

          </React.Fragment>
      )


      }else{
        return (
          <Router>
              <div className="Sql">
                <Header />
                <Route exact path="" component={Table} />
                <Route exact path="/sql/:search" component={Search} />
              </div>
          </Router>
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
  {}
)(SQL);
 


