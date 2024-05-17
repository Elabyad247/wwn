import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "./ProductCatalog.css";

const ProductCatalog = () => {
  const apiUrl = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1 className="text-center my-4">Product Catalog</h1>
      <Container>
        <Row>
          <Col xs={12} md={3} className="mb-4">
            <Sidebar />
          </Col>
          <Col xs={12} md={9}>
            <Row>
              {products.map((product) => (
                <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={product.images[0]}
                      className="product-image"
                    />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">${product.price}</small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductCatalog;
