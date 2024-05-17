import {
  ListGroup,
  Button,
  Form,
  Image,
  Row,
  Col,
  Container,
} from "react-bootstrap";

const ShoppingCart = () => {
  const cart = [
    {
      id: 1,
      title: "Product 1",
      description: "Description for product 1.",
      price: 10,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Description for product 3.",
      price: 30,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Container className="mt-3 py-5">
      <h3 className="my-4">Shopping Cart</h3>
      <ListGroup>
        {cart.map((item) => (
          <ListGroup.Item key={item.id}>
            <Row className="align-items-center">
              <Col xs={3}>
                <Image src={item.image} thumbnail />
              </Col>
              <Col xs={6}>
                <h5>{item.title}</h5>
                <p className="mb-0">
                  ${10} x {2}
                </p>
              </Col>
              <Col
                xs={3}
                className="d-flex align-items-center justify-content-end"
              >
                <Form.Control
                  type="number"
                  value={2}
                  min="1"
                  style={{ width: "60px", marginRight: "10px" }}
                />
                <Button variant="danger">Remove</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4 className="mt-4">Total: $20</h4>
      <Button variant="primary" className="mt-3">
        Checkout
      </Button>
    </Container>
  );
};

export default ShoppingCart;
