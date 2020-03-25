import Header from '../components/Header';
import { BrowserRouter as Router} from "react-router-dom";
import React from "react";
import queryString from "query-string";
//import clipboardCopy from "clipboard-copy";

class XSS extends React.Component {
  constructor(props) {
    super(props);

    const parsedURL = queryString.parse(window.location.search);
    let defaultImg = "";

    if (parsedURL["img"]) {
      defaultImg = parsedURL["img"];
    }


    this.state = { value: defaultImg, submit: defaultImg };

    this.handleChange = this.handleChange.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleShare(event) {
    // Update the URL
    event.preventDefault();
    //this.setState( {submit: this.state.value} );
    const searchValue = { img: this.state.value };
    const parsedSearchValue = queryString.stringify(searchValue);
    window.location.search = parsedSearchValue;

  }

  render() {
    return (
        <Router>
        <Header />
        <div id="main-content"  style={{textAlign: "center"}}>
            <br></br>
            <h1>Submit your favorite image</h1>
            <br></br>
            <form >
                <input style={{width:"50%"}}
                placeholder="Paste your favorite image URL, like <img src=https://placeimg.com/320/320/any />"
                value={this.state.value}
                onChange={this.handleChange}
                />
                <br></br>
                
                <br></br>
                <button onClick={this.handleShare} type="submit">Submit</button>
            </form>
            <br></br>
            <hr style={{align:"center", width:"50%"}}/>
            <br></br>
            
            <div 
            dangerouslySetInnerHTML={{
                __html: this.state.submit
            }}
            />
        </div>

        </Router>
    );
  }
}

export default XSS;






