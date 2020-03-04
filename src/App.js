import React from 'react';
import LandingPage from './pages/LandingPage';
import SQL from './pages/SQL';
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component {
  componentWillMount(){
    document.title = 'SS-KAKS'
  }

  render() { 
    return (
      
        <Router>
          
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path ='/login' component = {Login}/>
            <Route exact path='/sql' component={SQL} />
            <Route exact path ='/signup' component = {SignUp}/>
            
      
            {/* <Route exact path='/IDOR_URL' component={Admin} />
            <Route exact path='/admin/shop' component={ShopAdmin} />
            <Route exact path='/admin/testimonials' component={TestimonialsAdmin} />
            <Route component={NotFound} /> */}
       
          </Switch>  
        </Router>
        
        
      
    )
  }
}

export default App;