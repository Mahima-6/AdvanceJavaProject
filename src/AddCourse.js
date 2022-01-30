/*import react from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddCourse = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center my-3">Fill Train Details</h1>
      <Form>
        <FormGroup>
          <label for="userId">Train No</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Train Name</label>
          <Input type="text" placeholder="Enter title here" id="title" />
        </FormGroup>
        <FormGroup>
          <label for="title">Arrival City</label>
          <Input type="text" placeholder="Enter title here" id="title" />
        </FormGroup>
        <FormGroup>
          <label for="title">Departure City</label>
          <Input type="text" placeholder="Enter title here" id="title" />
        </FormGroup>
        <Container className="text-center">
          <Button color="success">Add Train</Button>
        </Container>
      </Form>
    </div>
  );
};
*/

import logo from "./logo.svg";
//import './Login.css';
import { useEffect, useState } from "react";

import axios from "axios";

function AddCourse() {
  const [loginData, setLoginData] = useState({
    trainnumber: "",
    trainname: "",
    arrivalcity: "",
    departurecity: "",
  });
  const [loginResult, setLoginResult] = useState({});

  function login(e) {
    e.preventDefault();
    //alert(JSON.stringify(loginData));
    axios
      .post("http://localhost:8080/registertrain", loginData)
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
              <b> Enter trainnumber :</b>{" "}
              <input
                className="form-control"
                name="trainnumber"
                type="trainnumber"
                value={loginData.trainnumber}
                onChange={change}
              />{" "}
              <br />
              <b> Enter trainname : </b>{" "}
              <input
                className="form-control"
                name="trainname"
                type="trainname"
                value={loginData.lastname}
                onChange={change}
              />{" "}
              <br />
              <b> Enter ArrivalCity :</b>{" "}
              <input
                className="form-control"
                name="arrivalcity"
                type="arrivalcity"
                value={loginData.email}
                onChange={change}
              />{" "}
              <br />
              <b> Enter DepartureCity :</b>{" "}
              <input
                className="form-control"
                name="departurecity"
                type="departurecity"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
