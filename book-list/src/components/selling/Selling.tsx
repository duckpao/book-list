import { useState } from "react";
import SellingCard from "./SellingCard";
import { productData } from "@/constants/productData";
import SectionTitle from "@/components/section-title/SectionTitle";
import "./Selling.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";

const Selling = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? productData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === productData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="selling">
      <Container>
        <SectionTitle content="View All" title="Best selling items" />

        <Row className="d-none d-md-flex selling-row">
          {productData.map((product) => (
            <Col key={product.id} className="selling-col">
              <SellingCard
                imageUrl={product.images[0]}
                title={product.title}
                author={product.author}
                rating={product.rating}
                price={product.price}
              />
            </Col>
          ))}
        </Row>

        <div className="d-block d-md-none">
          <div className="slider-wrapper">
            <SellingCard
              imageUrl={productData[currentIndex].images[0]}
              title={productData[currentIndex].title}
              author={productData[currentIndex].author}
              rating={productData[currentIndex].rating}
              price={productData[currentIndex].price}
            />
          </div>
        </div>
        <div className="next-selling" onClick={handleNext}>
          <ChevronRight size={80} strokeWidth={1} />
        </div>
        <div className="prev-selling" onClick={handlePrev}>
          <ChevronLeft size={80} strokeWidth={1} />
        </div>
      </Container>
    </section>
  );
};

export default Selling;
