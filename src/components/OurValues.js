// src/components/OurValues.js
import React from 'react';
import '.././App.css'; 
import { Container, Row, Col, Card } from 'react-bootstrap';

const OurValues = () => {
  return (
      <div className="text-center">
            <Container>
        <h2 className="component-title">Our Values</h2>
        <hr className="w-25 mx-auto tc-blue" />
        <Row>
          <Col md={6} className="text-start">
            <h3 className="fw-bold">Pledge &nbsp;<span className="fs-3">( प्रतिज्ञा )</span></h3>
            <hr className="w-25 mx-auto tc-blue my-3" />
            <p>
              We at Test Bonds commit to providing the best services for retail investors. We recognize that retail savings is not only crucial for achieving financial objectives but also for funding economic activities. Thus, protecting retail interests will always be our primary concern. We commit to supporting retail investors by offering dedicated services and required solutions.
            </p>
          </Col>
          <Col md={6}>
            <h3 className="fw-bold">Mission &nbsp;<span className="fs-3">( ध्येय )</span></h3>
            <p>
              Our mission is to offer a credible ecosystem primarily for retail investors, providing fixed income investment solutions with a clear focus on safety, liquidity, and regular cash flow.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <img src="/path/to/principle_icon.svg" alt="Ecosystem Icon" width="60" className="my-4" />
                <h4>Ecosystem</h4>
                <p>Creating sustainable mode for mobilizing long-term retail savings.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <img src="/path/to/principle_icon.svg" alt="Sustainability Icon" width="60" className="my-4" />
                <h4>Sustainability</h4>
                <p>Ensuring sustainable mobilization of retail savings.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <img src="/path/to/principle_icon.svg" alt="Governance Icon" width="60" className="my-4" />
                <h4>Governance</h4>
                <p>Ensuring robust governance framework.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurValues;
