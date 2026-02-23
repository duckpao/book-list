import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Features from '../../components/features/Features';
import { Container } from "react-bootstrap"
import Selling from '../../components/selling/Selling';

import Discount from '../../components/discount/Discount';

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