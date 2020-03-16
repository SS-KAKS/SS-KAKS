import React from 'react';
import LandingPage from './pages/LandingPage';
import SQL from './pages/SQL';
import { observer } from 'mobx-react';
//import Login from "./components/LoginForm";
import SignUp from "./components/Register";
import Login from './components/Login'
import NavBar from './components/NavBar'
//import Register from './components/Register'
import Profile from './components/Profile'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends React.Component {

  render() {

    return (

      <Router>

        <Switch>
          <Route exact path='/' component={LandingPage} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={NavBar} />
          <Route exact path='/sql' component={SQL} />
        



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