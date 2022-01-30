/*import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

export default function Login() {
  let navigate = useNavigate();
  const authenticate = () => {
    navigate("/home");
  };

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    axios.post("http://localhost:8080/login", formValues).then((response) => {
      alert(JSON.stringify(response.data));
      setFormValues(response.data);

      alert(response.data.message);
    });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex1 = /[3-9]/;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!regex1.test(values.password)) {
      errors.password =
        "your password should have more than 3 digits and less than 9 digits";
    }

    return errors;
  };

  return (
    <div className="container-fluid train">
      <div
        className="row  align-items-center justify-content-end"
        style={{ height: "100vh" }}
      >
        <div className="col-12 col-md-6   p-4 ">
          <form onSubmit={handleSubmit}>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="field">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>
              <div className="mb-2">
                <input
                  type="button"
                  value="Login"
                  className="btn btn-lg btn-warning w-100"
                  onClick={authenticate}
                />
              </div>
              <div className="text-center mt-1">
                <b>Don't have an account? </b>
                <Link to="/register" className="text-info ">
                  Register Here...
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}*/

import logo from "./logo.svg";
//import './Login.css';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let navigate = useNavigate();
  const authenticate = () => {
    navigate("/home");
  };

  const Authen = () => {
    navigate("/admin");
  };
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginResult, setLoginResult] = useState({});

  function login(e) {
    e.preventDefault();
    //alert(JSON.stringify(loginData));
    axios.post("http://localhost:8080/login", loginData).then((response) => {
      //alert(response.data);
      console.log(response.data);
      alert(JSON.stringify(response.data));
      setLoginResult(response.data);
      if (response.data == "Kartik") {
        Authen();
      } else {
        authenticate();
      }

      console.log(response.data);
      // alert(response.data.message);
      sessionStorage.setItem("customerId", response.data);
      sessionStorage.setItem("customerName", response.data);
    });
  }

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setLoginData({ ...loginData, [name]: val });
  }

  return (
    <div className="container-fluid train">
      <div
        className="row align-items-center justify-content-end"
        style={{ height: "100vh" }}
      >
        <div className="col-12 col-md-6   p-4 ">
          <div>
            <form onSubmit={login}>
              <b> Enter email : </b>
              <input
                className="form-control"
                name="email"
                type="email"
                value={loginData.email}
                onChange={change}
              />{" "}
              <br />
              <b> Enter password : </b>
              <input
                className="form-control"
                name="password"
                type="password"
                value={loginData.password}
                onChange={change}
              />{" "}
              <br />
              <div className="mb-2">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-lg btn-warning w-100"
                />
              </div>
              {/* <button variant="warning" type="submit">
                  Login
                </button> */}
              <div className="text-center mt-1">
                <b>Don't have an account? </b>
                <Link to="/register" className="text-info ">
                  Register Here...
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
