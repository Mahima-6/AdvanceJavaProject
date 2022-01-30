import React, { useState, useEffect } from "react";
import UserServices from "./UserServices";

function UserDetails() {
  const [CustomerDetails, setCustomerDetails] = useState([]);

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
      <center>
        {" "}
        <h2 className="text-centre">List of Trains</h2>
      </center>
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
            <tr key={e.id}>
              <td>{e.trainnumber}</td>
              <td>{e.trainname}</td>
              <td>{e.arrivalcity}</td>
              <td>{e.departurecity}</td>

              <td>
                {/* <button
                  className="btn btn-dark"
                  onClick={() => deleteCustomer(e.id)}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;
