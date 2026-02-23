import banner1 from '@/assets/images/banner-image.png'
import banner2 from "@/assets/images/banner-image1.png";
import banner3 from "@/assets/images/banner-image2.png";

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  button: {
    text: string;
    link: string;
  };
}

export const carouselData: CarouselItem[] = [
  {
    id: "1",
    title: "The Fine Print Book Collection",
    description: "Best Offer Save 30%. Grab it now!",
    image: banner1,
    button: {
      text: "Shop Collection",
      link: "/shop",
    },
  },
  {
    id: "2",
    title: "New Arrival Books",
    description: "Discover trending titles today.",
    image: banner2,
    button: {
      text: "Explore Now",
      link: "/shop-collection",
    },
  },
  {
    id: "3",
    title: "How Innovation Works",
    description: "Discount available. Grab it now!",
    image: banner3,
    button: {
      text: "Shop Product",
      link: "/products",
    },
  },
];
    
