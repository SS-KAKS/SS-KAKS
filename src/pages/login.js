import React from "react";
import Header from '../components/Header';
export default class Login extends React.Component {

    render() {
        return (
            <React.Fragment style={{minHeight: window.innerHeight - 120}}> 
            <Header/>
           
            <form style={{margin: "10%", lineHeight: "2rem"}}>
            
                <h3>Sign In</h3>

                <div className="form-group" style={{marginBottom: "2rem"}}>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group" style={{marginBottom: "2rem"}}>
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group" style={{marginBottom: "2rem"}}>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="ForgotPass">password?</a>
                </p>
            </form>
             </React.Fragment>
           
        );
    }
}