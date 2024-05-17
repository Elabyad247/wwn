import "./Features.css";

const Features = () => {
  return (
    <div className="container mt-1">
      <div className="row mt-1 pt-5">
        <div className="col-md-4">
          <div className="card">
            <div id="feature-card-1" className="card-body text-center">
              <i className="fas fa-shipping-fast fa-3x mb-3"></i>
              <h5 className="card-title">Fast Delivery</h5>
              <p className="card-text">
                Get your orders delivered in no time with our super-fast
                delivery service.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div id="feature-card-2" className="card-body text-center">
              <i className="fas fa-shield-alt fa-3x mb-3"></i>
              <h5 className="card-title">Safety</h5>
              <p className="card-text">
                We ensure the highest safety standards for all our products and
                services.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div id="feature-card-3" className="card-body text-center">
              <i className="fas fa-star fa-3x mb-3"></i>
              <h5 className="card-title">Quality Products</h5>
              <p className="card-text">
                Our products are sourced from the best manufacturers ensuring
                top quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
