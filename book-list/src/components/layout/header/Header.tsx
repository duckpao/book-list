import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Badge,
  Modal,
  Offcanvas,
  Button,NavDropdown
} from "react-bootstrap";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/main-logo.png";
import SignIn from "./SignIn";

const Header = () => {
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-light py-2 border-bottom small">
        <Container className="d-flex justify-content-between">
          <div>Need any help? Call us 112233344455</div>
          <div>
            Summer sale discount off 60% off!
            <span
              className="text-danger ms-1 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Shop Now
            </span>
          </div>
          <div>2-3 business days delivery & free returns</div>
        </Container>
      </div>

      {/* MAIN NAVBAR */}
      <Navbar expand="lg" bg="white" className="py-3 shadow-sm">
        <Container>
          {/* Logo */}
          <Navbar.Brand onClick={() => navigate("/")}>
            <img src={logo} alt="logo" height="40" />
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            {/* Menu */}
            <Nav className="mx-auto fw-medium">
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                SHOP
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                BLOGS
              </Nav.Link>

              {/* Pages Dropdown */}
              <NavDropdown title="PAGES" id="pages-dropdown">
                <NavDropdown.Item as={Link} to="/">
                  ABOUT
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  SHOP
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  SINGLE PRODUCT
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  CART
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  CHECKOUT
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  BLOG
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  SINGLE POST
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  CONTACT
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/">
                CONTACT
              </Nav.Link>
            </Nav>

            {/* ICONS */}
            <div className="d-flex align-items-center gap-3">
              {/* Search */}
              <Search
                size={20}
                className="cursor-pointer"
                onClick={() => setShowSearch(true)}
              />

              {/* Profile */}
              <User
                size={20}
                className="cursor-pointer"
                onClick={() => setShowProfile(true)}
              />

              {/* Wishlist */}
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="link"
                  className="p-0 border-0 shadow-none"
                >
                  <Heart size={20} />
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-4" style={{ width: 320 }}>
                  <div className="d-flex justify-content-between mb-3">
                    <h6>Your Wishlist</h6>
                    <Badge bg="danger">2</Badge>
                  </div>

                  <div className="border-bottom pb-2 mb-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>The Emerald Crown</strong>
                        <div className="small text-muted">
                          Special discounted price.
                        </div>
                      </div>
                      <span className="text-danger">$2000</span>
                    </div>
                  </div>

                  <div className="border-bottom pb-2 mb-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>The Last Enchantment</strong>
                        <div className="small text-muted">
                          Perfect for enlightened people.
                        </div>
                      </div>
                      <span className="text-danger">$400</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span>Total (USD)</span>
                    <strong>$1470</strong>
                  </div>

                  <Button variant="dark" className="w-100 mb-2">
                    Add All To Cart
                  </Button>
                  <Button
                    variant="danger"
                    className="w-100"
                    onClick={() => navigate("/cart")}
                  >
                    View Cart
                  </Button>
                </Dropdown.Menu>
              </Dropdown>

              {/* Cart */}
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="link"
                  className="p-0 border-0 shadow-none position-relative"
                >
                  <ShoppingCart size={20} />
                  <span className="ms-1">(02)</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-4" style={{ width: 320 }}>
                  <div className="d-flex justify-content-between mb-3">
                    <h6>Your Cart</h6>
                    <Badge bg="danger">2</Badge>
                  </div>

                  <div className="border-bottom pb-2 mb-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>Secrets Of The Alchemist</strong>
                        <div className="small text-muted">
                          High quality in good price.
                        </div>
                      </div>
                      <span className="text-danger">$870</span>
                    </div>
                  </div>

                  <div className="border-bottom pb-2 mb-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>Quest For The Lost City</strong>
                        <div className="small text-muted">
                          Professional Quest for the Lost City.
                        </div>
                      </div>
                      <span className="text-danger">$600</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span>Total (USD)</span>
                    <strong>$1470</strong>
                  </div>

                  <Button
                    variant="dark"
                    className="w-100 mb-2"
                    onClick={() => navigate("/cart")}
                  >
                    View Cart
                  </Button>
                  <Button
                    variant="danger"
                    className="w-100"
                    onClick={() => navigate("/checkout")}
                  >
                    Go To Checkout
                  </Button>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* SEARCH OFFCANVAS */}
      <Offcanvas
        show={showSearch}
        onHide={() => setShowSearch(false)}
        placement="top"
        style={{ height: "100vh" }}
      >
        <Offcanvas.Body className="d-flex flex-column justify-content-center align-items-center">
          <input
            type="text"
            className="form-control w-50 mb-4"
            placeholder="Type and press enter"
          />
          <small className="text-muted">BROWSE CATEGORIES</small>
          <div className="fs-4 text-center mt-3">
            Romance / Thriller / Sci-fi / Cooking / Health / Lifestyle / Fiction
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* SIGN IN MODAL */}
      <Modal show={showProfile} onHide={() => setShowProfile(false)} centered>
        <Modal.Body>
          <SignIn onClose={() => setShowProfile(false)} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;