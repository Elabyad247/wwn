import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HotSales.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const HotSales = ({ products }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const startIndex = Math.floor(Math.random() * (products.length - 4));
  const hotProducts = products.slice(startIndex, startIndex + 5);
  return (
    <div className="container mt-5 pb-5">
      <h2 className="text-center mb-4">Hot Sales</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
      >
        {hotProducts.map(
          (product) =>
            product && (
              <div key={product.id} className="p-2">
                <div className="card h-100 text-center">
                  <div className="image-container">
                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body">
                    <div className="title-container">
                      <h5 className="card-title">{product.title}</h5>
                    </div>
                    <p className="card-text text-muted">
                      <del>${product.price.toFixed(2)}</del>
                    </p>
                    <p className="card-text text-danger font-weight-bold">
                      $
                      {(
                        product.price -
                        product.price * (product.discountPercentage / 100)
                      ).toFixed(2)}
                    </p>
                    <Link
                      className="btn btn-primary"
                      to={`/product/${product.id}`}
                    >
                      <i className="fas fa-shopping-cart"></i> Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </Carousel>
    </div>
  );
};

export default HotSales;
