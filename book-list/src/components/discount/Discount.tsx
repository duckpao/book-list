import "./Discount.css"
import Banner from '@/assets/images/banner-image3.png'
import { Container, Row, Col } from "react-bootstrap"
import Countdown from "../countdown/CountDown";
import Button from "../button/Button";

const Discount = () => {
  return (
    <div className="discount-banner">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={12}>
            <div className="discount-img">
              <img src={Banner} alt="" />
            </div>
          </Col>

          <Col lg={5} md={12}>
            <div className="countdown-timer">
              <h2 className="countdown-title">
                30% Discount on all items. Hurry Up !!!
              </h2>
              <Countdown targetDate="2026-03-30T00:00:00" />
              <div style={{ width: "230px" }}>
                <Button content="Shop Collection" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discount;