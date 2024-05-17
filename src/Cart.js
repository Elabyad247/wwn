// ShoppingCart.js
import React from 'react';
import { ListGroup, Button, Form, Container } from 'react-bootstrap';

const ShoppingCart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const handleQuantityChange = (e, product) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      onUpdateQuantity(product, quantity);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <h3 className="my-4">Shopping Cart</h3>
      <ListGroup>
        {cartItems.map(item => (
          <ListGroup.Item key={item.id}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.title}</h5>
                <p className="mb-0">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <div>
                <Form.Control
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(e, item)}
                  style={{ width: '60px', display: 'inline', marginRight: '10px' }}
                />
                <Button variant="danger" onClick={() => onRemoveItem(item)}>Remove</Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4 className="mt-4">Total: ${totalPrice.toFixed(2)}</h4>
    </Container>
  );
};

export default ShoppingCart;
