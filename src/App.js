/*import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import BookTrain from "./BookTrain";
import Home from "./Home";
import TrainAvailability from "./TrainAvailability.js";
import Admin from "./Admin";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/home" element={<Home />} />
        <Route path="/booktrain" element={<BookTrain />} />
        <Route path="/checktrain" element={<TrainAvailability />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}*/

import React from "react";
import "./App.css";
import { Button, Col, Container, Row, component } from "reactstrap";
import Home2 from "./Home2";
import Course from "./Course";
import Allcourses from "./Allcourses";
import AddCourse from "./AddCourse";
import Header from "./Header";
import Menus from "./Menus";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import BookTrain from "./BookTrain";
import TrainAvailability from "./TrainAvailability";
import { ToastContainer, toast } from "react-toastify";
import AddCourse2 from "./AddCourse2";
import Updatecourse from "./Updatecourse";
import ViewUser from "./ViewUser";
import ViewPass from "./ViewPass";

function App() {
  const btnHandle = () => {
    toast.success("done", { position: "top-center" });
  };
  return (
    <>
      <div>
        <Routes>
          <Route path="/admin" element={<Home2 />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/addcourse" element={<AddCourse />}></Route>
          <Route path="/allcourses" element={<Allcourses />}></Route>

          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/updateTrain/:trainnumber"
            element={<Updatecourse />}
          ></Route>
          <Route path="/booktrain" element={<BookTrain />} />
          <Route path="/checktrain" element={<TrainAvailability />} />
          <Route path="/getallusers" element={<ViewUser />}></Route>
          <Route path="/getallpass" element={<ViewPass />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
