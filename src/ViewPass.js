import React, { useState, useEffect } from "react";
import UserServices from "./UserServices";

function UserDetails() {
  const [CustomerDetails, setCustomerDetails] = useState([]);

  useEffect(() => {
    getAllPass();
  }, []);

  const getAllPass = () => {
    UserServices.getAllPass()
      .then((res) => {
        setCustomerDetails(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   const deleteCustomer = (id) => {
  //     UserServices.deleteCustomer(id)
  //       .then((res) => {
  //         getAllCustomer();
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  return (
    <div className="container">
      <center>
        {" "}
        <h2 className="text-centre">List of Passengers</h2>
      </center>
      <br />
      <table className="table table-bordered table-striped">
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Middle Name</th>
          <th>Aadhar Number</th>
          <th>Phone Number</th>

          <th>Email </th>
          <th>Train Number</th>
        </thead>
        <tbody>
          {CustomerDetails.map((e) => (
            <tr key={e.id}>
              {" "}
              <td>
                <center>{e.firstname}</center>
              </td>{" "}
              <td>
                {" "}
                <center>{e.lastname}</center>
              </td>{" "}
              <td>
                {" "}
                <center>{e.middlename}</center>
              </td>{" "}
              <td>
                {" "}
                <center>{e.aadhar}</center>
              </td>{" "}
              <td>
                {" "}
                <center>{e.email}</center>
              </td>{" "}
              <td>
                {" "}
                <center>{e.phone}</center>
              </td>{" "}
              <td>
                {" "}
                <center>{e.trainnumber}</center>
              </td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;
