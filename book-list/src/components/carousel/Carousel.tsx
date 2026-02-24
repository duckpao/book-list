import "./Carousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container, Image } from "react-bootstrap";
import Button from "../button/Button";
import { useState } from "react";
import { carouselData } from "@/constants/carouselData";
import { useEffect } from "react";

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


  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="banner">
      <Container>
        <div className="carousel">
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselData.map((item) => (
                <div key={item.id} className="slide">
                  <div className="carousel-content">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <div className="btn-jump">
                      <Button content={item.button.text} />
                    </div>
                  </div>

                  <div className="carousel-img">
                    <Image className="img-custom" src={item.image} fluid />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="prev" onClick={handlePrev}>
        <ChevronLeft size={80} strokeWidth={1} />
      </div>
      <div className="next" onClick={handleNext}>
        <ChevronRight size={80} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Carousel;
