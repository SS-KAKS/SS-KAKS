import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Header from '../Header';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
render() {
    const { errors } = this.state;
return (
    <React.Fragment style={{minHeight: window.innerHeight - 120}}>
    <Header/>
              
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Login</h1>
              <br></br>
              <div className="form-group">

                <div style={{display:"flex"}}>
                  <label htmlFor="email" style={{width:"50%"}}>Email Address:</label>
                  <span style={{color: "red", width: "50%", fontWeight: "bold", textAlign: "right"}}>
                    {errors.email}
                    {errors.emailnotfound}
                  </span>
                </div>
                
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className={classnames("form-control", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />

              </div>
              <div className="form-group">
              <div style={{display:"flex"}}>
                  <label htmlFor="email" style={{width:"50%"}}>Password:</label>
                  <span style={{color: "red", width: "50%", fontWeight: "bold", textAlign: "right"}}>
                    {errors.password}
                    {errors.passwordincorrect}
                  </span>
                </div>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder = "Password"
                  required
                  className={classnames("form-control", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
              </div>
              <br></br>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block">
              Login
              </button>
            </form>
            <br></br>
            <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
          </div>
        </div>
      </div>


      </React.Fragment>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);