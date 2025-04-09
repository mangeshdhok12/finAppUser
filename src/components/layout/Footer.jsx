import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-white py-4 d-flex flex-lg-column rowTop" id="kt_footer">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Copyright Section */}
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted font-weight-bold mr-2"></span>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark-75 text-hover-primary">
            © 2022. ManaRecharge Private Limited. All Rights Reserved
          </a>
        </div>
        {/* Navigation Links */}
        <Nav className="nav-dark order-1 order-md-2">
          <Nav.Item>
            <Nav.Link as={Link} to="/about" className="pr-3 pl-0">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/team" className="pr-3 pl-0">
              Team
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" className="pr-3 pl-0">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </footer>
  );
};

export default Footer;
