import "./Carousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container, Image } from "react-bootstrap";
import Button from "../button/Button";
import { useState } from "react";
import { carouselData } from "../../constants/carouselData";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1,
    );
  };

  const currentItem = carouselData[currentIndex];

  return (
    <div className="banner">
      <Container>
        <div className="carousel">
          <div className="carousel-viewport">
            <div className="carousel-track">
              <div key={currentItem.id} className="slide">
                <div className="carousel-content">
                  <h1>{currentItem.title}</h1>
                  <p>{currentItem.description}</p>
                  <div className="btn-jump">
                    <Button content={currentItem.button.text} />
                  </div>
                </div>
                <div className="carousel-img">
                  <Image className="img-custom" src={currentItem.image} fluid />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="prev" onClick={handlePrev}>
        <ChevronLeft size={75} strokeWidth={1} />
      </div>
      <div className="next" onClick={handleNext}>
        <ChevronRight size={80} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Carousel;
