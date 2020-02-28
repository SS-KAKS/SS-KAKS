import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage';


class App extends React.Component {
  componentWillMount(){
    document.title = 'SS-KAKS'
  }

  render() { 
    return (
      
        <Router>
          
          <Switch>
            <Route exact path='/' component={LandingPage} />
            {/* <Route exact path='/shop' component={Shop} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/admin/shop' component={ShopAdmin} />
            <Route exact path='/admin/testimonials' component={TestimonialsAdmin} />
            <Route component={NotFound} /> */}
          </Switch>
        </Router>
      
    )
  }
}

export default App;