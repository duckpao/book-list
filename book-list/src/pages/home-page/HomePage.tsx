import Carousel from '@/components/carousel/Carousel';
import Features from '@/components/features/Features';
import Selling from "@/components/selling/Selling";
import Discount from "@/components/discount/Discount";
import { Container } from "react-bootstrap"
import ProductColumns from '@/components/product-columns/ProductColumns';
import Categories from '@/components/categories/Categories';
import LatestPosts from '@/components/latestPosts/LatestPosts';
import InstagramSection from '@/components/instaSection/InstagramSection';


const HomePage = () => {
  return (
    <div>
      <Carousel />
      <Container >
        <Features />
      </Container>
      <Selling />
      <Discount />
      <ProductColumns/>
      <Categories/>

      {/* //cho hieu lam phan banner */}
      <LatestPosts/>
      <InstagramSection/>
    </div>
  );
};

export default HomePage;