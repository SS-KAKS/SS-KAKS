import React, {Component} from 'react';
import axios from 'axios';
import Header from '../components/Header';
const Songs = props => (
  <tr>
    <td>{props.music.id}</td>
    <td>{props.music.track}</td>
    <td>{props.music.artist}</td>
    <td>{props.music.price}</td>
    <td>{props.music.stock}</td>
  </tr>
)



export default class Search extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {music: [], search: ''};
  }

  componentDidMount() {
    axios.get('/tables/get/' + this.props.match.params.search)
      .then(response => {
        this.setState({music: response.data})

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
      window.location = './';
    }
    else {
      window.location = './' + this.state.search;
    }
  }

list() {
  return this.state.music.map(currentT => {
    return <Songs music={currentT} key={currentT.id}/>;
  })
}

render() {
  return (

    <div style={{textAlign: "Center"}}>
      <Header />
      <br></br>
      <h1>Music Store</h1>
      <form onSubmit={this.onSubmit}>
        <div className="form-group" >

          <br></br>
          <input type="text" placeholder="Search"
            value={this.state.search}
            onChange={this.onChangeSearch}
            />
            <input type="submit" value="Search" className="btn btn-primary" style={{marginLeft: "1%"}}/>
        </div>

      </form>
      <br></br>
      <table className="table" style={{width: "90%", marginLeft: "5%"}}>
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
