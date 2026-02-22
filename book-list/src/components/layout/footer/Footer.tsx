import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "../../../assets/images/main-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">

          {/* Logo + About */}
          <Col lg={4} md={6} className="mb-4">
            <img src={logo} alt="logo" className="footer-logo" />
            <p className="footer-desc">
              Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
              Gravida massa volutpat aenean odio erat nullam fringilla.
            </p>

            <div className="footer-social">
              <Facebook size={18} />
              <Instagram size={18} />
              <Twitter size={18} />
              <Linkedin size={18} />
              <Youtube size={18} />
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* Help & Info */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-title">Help & Info Help</h5>
            <ul className="footer-links">
              <li>Track Your Order</li>
              <li>Returns Policies</li>
              <li>Shipping + Delivery</li>
              <li>Contact Us</li>
              <li>Faqs</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p>
              Do you have any queries or suggestions?{" "}
              <span className="footer-link">yourinfo@gmail.com</span>
            </p>

            <p>
              If you need support? Just give us a call.{" "}
              <span className="footer-link">+55 111 222 333 44</span>
            </p>
          </Col>
        </Row>
      </Container>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="mb-3 mb-md-0">
              We ship with: <span className="muted">DHL, UPS</span>
            </Col>

            <Col md={4} className="text-md-center mb-3 mb-md-0">
              Payment options: <span className="muted">Visa, MasterCard, PayPal</span>
            </Col>

            <Col md={4} className="text-md-end">
              © Copyright 2024 Bookly. HTML Template by TemplatesJungle Distributed by ThemeWagon
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;