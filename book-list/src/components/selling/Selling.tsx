import SellingCard from "./SellingCard"
import { productData } from "../../constants/productData"
import "./Selling.css"
import SectionTitle from '../../components/section-title/SectionTitle';
const Selling = () => {
    return (
      <>
        <section className="selling">
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
        </section>
      </>
    );
}

export default Selling