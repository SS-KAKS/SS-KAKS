import React from "react";
import Header from '../components/Header';

export default class SignUp extends React.Component {
    render() {
        return (
            <React.Fragment style={{minHeight: window.innerHeight - 120}}> 
            <Header/>
            <form style={{margin: "7%", lineHeight: "2rem"}}>

                <h3  style={{marginBottom: "50px"}}>Sign Up</h3>

                <div className="form-group" style={{marginBottom: "2rem"}}>
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group" style={{marginBottom: "2rem"}}>
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group" style={{marginBottom: "2rem"}}>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group" style={{marginBottom: "2rem"}}>
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div class="row" style={{marginTop: "50px"}}>

                    <div div style={{width:"50%"}}>
                        <button type="submit" className="btn btn-primary" style={{fontSize: "20px", marginLeft: "12px"}}>Sign Up</button>
                    </div>

                    <div className="forgot-password text-right" style={{width:"50%"}}>
                        Already registered <a href="login">sign in?</a>
                    </div>
                    
                </div>

                

            </form>
            </React.Fragment>
        );
    }
}