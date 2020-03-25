import React from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router} from "react-router-dom";



class XSS extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {item: '', submit: 0};
  }

  onSubmit(i) {
    this.setState({submit: 1});
    i.preventDefault();
    let token = this.refs.csrf.value;
    console.log(token);
    

    // if (token === "admin") {
    //   alert("Congrats, now try the secure challenge");
    //   window.location = '/xss';
    // }
    // else {
    //   console.log(token);
    //   alert("Not Admin!");
    //   window.location = '/xss';
    // }
  }

  myChangeHandler = (event) => {
    this.setState({item: event.target.value});
  }


    render() {
        
        let props = {};
        //props[userProvidedData] = "hello";

        let element = <div {...props} />;
        //let html = renderToString(element);

        let text = <button>Submit</button>;
        let items = '';
        if (this.state.submit) {
            items = <h1>Hello {this.state.item}</h1>;
        } else {
            items = '';
    }

        return (
          <Router>
            <Header />

            <br></br>
            <div id="main-content"  style={{textAlign: "center"}}>
              <h1>XSS</h1>

              

              
              <form onSubmit={this.onSubmit}>

                Make your post in the blog! {items} 
                <br></br>
                <br/>
                <input ref = "csrf" name="csrf_token" type="text" onChange={this.myChangeHandler} />
                <br/>
                <br></br>
                <input type="submit" value="Update"/>
              </form>

                <br></br>
                {this.props.passed}
                <p>{text}</p>
                <script>
                    {text}
                </script>

            </div>

            
          </Router>
        )
    }
}

export default XSS;


