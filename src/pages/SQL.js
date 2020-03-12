import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from '../components/Header';
import Table from '../components/table.component';
import Search from '../components/search.component';


class SQL extends React.Component {


    render() {
        return (
          <Router>
              <div className="Sql">
                <Header />
                <Route exact path="" component={Table} />
                <Route exact path="/sql/:search" component={Search} />
              </div>
          </Router>
        )
    }
}

export default SQL;

/*<React.Fragment style={{minHeight: window.innerHeight - 120}}>

    <Header/>
    <div style={{height: 200}}

    />

        <p>yo yo ya </p>

    {/* <Home/>
    <div style={{height: 250}}/>
    <Media/>
    <div style={{height: 250}}/>
    <Testimonials/>
    <div style={{height: 250}}/>
    <ContactUs/>
    <div style={{height: 175}}/>
    <Footer/> }
</React.Fragment> */
