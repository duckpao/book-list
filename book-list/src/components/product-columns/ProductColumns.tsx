import { Container, Row, Col, Card } from "react-bootstrap";
import "./ProductColumns.css";
import product1 from "../../assets/images/product-item1.png";
import product2 from "../../assets/images/product-item2.png";
import product3 from "../../assets/images/product-item3.png";
import product4 from "../../assets/images/product-item4.png";
import product5 from "../../assets/images/product-item5.png";
import product6 from "../../assets/images/product-item6.png";
import product7 from "../../assets/images/product-item7.png";
import product8 from "../../assets/images/product-item8.png";
import product9 from "../../assets/images/product-item9.png";
import product10 from "../../assets/images/product-item10.png";
import product11 from "../../assets/images/product-item11.png";
import product12 from "../../assets/images/product-item12.png";

interface Product {
  id: number;
  title: string;
  author: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
}

interface ColumnProps {
  title: string;
  items: Product[];
}

const ProductColumn = ({ title, items }: ColumnProps) => {
  return (
    <Card className="product-column">
      <Card.Body>
        <h3 className="column-title">{title}</h3>

        {items.map((item, index) => (
          <div key={item.id}>
            <div className="product-row">
              <img src={item.image} alt={item.title} />

              <div className="product-info">
                <h6 className="book-title">{item.title}</h6>
                <p className="author">{item.author}</p>

                <div className="rating">
                  {"★".repeat(item.rating)}
                </div>

                <div className="price">
                  {item.oldPrice && (
                    <span className="old-price">
                      ${item.oldPrice}
                    </span>
                  )}
                  <span className="new-price">
                    ${item.price}
                  </span>
                </div>
              </div>
            </div>

            {index !== items.length - 1 && (
              <hr className="divider" />
            )}
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

const ProductColumns = () => {
  return (
    <section className="product-section">
      <Container>
        <Row>
          <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
            <ProductColumn
              title="Featured"
              items={[
                {
                  id: 1,
                  title: "Echoes Of The Ancients",
                  author: "Lauren Asher",
                  price: 870,
                  image: product1,
                  rating: 5,
                },
                {
                  id: 2,
                  title: "The Midnight Garden",
                  author: "Lauren Asher",
                  price: 870,
                  image: product2,
                  rating: 5,
                },
                {
                  id: 3,
                  title: "Shadow Of The Serpent",
                  author: "Lauren Asher",
                  price: 870,
                  image: product3,
                  rating: 5,
                },
              ]}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
            <ProductColumn
              title="Latest Items"
              items={[
                {
                  id: 1,
                  title: "Whispering Winds",
                  author: "Lauren Asher",
                  price: 870,
                  image: product4,
                  rating: 5,
                },
                {
                  id: 2,
                  title: "The Forgotten Realm",
                  author: "Lauren Asher",
                  price: 870,
                  image: product5,
                  rating: 5,
                },
                {
                  id: 3,
                  title: "Moonlit Secrets",
                  author: "Lauren Asher",
                  price: 870,
                  image: product6,
                  rating: 5,
                },
              ]}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
            <ProductColumn
              title="Best Reviewed"
              items={[
                {
                  id: 1,
                  title: "The Crystal Key",
                  author: "Lauren Asher",
                  price: 870,
                  image: product7,
                  rating: 5,
                },
                {
                  id: 2,
                  title: "Starlight Sonata",
                  author: "Lauren Asher",
                  price: 870,
                  image: product8,
                  rating: 5,
                },
                {
                  id: 3,
                  title: "Tales Of The Enchanted Forest",
                  author: "Lauren Asher",
                  price: 870,
                  image: product9,
                  rating: 5,
                },
              ]}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
            <ProductColumn
              title="On Sale"
              items={[
                {
                  id: 1,
                  title: "The Phoenix Chronicles",
                  author: "Lauren Asher",
                  price: 999,
                  oldPrice: 1666,
                  image: product10,
                  rating: 5,
                },
                {
                  id: 2,
                  title: "Dreams Of Avalon",
                  author: "Lauren Asher",
                  price: 410,
                  oldPrice: 500,
                  image: product11,
                  rating: 5,
                },
                {
                  id: 3,
                  title: "Legends Of The Dragon Isles",
                  author: "Lauren Asher",
                  price: 500,
                  oldPrice: 600,
                  image: product12,
                  rating: 5,
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductColumns;