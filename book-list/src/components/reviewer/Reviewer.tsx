import "./Reviewer.css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { carouselData } from "@/constants/carouselData";
import { reviewerData } from "@/constants/reviewerData";

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      size={12}
      fill={index < rating ? "#facc15" : "none"}
      stroke="#facc15"
    />
  ));
};

const Reviewer = () => {
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


  return (
    <div className="reviewer">
      <Container>
        <div className="reviewer-carousel">
          <div className="reviewer-viewport">
            <h1 className="text-center rv-title">Customer Reviewer</h1>
            <div
              className="reviewer-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviewerData.map((item) => (
                <div key={item.id} className="reviewer-slide">
                  <div className="reviewer-content">
                    <p className="m-0">{item.comment}</p>
                    <div className="reviewer-stars">
                      {renderStars(item.rating)}
                    </div>
                    <p className="m-0">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="reviewer-prev" onClick={handlePrev}>
        <ChevronLeft size={80} strokeWidth={1} />
      </div>

      <div className="reviewer-next" onClick={handleNext}>
        <ChevronRight size={80} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Reviewer;
