import React from 'react';

import Header from '../components/Header';


class LandingPage extends React.Component {


    render() {
        return (
            <React.Fragment style={{minHeight: window.innerHeight - 120}}>

                <Header/>
                <div style={{height: 200}}/>

                <p>yo yo yo </p>
                

            </React.Fragment>
        )
    }
}
  
export default LandingPage;