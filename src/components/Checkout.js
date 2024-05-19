import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

const CheckoutProcess = ({ cart, setCart }) => {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isConfirmed = window.confirm(
      "Are you sure you want to complete the purchase?"
    );
    if (isConfirmed) {
      setCart([]);
      alert("Purchase completed successfully!");
      window.location.href = "/";
    } else {
      alert("Purchase canceled.");
    }
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      (item.price - item.price * (item.discountPercentage / 100)) *
        item.quantity,
    0
  );

  return (
    <Container>
      <h1 className="mt-3">Checkout Process</h1>
      <hr></hr>
      <h2>Order Summary</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>
            {item.title} - {item.quantity} x $
            {(
              item.price -
              item.price * (item.discountPercentage / 100)
            ).toFixed(2)}
          </p>
        </div>
      ))}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <hr></hr>
      <Form onSubmit={handleSubmit}>
        <h2>Shipping Information</h2>
        <Row>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={shippingInfo.firstName}
                onChange={handleShippingChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={shippingInfo.lastName}
                onChange={handleShippingChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleShippingChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleShippingChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={shippingInfo.state}
                onChange={handleShippingChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="zip">
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control
                type="text"
                name="zip"
                value={shippingInfo.zip}
                onChange={handleShippingChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <hr></hr>
        <h2>Payment Information</h2>
        <Row>
          <Col>
            <Form.Group controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="number"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handlePaymentChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="cvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="number"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handlePaymentChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group controlId="expirationDate">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              type="date"
              name="expirationDate"
              value={paymentInfo.expirationDate}
              onChange={handlePaymentChange}
              required
            />
          </Form.Group>
        </Row>

        <hr></hr>
        <Row className="mx-5">
          <Button variant="primary" className="mt-2 mb-5" type="submit">
            Complete Purchase
            <FontAwesomeIcon icon={faHandHoldingDollar} className="mx-2" />
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default CheckoutProcess;
