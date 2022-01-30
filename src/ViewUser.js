import React, { useState, useEffect } from "react";
import UserServices from "./UserServices";

function UserDetails() {
  const [CustomerDetails, setCustomerDetails] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    UserServices.getAllUsers()
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
        <h2 className="text-centre">List of Registered Users</h2>
      </center>
      <br />
      <table className="table table-bordered table-striped">
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email </th>
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
                <center>{e.email} </center>
              </td>
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
