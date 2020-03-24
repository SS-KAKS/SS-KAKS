import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";

const userInfo = props => (
  <tr>
    <td>{props.persons._id}</td>
    <td>{props.persons.name}</td>
  </tr>
)
// userInfo.map(user => 
//   <tr>
//     <td>
//       {user.name}
//     </td>
//     <td>
//       {user._id}
//     </td> 
//   </tr>
// )
class CompleteTable extends Component {
  state = {
    persons: {}
  }
  componentDidMount()
  {
    axios.get(`http://localhost:5080/api/users/idor/admin`).then( res =>{
      const persons = res.data;
      console.log(res.data);
      this.setState({persons});
    }
    )
  }
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{textAlign: "Center"}}>
        <br></br>
        <h1>All Info</h1>
        <br/>
        <br/>      
        <br/>
        <table className="table" style={{width: "90%", marginLeft: "5%"}} >
          <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>CreditCard</th>
          </tr>
          </thead>
          <tbody>
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
)(CompleteTable);