import react from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <ListGroup>
      <Link tag="a" to="/" action>
        Home
      </Link>
      <Link tag="a" to="/Addcourse" action>
        Add Course
      </Link>
      <Link tag="a" to="/view-courses" action>
        View Courses
      </Link>
      <Link tag="a" to="#!" action>
        About
      </Link>
      <Link tag="a" to="#!" action>
        Contact
      </Link>
    </ListGroup>
  );
};

export default Menus;
