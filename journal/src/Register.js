import React from "react";
import Joi from "joi-browser";
import Form from "./components/Form/Form";
import * as userService from "./services/userService";
import auth from "./services/authService";

import "./Register.css";
import "./Login.css";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  
  // Creating schema for data validation
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };


  // Submit Handler for giving authorisation rules to the user and setting the token for
  // the first and getting to the login page after registering.
  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]); // Login with JSON Web Token
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="Register__container">
        <form className="RegisterForm" onSubmit={this.handleSubmit}>
          <h1 className="Register__title">Register</h1>
          <div className="Input">
            <div className="Input__username">
              {this.renderInput("username", "Username")}
            </div>

            <div className="Input__password">
              {this.renderInput("password", "Password", "password")}
            </div>

            <div className="Input__name">
              {this.renderInput("name", "Name")}
            </div>
          </div>

          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
