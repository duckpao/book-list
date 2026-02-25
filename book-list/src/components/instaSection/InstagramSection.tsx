import { Container, Row, Col } from "react-bootstrap";
import "./InstagramSection.css";

import insta1 from "../../assets/images/insta-item1.jpg";
import insta2 from "../../assets/images/insta-item2.jpg";
import insta3 from "../../assets/images/insta-item3.jpg";
import insta4 from "../../assets/images/insta-item4.jpg";
import insta5 from "../../assets/images/insta-item5.jpg";
import insta6 from "../../assets/images/insta-item6.jpg";

const images = [
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
];

const InstagramSection = () => {
  return (
    <section className="instagram-section">
      <Container>
        <h2 className="instagram-title text-center">Instagram</h2>

        <Row className="g-4">
          {images.map((img, index) => (
            <Col lg={2} md={4} sm={6} xs={6} key={index}>
              <div className="insta-card">
                <img src={img} alt="instagram" />
                <div className="insta-overlay" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default InstagramSection;