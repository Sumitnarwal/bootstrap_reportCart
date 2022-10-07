import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ReportCard = () => {
  return (
    <>
      <Container
        className="border primary mt-4  border-secondary"
        id="iconBorder"
      >
        <Row className="mt-2">
          <Col className="text-center border-end border-secondary">
            <h3 style={{ color: "red" }}>
              First Terminal Examination 2018-2019
            </h3>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="text-center border-end border-secondary">
            <h3>Academic Performance</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <h5 style={{ color: "blue" }}>
                First Terminal Examination 2018-2019
              </h5>
            </Row>
          </Col>
          <Col>
            <h5 style={{ color: "blue" }}>Part-II :-Co-Scholastic Areas</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReportCard;
