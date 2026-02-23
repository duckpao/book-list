import SellingCard from "./SellingCard"
import { productData } from "../../constants/productData"
import "./Selling.css"

const Selling = () => {
    return (
        <section className="selling">
            {productData.map((product) => (
                <SellingCard
                    key={product.id}
                    imageUrl={product.images[0]}
                    title={product.title}
                    author={product.author}
                    rating={product.rating}
                    price={product.price}
                />
            ))}
        </section>
    )
}

export default Selling