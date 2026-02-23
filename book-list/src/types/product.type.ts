export interface ProductType {
  id: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  images: string[];
  discount?: number;
}
