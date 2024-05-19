import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Container, Row, Col, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetails.css";

const ProductDetails = ({ addToCart }) => {
  const params = useParams();
  const prodURL = "https://dummyjson.com/products";
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`${prodURL}/${params.id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.id]);
  const [mainImage, setMainImage] = useState(product.thumbnail);
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };
  const discountedPrice =
    product.price - product.price * (product.discountPercentage / 100);

  const renderStarRating = () => {
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<BsStarHalf key={fullStars} />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<BsStar key={fullStars + i + 1} />);
    }

    return stars;
  };
  return (
    <Container className="mt-5 py-5">
      <Row>
        <Col md={6}>
          <img
            src={mainImage || product.thumbnail}
            alt={product.title}
            className="img-fluid"
          />
          <div className="d-flex justify-content-between mt-3 flex-wrap">
            {product.images &&
              product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} ${index}`}
                  className="img-thumbnail"
                  style={{ width: "65px", height: "65px" }}
                  onClick={() => handleThumbnailClick(image)}
                />
              ))}
          </div>
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <h6>Brand: {product.brand}</h6>
          <s className="text-danger">
            Price: ${(product.price && product.price.toFixed(2)) || 0}
          </s>
          <h4 className="text-success">
            Discounted Price: ${discountedPrice.toFixed(2)}
          </h4>
          <p>Rating: {renderStarRating()}</p>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <Button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
