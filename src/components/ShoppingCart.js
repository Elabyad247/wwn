import {
  ListGroup,
  Button,
  Form,
  Image,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cart, changeQuantity, removeFromCart }) => {
  let totalPrice = 0;

  cart.forEach((element) => {
    const discountedPrice =
      element.price - element.price * (element.discountPercentage / 100);
    totalPrice += discountedPrice * element.quantity;
  });
  const isDisabled = cart.length === 0 ? "disabled" : "";
  return (
    <Container className="mt-3 py-5">
      <h3 className="my-4">Shopping Cart</h3>
      <ListGroup>
        {cart.map((item) => (
          <ListGroup.Item key={item.id}>
            <Row className="align-items-center">
              <Col xs={12} md={3} className="text-center">
                <Image src={item.thumbnail} thumbnail />
              </Col>
              <Col xs={12} md={6} className="mt-3 mt-md-0">
                <h5>{item.title}</h5>
                <p className="mb-0">
                  $
                  {(
                    item.price -
                    item.price * (item.discountPercentage / 100)
                  ).toFixed(2)}{" "}
                  x {item.quantity}
                </p>
              </Col>
              <Col
                xs={12}
                md={3}
                className="d-flex align-items-center justify-content-between mt-3 mt-md-0"
              >
                <Form.Control
                  type="number"
                  value={item.quantity}
                  min="1"
                  style={{ width: "60px", marginRight: "10px" }}
                  onChange={(event) => {
                    const newQuantity = event.target.value;
                    if (newQuantity > 0) {
                      changeQuantity(item.id, newQuantity);
                    }
                  }}
                />
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4 className="mt-4">Total: ${totalPrice.toFixed(2)}</h4>
      <Link
        to="/checkout"
        className={`btn btn-primary mt-3 ${isDisabled ? "disabled" : ""}`}
      >
        Checkout
      </Link>
    </Container>
  );
};

export default ShoppingCart;
