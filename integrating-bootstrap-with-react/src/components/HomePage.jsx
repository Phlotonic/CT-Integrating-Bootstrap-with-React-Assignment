import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from '../assets/welcome-image.png'; 

function HomePage() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', color: '#343a40', border: '1px solid #dee2e6', padding: '20px' }}> 
      <h1>Welcome to Our E-Commerce App</h1>
      <p>The products are strong with this one.</p>

      <Image src={welcomeImage} fluid alt="Welcome" /> 

    <br/>

      <Button 
        variant="primary" 
        size="lg" 
        style={{ marginTop: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
      >
        Shop Now
      </Button>

      <Card style={{ marginTop: '20px' }}>
        <Card.Body>
          <Card.Title>Featured Product</Card.Title>
          <Card.Text>
            Check out our latest and greatest product!
          </Card.Text>
          <Button variant="secondary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomePage;