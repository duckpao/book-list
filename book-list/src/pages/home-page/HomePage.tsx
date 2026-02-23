import Carousel from '@/components/carousel/Carousel';
import Features from '@/components/features/Features';
import Selling from "@/components/selling/Selling";
import Discount from "@/components/discount/Discount";
import { Container } from "react-bootstrap"


const HomePage = () => {
    return (
      <div>
        <Carousel />
        <Container style={{ maxWidth: "1540px" }}>
          <Features />
          <Selling />
        </Container>
        <Discount />
      </div>
    );
};

export default HomePage;