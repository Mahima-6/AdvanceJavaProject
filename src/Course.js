import react from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardFooter,
  Button,
  Container,
} from "reactstrap";

const Course = ({ course }) => {
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger ">Delete</Button>
          <span>
            <Button color="warning ml-3">Update</Button>
          </span>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
