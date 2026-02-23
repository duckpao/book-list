import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Features from '../../components/features/Features';
import { Container } from "react-bootstrap"
import Selling from '../../components/selling/Selling';
import SectionTitle from '../../components/section-title/SectionTitle';

const HomePage = () => {
    return (
        <div>
            <Carousel />
            <Container style={{maxWidth: "1540px"}}>
                <Features />
                <SectionTitle content='View All' title='Best selling items' />
                <Selling />
            </Container>

        </div>
    );
};

export default HomePage;