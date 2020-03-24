import React, {Component} from 'react';
import axios from 'axios';

const Music = props => (
  <tr>
    <td>{props.ccnum.id}</td>
  </tr>
)



export default class CompleteTable extends Component {
  constructor(props) {
    super(props);

    //this.searching = this.searching.bind(this);
    //this.onChangeSearch = this.onChangeSearch.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);

    this.state = {music: [], search: ''};
  }

  componentDidMount() {
    axios.get('http://localhost:3000/tables/get')
      .then(response => {
        this.setState({music: response.data})
        //console.log(this.state.music)
      })
      .catch((error) => {
        console.log(error);
      })
    }

list() {
  return this.state.music.map(currentT => {
    return <Music music={currentT} key={currentT.id}/>;
  })
}

render() {
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
            <th>Credit Card Num</th>
          </tr>
        </thead>
        <tbody>
          {this.list()}
        </tbody>
      </table>

    </div>
  )
}
}