import axios from "axios";

class UserServices {
  getAllCustomer() {
    return axios.get("http://localhost:8080/getalltrains");
  }

  getAllUsers() {
    return axios.get("http://localhost:8080/getallusers");
  }

  getAllPass() {
    return axios.get("http://localhost:8080/getallPassenger");
  }

  // createUser(user) {
  //   return axios.post("http://localhost:8080/api/v1/adduser", user);
  // }
  createUser(user) {
    return axios.put("http://localhost:8080/updateTrain", user);
  }
  createCarddetails(details) {
    return axios.post("http://localhost:8080/api/v1/addcreditcard", details);
  }
  deleteCustomer(cusid) {
    return axios.delete("http://localhost:8080/deleteuser" + "/" + cusid);
  }

  getEmployeedById(trainnumber, trainname) {
    return axios.put(
      "http://localhost:8080/updateTrain" + "/" + trainnumber,
      trainname
    );
  }
}
export default new UserServices();
