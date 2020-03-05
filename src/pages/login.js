import React from "react";
import Header from '../components/Header';
export default class Login extends React.Component {

    render() {
        return (
            <React.Fragment style={{minHeight: window.innerHeight - 120}}> 
            <Header/>
           
            <form style={{margin: "7%", lineHeight: "2rem"}}>
            
                <h3 style={{marginBottom: "50px"}} >Sign In</h3>

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

                <div class="row" style={{marginTop: "50px"}}>

                    <div style={{width:"50%"}}>
                        <button type="submit" className="btn btn-primary" style={{fontSize: "20px", marginLeft: "12px"}}>Log In</button>
                    </div>

                    <div className="forgot-password text-right" style={{width:"50%"}}>
                        <t> Forgot <a  href="ForgotPass">password?</a> </t>
                    </div>
                    
                </div>
                
            </form>
             </React.Fragment>
           
        );
    }
}