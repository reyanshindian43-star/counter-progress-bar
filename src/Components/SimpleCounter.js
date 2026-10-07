import React from "react";
import { Button, Col, Container, Input, Progress, Row } from "reactstrap";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function SimpleCounter() {
  return (
    <div className="justify-content-center align-items-center bg-custom vh-100">
      <Container fluid className="bg-custom vh-100 text-white">
        <Row className="justify-content-center">
          <p className="custom-font">Your Progress Bar is Here</p>
          <Col sm="9" md="6" lg="6">
            <Progress
              animated
              style={{ "--bs-progress-bar-bg": "orange" }}
              className="my-4 custom-progress rounded-pill"
              value={10}
            >
              10 %
            </Progress>
          </Col>
        </Row>
        <Col sm="9">
          <Row xs={3} className="justify-content-center align-items-center">
            <Col className="text-dark text-start">
              <Button
                className="text-dark border-0 custom-btn rounded-circle "
                size="sm"
              >
                <FaPlus />
              </Button>
              Decrement
            </Col>
            <Col>
              <Input type="number" className="custom-form" value="0" />
            </Col>
            <Col className="text-dark text-end">
              <Button
                className="text-dark border-0 custom-btn rounded-circle"
                size="sm"
              >
                <FaMinus />
              </Button>
              Increment
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default SimpleCounter;
