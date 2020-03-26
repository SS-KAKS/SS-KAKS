import React, {Component} from 'react';
import axios from 'axios';
import { connect } from "react-redux";

// const userInfo = props => (
//   <tr>
//     <td>{props.persons._id}</td>
//     <td>{props.persons.name}</td>
//   </tr>
// )
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
    persons: []
  }
  componentDidMount()
  {
    axios.get(`http://localhost:5080/api/users/idor/admin`).then( res =>{
      const persons = res.data;
      this.setState({persons});
    }
    )
  }
  render() {
    // const { user } = this.props.auth;
    // const { persons } = this.state;
    return (
      
      <div style={{textAlign: "Center"}}>
        <br></br>
        <h1>All Info</h1>
        <br/>
        <br/>      
        <br/>
        {
          this.state.persons.map( persons => (
            <div>
            <p>Name: {persons.name} - Credit Card Info: {parseInt(persons._id,16)%100000000000000000}</p>
            </div>
          ))
        }
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