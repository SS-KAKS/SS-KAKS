import React, {Component} from 'react';
import axios from 'axios';
import { connect } from "react-redux";



class IdorTable extends Component {
  state = {
    person: {}
  }
  componentDidMount()
  {
    axios.get(`http://localhost:5080/api/users/${this.props.auth.user.id}`).then( res =>{
      const person = res.data;
      console.log(res.data);
      this.setState({person});
    }
    )
  }
  render() {
    //const { user } = this.props.auth;
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
            <br></br>
            {parseInt(this.props.auth.user.id,16)%100000000000000000}
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