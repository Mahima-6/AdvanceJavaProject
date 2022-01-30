import logo from "./logo.svg";
//import './Login.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BookTicket() {
  const [loginData, setLoginData] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    aadhar: "",
    email: "",
    phone: "",
    trainnumber: "",
  });
  const [loginResult, setLoginResult] = useState({});

  function login(e) {
    e.preventDefault();
    //alert(JSON.stringify(loginData));
    axios
      .post("http://localhost:8080/registerpass", loginData)
      .then((response) => {
        //alert(response.data);
        alert(JSON.stringify(response.data));
        setLoginResult(response.data);

        alert(response.data.message);
        //sessionStorage.setItem("customerId", response.data.firstname);
        // sessionStorage.setItem("customerName", response.data.lastname);
      });
  }

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setLoginData({ ...loginData, [name]: val });
    setLoginResult("");
  }

  return (
    <div className="container-fluid  p-0 m-0 colors">
      <div className="row align-items-center justify-content-center">
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
              <b> Enter MiddleName : </b>
              <input
                className="form-control"
                name="middlename"
                type="middlename"
                value={loginData.middlename}
                onChange={change}
              />{" "}
              <br />
              <b> Enter AAdhar Number : </b>
              <input
                className="form-control"
                name="aadhar"
                type="aadhar"
                value={loginData.aadhar}
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
              <b> Enter Phone number : </b>
              <input
                className="form-control"
                name="phone"
                type="number"
                value={loginData.phone}
                onChange={change}
              />{" "}
              <br />
              <b> Enter Train Number : </b>
              <input
                className="form-control"
                name="trainnumber"
                type="trainnumber"
                value={loginData.trainnumber}
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
                <b>Back to Home </b>
                <Link to="/home" className="text-info">
                  Home..
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTicket;
