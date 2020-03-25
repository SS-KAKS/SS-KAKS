import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from "react-redux";
import Header from '../components/Header';
import Table from '../components/table.component';


class SQL extends React.Component {


    render() {
      const { user } = this.props.auth;
      if(user.name===undefined){
        window.location = '/login';


      }else{
        return (
          <Router>
              <div className="Sql">
                <Header />
                <Route exact path="" component={Table} />
              </div>
          </Router>
        )
      }
    }
}
const mapStateToProps = state => ({
  auth: state.auth,
  name: state.name
}
);
export default connect(
  mapStateToProps,
  {}
)(SQL);
