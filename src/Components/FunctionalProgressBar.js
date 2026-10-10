import React, { useState } from "react";
import { Container, Row, Col, Progress, Button, Input } from "reactstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

const FunctionalProgressBar = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  console.log("count: ", count);

  const Increment = () => {
    if (count < 100) {
      setCount(() => {
        return count + 1;
      });
    }
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(() => {
        return count - 1;
      });
    }
  };

  const HandleInputChange = (e) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);

    console.log("value: ", value);
    if (value === "" || (value >= 0 && value <= 100)) {
      setCount(value);
    }
  };

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
              value={count}
            >
              {count}%
            </Progress>
          </div>

          {/* Controls Row */}
          <Row className="align-items-center justify-content-center g-3">
            <Col xs={4} className="text-end">
              <Button
                className="border-0 custom-btn rounded-circle me-2"
                size="sm"
                onClick={Decrement}
              >
                <FaMinus />
              </Button>
              <span className="control-label">Decrement</span>
            </Col>

            <Col xs={4} className="d-flex justify-content-center">
              <Input
                type="number"
                value={count}
                className="custom-form text-center"
                onChange={HandleInputChange}
              />
            </Col>

            <Col xs={4} className="text-start">
              <span className="control-label me-2">Increment</span>
              <Button
                className="border-0 custom-btn rounded-circle"
                size="sm"
                onClick={Increment}
              >
                <FaPlus />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FunctionalProgressBar;
