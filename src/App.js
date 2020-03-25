import React from 'react';
import LandingPage from './pages/LandingPage';
import SQL from './pages/SQL';
import SQLsec from './pages/SQL-sec';
import CSRF from "./pages/CSRF";
import { observer } from 'mobx-react';
import { Provider } from "react-redux";
import Search from "./components/search.component";
import Look from "./components/search-sec.component";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import jwt_decode from "jwt-decode";
import store from "./store";
import Profile from './components/Profile'
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Secure_CSRF from "./pages/Secure_CSRF";
import Idor from "./pages/IDOR"
import SecureIdor from "./pages/SecureIDOR"


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends React.Component {
  componentWillMount(){
    document.title = 'SS-KAKS'
  }

  render() {
    return (
      <Provider store={store}>
        <Router>

          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path ='/csrf' component = {CSRF}/>
            <Route exact path ='/secure/csrf' component = {Secure_CSRF}/>
            <Route exact path='/sql' component={SQL} />
            <Route exact path='/sql/:search' component={Search}/>
            <Route exact path='/sql-sec' component={SQLsec}/>
            <Route exact path='/sql-sec/:search' component={Look}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/idor" component={Idor} />
            <Route exact path="/idor/admin" component={Idor} />
            <Route exact path="/secure/idor" component={SecureIdor} />
            <Route exact path="/secure/idor/admin" component={SecureIdor} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />


          </Switch>
        </Router>

        </Provider>

    )
  }
}

export default observer(App);
