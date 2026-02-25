import { Container, Row, Col, Button } from "react-bootstrap";
import "./LatestPosts.css";

import post1 from "../../assets/images/post-item1.jpg";
import post2 from "../../assets/images/post-item2.jpg";
import post3 from "../../assets/images/post-item3.jpg";
import post4 from "../../assets/images/post-item4.jpg";

const posts = [
  {
    id: 1,
    category: "Books",
    title: "10 Must-Read Books Of The Year: Our Top Picks!",
    description:
      "Dive into the world of cutting-edge technology with our latest blog post, where we highlight five essential gadge.",
    image: post1,
  },
  {
    id: 2,
    category: "Books",
    title: "The Fascinating Realm Of Science Fiction",
    description:
      "Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative",
    image: post2,
  },
  {
    id: 3,
    category: "Books",
    title: "Finding Love In The Pages Of A Book",
    description:
      "Stay ahead of the curve with our insightful look into the rapidly evolving landscape of wearable technology.",
    image: post3,
  },
  {
    id: 4,
    category: "Books",
    title:
      "Reading For Mental Health: How Books Can Heal And Inspire",
    description:
      "In today's remote work environment, productivity is key. Discover the top apps and tools that can help you stay",
    image: post4,
  },
];

const LatestPosts = () => {
  return (
    <section className="latest-posts">
      <Container>
        <div className="section-header">
          <h2>Latest Posts</h2>
          <Button className="view-all-btn">View All</Button>
        </div>

        <Row>
          {posts.map((post) => (
            <Col lg={3} md={6} sm={12} key={post.id} className="mb-4">
              <div className="post-card">
                <div className="post-img">
                  <img src={post.image} alt={post.title} />
                </div>

                <span className="post-category">{post.category}</span>

                <h5 className="post-title">{post.title}</h5>

                <p className="post-desc">
                  {post.description}
                  <span className="read-more"> Read More</span>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LatestPosts;