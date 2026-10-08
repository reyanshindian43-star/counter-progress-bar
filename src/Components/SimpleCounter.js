import React from "react";
import { Container, Row, Col, Progress, Button, Input } from "reactstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProgressBarComponent = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center bg-custom vh-100"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={9} md={6} lg={5} className="text-center">
          {/* Header Title */}
          <h1 className="custom-font mb-4">Your Progress Bar is Here</h1>

          {/* Progress Bar Container */}
          <div className="mb-5 px-2">
            <Progress
              animated
              style={{ "--bs-progress-bar-bg": "var(--orange-color, #ff9a00)" }}
              className="custom-progress rounded-pill"
              value={10}
            >
              10%
            </Progress>
          </div>

          {/* Controls Row */}
          <Row className="align-items-center justify-content-center g-3">
            <Col xs={4} className="text-end">
              <Button
                className="border-0 custom-btn rounded-circle me-2"
                size="sm"
              >
                <FaMinus />
              </Button>
              <span className="control-label">Decrement</span>
            </Col>

            <Col xs={4} className="d-flex justify-content-center">
              <Input
                type="number"
                className="custom-form text-center"
                defaultValue="0"
              />
            </Col>

            <Col xs={4} className="text-start">
              <span className="control-label me-2">Increment</span>
              <Button className="border-0 custom-btn rounded-circle" size="sm">
                <FaPlus />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProgressBarComponent;
