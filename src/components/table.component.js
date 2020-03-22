import React, {Component} from 'react';
import axios from 'axios';

const Music = props => (
  <tr>
    <td>{props.music.id}</td>
    <td>{props.music.track}</td>
    <td>{props.music.artist}</td>
    <td>{props.music.price}</td>
    <td>{props.music.stock}</td>
  </tr>
)



export default class Table extends Component {
  constructor(props) {
    super(props);

    //this.searching = this.searching.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {music: [], search: ''};
  }

  componentDidMount() {
    axios.get('https://ss-kaks-server.appspot.com:5000/tables/get')
      .then(response => {
        this.setState({music: response.data})
        //console.log(this.state.music)
      })
      .catch((error) => {
        console.log(error);
      })
    }
  onChangeSearch(i) {
    this.setState({
      search: i.target.value
    });
  }

  onSubmit(i) {
    i.preventDefault();
    if (this.state.search === "") {
      window.location = '/sql';
    }
    else {
      window.location = '/sql/' + this.state.search;
    }
  }

list() {
  return this.state.music.map(currentT => {
    return <Music music={currentT} key={currentT.id}/>;
  })
}

render() {
  return (
    <div>
      <h1>Music Store</h1>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <h4>Search track</h4>
          <input type="text"
            value={this.state.search}
            onChange={this.onChangeSearch}
            />
            
            <input type="submit" value="Search" className="btn btn-primary" style={{marginLeft: "10px"}} />
        </div>
        <div className="form-group">
          
        </div>
      </form>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Track</th>
            <th>Artist</th>
            <th>Price</th>
            <th>In Stock</th>
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
