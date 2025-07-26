import React, { useState, useEffect } from 'react';
import './Navbar.css';
import {
  Container,
  Nav,
  Navbar as BSNavbar,
  Form,
  Button,
} from 'react-bootstrap';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper container">
      <BSNavbar
        expand="lg"
        className={`custom-navbar ${scrolled ? 'navbar-solid' : 'navbar-transparent'}`}
        fixed="top"
      >
        <Container className="custom-navbar-header">
          {/* Logo */}
          <BSNavbar.Brand href="#" className="logo">
            Logo
          </BSNavbar.Brand>

          {/* Search bar for mobile */}
          <Form className="search-form mobile-search d-lg-none">
            <div className="custom-search-container">
              <i className="bi bi-search search-icon" aria-label="Search"></i>
              <input
                type="text"
                className="custom-search-input"
                placeholder="Search AI Games, AI Tools list, AI Insights..."
              />
            </div>
          </Form>

          {/* Hamburger */}
          <BSNavbar.Toggle aria-controls="navbar-content">
            <span className="navbar-toggler-icon"></span>
          </BSNavbar.Toggle>

          {/* Collapse Content */}
          <BSNavbar.Collapse id="navbar-content" className="justify-content-end">
            {/* Desktop Search */}
            <Form className="search-form d-none d-lg-flex align-items-center justify-content-center">
              <div className="custom-search-container">
                <i className="bi bi-search search-icon" aria-label="Search"></i>
                <input
                  type="text"
                  className="custom-search-input"
                  placeholder="Search AI Games, AI Tools list, AI Insights..."
                />
              </div>
            </Form>

            {/* Nav Links */}
            <Nav className="mx-3 nav-links">
              <Nav.Link href="#" className="fw-bold active">Home</Nav.Link>
              <Nav.Link href="#">AI Games</Nav.Link>
              <Nav.Link href="#">AI Tools</Nav.Link>
              <Nav.Link href="#">Support</Nav.Link>
              <Nav.Link href="#">Pricing</Nav.Link>
              <Nav.Link href="#">Help</Nav.Link>
            </Nav>

            {/* Auth Buttons */}
            <div className="auth-buttons">
              <Button variant="light" className="btn-signup">Sign Up</Button>
              <Button variant="light" className="btn-login">Login</Button>
            </div>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </div>
  );
}

export default Navbar;
