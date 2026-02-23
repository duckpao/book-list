import SellingCard from "./SellingCard"
import { productData } from "@/constants/productData"
import SectionTitle from "@/components/section-title/SectionTitle";
import "./Selling.css"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "react-bootstrap";

const Selling = () => {
    return (
      <>
        <section className="selling">
          <Container style={{maxWidth: "1540px"}}>
            <SectionTitle content="View All" title="Best selling items" />
            <div className="row row-cols-5 g-4">
              {productData.map((product) => (
                <div className="col" key={product.id}>
                  <SellingCard
                    imageUrl={product.images[0]}
                    title={product.title}
                    author={product.author}
                    rating={product.rating}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          </Container>
          <div className="prev-selling">
            <ChevronLeft size={80} strokeWidth={1} />
          </div>
          <div className="next-selling">
            <ChevronRight size={80} strokeWidth={1} />
          </div>
        </section>
      </>
    );
}

export default Selling