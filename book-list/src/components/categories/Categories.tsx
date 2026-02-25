import { Container, Row, Col } from "react-bootstrap";
import "./Categories.css";

import cat1 from "../../assets/images/category1.jpg";
import cat2 from "../../assets/images/category2.jpg";
import cat3 from "../../assets/images/category3.jpg";

const categories = [
  {
    id: 1,
    title: "Romance",
    image: cat1,
  },
  {
    id: 2,
    title: "Lifestyle",
    image: cat2,
  },
  {
    id: 3,
    title: "Recipe",
    image: cat3,
  },
];

const Categories = () => {
  return (
    <section className="category-section">
      <Container>
        <h2 className="section-title">Categories</h2>

        <Row>
          {categories.map((item) => (
            <Col lg={4} md={6} sm={12} key={item.id} className="mb-4">
              <div className="category-card">
                <img src={item.image} alt={item.title} />

                <div className="category-overlay" />

                <button className="category-btn">
                  {item.title}
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Categories;