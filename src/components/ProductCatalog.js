import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import CategoryFilter from "./CategoryFilter";
import "./ProductCatalog.css";
import { Link } from "react-router-dom";

const ProductCatalog = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCatgory] = useState("All");

  const handleSelect = (category) => {
    setSelectedCatgory(category);
  };
  useEffect(() => {
    setFilteredProducts(
      selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory)
    );
  }, [selectedCategory, products]);

  return (
    <>
      <h1 className="text-center my-4">Product Catalog</h1>
      <Container>
        <Row>
          <Col xs={12} md={3} className="mb-4">
            <CategoryFilter
              selected={selectedCategory}
              onSelect={handleSelect}
            />
          </Col>
          <Col xs={12} md={9}>
            <Row>
              {filteredProducts.map((product) => (
                <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
                  <Link className="product-card" to={`/product/${product.id}`}>
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
                        <small className="text-muted">
                          ${product.price.toFixed(2)}
                        </small>
                      </Card.Footer>
                    </Card>
                  </Link>
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
