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

    this.state = { value: defaultImg };

    this.handleChange = this.handleChange.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleShare(event) {
    // Update the URL
    const searchValue = { img: this.state.value };
    const parsedSearchValue = queryString.stringify(searchValue);
    window.location.search = parsedSearchValue;

    // // Copy to the clipboard
    // const URL = `${window.location.origin}${
    //   window.location.pathname
    // }?${parsedSearchValue}`;
    // clipboardCopy(URL);
  }

  render() {
    return (
        <Router>
        <Header />
        <div id="main-content"  style={{textAlign: "center"}}>
            <br></br>
            <h1>Share your favorite image</h1>
            <br></br>
            <input style={{width:"50%"}}
            placeholder="Paste your favorite image URL, like https://placeimg.com/320/320/any"
            value={this.state.value}
            onChange={this.handleChange}
            />
            <br></br>
            <div
            dangerouslySetInnerHTML={{
                __html: `<img src="${this.state.value}"/>`
            }}
            />
            <br></br>
            <button onClick={this.handleShare}>Share</button>
        </div>

        </Router>
    );
  }
}

export default XSS;






