/*import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();

  const authenticate = () => {
   // navigate("/login");
  };
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
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

    if (isSubmit) {
      const url = "http://localhost:8080/registeruser";
      const body = {
        firstname: formValues.firstname,
        lastname: formValues.lastname,
        email: formValues.email,
        password: formValues.password,
      };
      await axios.post(url, body).then((response) => {
        
      });
    }
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

    const regex2 = /^((\+)?(\d{2}[-]))?(\d{10}){1}?$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.mobNo) {
      errors.mobNo = "mobNo is required!";
    } else if (!regex2.test(values.mobNo)) {
      errors.mobNo = "This is not a valid mobNo format!";
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
    <div className="container-fluid  p-0 m-0 colors">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Registered in successfully</div>
      ) : (
        <p></p>
      )}

      <div className="row align-items-center justify-content-center">
        <div className="col-sm-12 col-md-6 ">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center">Registration</h1>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>FirstName</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstname"
                  placeholder="FirstName"
                  value={formValues.firstname}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.firstname}</p>
              <div className="field">
                <label>lastname</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formValues.lastname}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.lastname}</p>
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
                  value="Register"
                  className="btn btn-lg btn-warning w-100"
                  onClick={authenticate}
                />
              </div>
              <div className="text-center">
                <b>If you already have an account, just </b>
                <Link to="/login" className="text-info">
                  Login here..
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
*/

import logo from "./logo.svg";
//import './Login.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [loginData, setLoginData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [loginResult, setLoginResult] = useState({});

  function login(e) {
    e.preventDefault();
    //alert(JSON.stringify(loginData));
    axios
      .post("http://localhost:8080/registeruser", loginData)
      .then((response) => {
        //alert(response.data);
        alert(JSON.stringify(response.data));
        setLoginResult(response.data);

        alert(response.data.message);
        sessionStorage.setItem("customerId", response.data.firstname);
        sessionStorage.setItem("customerName", response.data.lastname);
      });
  }

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setLoginData({ ...loginData, [name]: val });
  }

  return (
    <div className="container-fluid  p-0 m-0 colors">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-12 col-md-6 ">
          <div>
            <h2>{loginResult.message}</h2>
            <form onSubmit={login}>
              <b> Enter FirstName : </b>
              <input
                className="form-control"
                name="firstname"
                type="firstname"
                value={loginData.firstname}
                onChange={change}
              />{" "}
              <br />
              <b> Enter LastName : </b>
              <input
                className="form-control"
                name="lastname"
                type="lastname"
                value={loginData.lastname}
                onChange={change}
              />{" "}
              <br />
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
              <button
                className="btn btn-lg btn-outline-danger w-100"
                type="submit"
              >
                Register
              </button>
              <div className="text-center">
                <b>If you already have an account, just </b>
                <Link to="/login" className="text-info">
                  Login here..
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
