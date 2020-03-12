import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

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


