import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import notFoundImage from '../assets/notfound.jpg';
function NotFound() {
  return (
    <Container className="mt-5"> 
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Image src={notFoundImage} fluid alt="404 Not Found" />
        </Col>
        <Col md={6}>
          <h1 className="text-primary">404 - Page Not Found</h1>
          <p className="text-muted">
            Oops! The page you are looking for doesn't exist.
          </p>
          <Button variant="primary" as="a" href="/">Back to Home</Button> 
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;