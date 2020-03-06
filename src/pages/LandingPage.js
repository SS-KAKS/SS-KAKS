import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

import Header from '../components/Header';


class LandingPage extends React.Component {


    render() {
        return (
            <React.Fragment>

                <Header/>
                <div style={{textAlign: "center"}}>
                    
                    <p>yo yo yo </p>

                </div>

                
                
                {/* <div style={{textAlign: "center"}}>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </div> */}
                

            </React.Fragment>
        )
    }
}
  
export default LandingPage;