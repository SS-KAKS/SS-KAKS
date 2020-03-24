import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ccInfo = props => (
  <tr>
    <td>{props.ccnum.id}</td>
  </tr>
)



class IdorTable extends Component {
render() {
  const { user } = this.props.auth;
  return (
    <div style={{textAlign: "Center"}}>
      <br></br>
      <h1>Your Info</h1>
      <br/>
      <br/>      
      <br/>
      <table className="table" style={{width: "90%", marginLeft: "5%"}} >
        <thead className="thead-dark">
          <tr>
            <th>Credit Card Num</th>
          </tr>
        </thead>
        <tbody>
          {user.cc}
        </tbody>
      </table>

    </div>
  )
}
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(IdorTable);