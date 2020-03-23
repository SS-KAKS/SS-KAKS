import React, { Component } from "react";
import Header from "../Header";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from  "../../actions/authActions";
 
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
 

render() {
    const { user } = this.props.auth;
    
return (
  <React.Fragment style={{minHeight: window.innerHeight - 120}}>
  
    <Header name = {user.name.split(" ")[0]}  />
              
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4 style={{marginTop: "5%"}}>
              <t>Hey there,</t> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Please look around, and try different attacks
                <t style={{fontWeight:"Bold"}}> { user.name.split(" ")[0] }</t>
                .
                 
              
            
              </p>
            </h4>
           
          </div>
        </div>
      </div>
  </React.Fragment>

    );
  
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);