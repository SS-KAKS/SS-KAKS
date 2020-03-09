import React from 'react';
import LandingPage from './pages/LandingPage';
import SQL from './pages/SQL';
import SubmitButton from './components/SubmitButton';
import userSpace from "./components/userSpace";
import {observer} from 'mobx-react';
import Login from "./components/login.components";
import SignUp from "./components/signup.components";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {

  async componentDidMount() {
    try {

      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });


      let result = await res.json();
      if (result && result.success) {
        userSpace.loading = false;
        userSpace.isLoggedIn = true;
        userSpace.username = result.username;
      } else {
        userSpace.loading = false;
        userSpace.isLoggedIn = false;
      }

    } catch (e) {
      userSpace.loading = false;
      userSpace.isLoggedIn = false;
    }
  }
  async doLogout() {
    try {

      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });


      let result = await res.json();
      if (result && result.success) {

        userSpace.isLoggedIn = false;
        userSpace.username = '';
      }

    } catch (e) {
      console.log(e)
    }
  }
  componentWillMount() {
    document.title = 'SS-KAKS'
  }

  render() {
    if (userSpace.isLoggedIn) {
      return (
        <div className="app">
          <div className='container'>
            Welcome {userSpace.username}
          <SubmitButton  text = {'Log out'}
          disabled= {false}
          onClick={() => this.doLogout()}
          />
 


          </div>
        </div>

      );

    }
    return (

      <Router>

        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/sql' component={SQL} />
          <Route exact path='/signup' component={SignUp} />


          {/* <Route exact path='/IDOR_URL' component={Admin} />
            <Route exact path='/admin/shop' component={ShopAdmin} />
            <Route exact path='/admin/testimonials' component={TestimonialsAdmin} />
            <Route component={NotFound} /> */}

        </Switch>
      </Router>



    )
  }
}

export default observer(App);