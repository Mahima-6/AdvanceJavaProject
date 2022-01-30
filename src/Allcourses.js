/*import react, { useState } from "react";
import Course from "./Course";

const Allcourses = () => {
  const [courses, setCourses] = useState([
    { title: "Java Course", discription: "this is demo course" },
    { title: "Django Course", discription: "this is demo course" },
    { title: "React Course", discription: "this is demo course" },
    { title: "Angular Course", discription: "this is demo course" },
  ]);
  return (
    <div>
      <h1 className="text-center">All Trains</h1>
      {courses.length > 0
        ? courses.map((item) => <Course course={item} />)
        : "No courses"}
    </div>
  );
};

export default Allcourses;*/

import React, { useState, useEffect } from "react";
import UserServices from "./UserServices";
import { Link, useNavigate } from "react-router-dom";

function UserDetails() {
  let navigate = useNavigate();

  const [CustomerDetails, setCustomerDetails] = useState([]);

  const authenticate1 = () => {
    navigate("/addcourse");
  };

  useEffect(() => {
    getAllCustomer();
  }, []);

  const getAllCustomer = () => {
    UserServices.getAllCustomer()
      .then((res) => {
        setCustomerDetails(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCustomer = (id) => {
    UserServices.createUser(id)
      .then((res) => {
        getAllCustomer();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCustomer = (id) => {
    UserServices.deleteCustomer(id)
      .then((res) => {
        getAllCustomer();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-centre">List of Trains</h2>
      <br />
      <table className="table table-bordered table-striped">
        <thead>
          <th>Train Number</th>
          <th>Train Name</th>
          <th>Arrival City</th>
          <th>Departure City</th>
        </thead>
        <tbody>
          {CustomerDetails.map((e) => (
            <tr key={e.trainnumber}>
              <td>{e.trainnumber}</td>
              <td>{e.trainname}</td>
              <td>{e.arrivalcity}</td>
              <td>{e.departurecity}</td>

              {
                <td>
                  {
                    <Link
                      className="btn btn-info"
                      to={"/updateTrain/${e.trainnumber}"}
                    >
                      Update
                    </Link>
                  }
                </td>
              }
              <td>
                {
                  <button
                    className="btn btn-dark"
                    onClick={() => deleteCustomer(e.trainnumber)}
                  >
                    Delete
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;
