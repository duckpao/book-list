import Product1 from "@/assets/images/product-item1.png"
import Product2 from "@/assets/images/product-item2.png"
import Product3 from "@/assets/images/product-item3.png"
import Product4 from "@/assets/images/product-item4.png"
import Product5 from "@/assets/images/product-item5.png"
import type { ProductType } from "@/types/product.type"


export const productData: ProductType[] = [
  {
    id: "1",
    title: "Heavently Bodies",
    author: "Lauren Asher",
    price: 125000,
    rating: 5,
    images: [Product1],
    discount: 10,
  },
  {
    id: "2",
    title: "Heartland Stars",
    author: "Lauren Asher",
    price: 125000,
    rating: 5,
    images: [Product2],
    discount: 10,
  },
  {
    id: "3",
    title: "His Saving Grace",
    author: "Lauren Asher",
    price: 125000,
    rating: 5,
    images: [Product3],
    discount: 10,
  },
  {
    id: "4",
    title: "My Dearest Darkest",
    author: "Lauren Asher",
    price: 125000,
    rating: 5,
    images: [Product4],
    discount: 10,
  },
  {
    id: "5",
    title: "The Story Of Success",
    author: "Lauren Asher",
    price: 125000,
    rating: 5,
    images: [Product5],
    discount: 10,
  },

];

