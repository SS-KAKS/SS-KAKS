import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Header from '../Header';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
componentWillReceiveProps(nextProps) {
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
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
this.props.registerUser(newUser, this.props.history); 
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
                  <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                  <br></br>
                  <div className="form-group">

                    <div style={{display:"flex"}}>
                      <label htmlFor="email" style={{width:"50%"}}>Name:</label>
                      <span style={{color: "red", width: "50%", fontWeight: "bold", textAlign: "right"}}>
                        {errors.name}
                      </span>
                    </div>

                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      placeholder = "Name"
                      className={classnames("form-control", {
                        invalid: errors.name
                      })}
                    />

                  </div>
                  <div className="form-group">
                    <div style={{display:"flex"}}>
                      <label htmlFor="email" style={{width:"50%"}}>Email Address:</label>
                      <span style={{color: "red", width: "50%", fontWeight: "bold", textAlign: "right"}}>
                        {errors.email}
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
                        invalid: errors.email
                      })}
                    />

                  </div>
                  <div className="form-group">
                    <div style={{display:"flex"}}>
                      <label htmlFor="email" style={{width:"25%"}}>Password:</label>
                      <span style={{color: "red", width: "75%", fontWeight: "bold", textAlign: "right"}}>
                        {errors.password}
                      </span>
                    </div>

                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      placeholder = "Password"
                      className={classnames("form-control", {
                        invalid: errors.password
                      })}
                    />
                  </div>
                  <div className="form-group">

                    <div style={{display:"flex"}}>
                      <label htmlFor="email" style={{width:"50%"}}>Confirm Password:</label>
                      <span style={{color: "red", width: "50%", fontWeight: "bold", textAlign: "right"}}>
                        {errors.password2}
                      </span>
                    </div>

                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      placeholder="Confirm Password"
                      className={classnames("form-control", {
                        invalid: errors.password2
                      })}
                    />
                  </div>
                  <br></br>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Register
                  </button>
                </form>
                <br></br>
                <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
              </div>
            </div>
          </div>

      </React.Fragment>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));