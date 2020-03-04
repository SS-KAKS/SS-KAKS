import React from "react";
import Header from '../components/Header';

export default class SignUp extends React.Component {
    render() {
        return (
            <React.Fragment style={{minHeight: window.innerHeight - 120}}> 
            <Header/>
            <form style={{margin: "10%", lineHeight: "2rem"}}>
                <h3>Sign Up</h3>

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

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
            </React.Fragment>
        );
    }
}