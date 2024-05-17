import { Link } from "react-router-dom";
function Product(props) {
  const { product, show_button } = props;
  return (
    <>
      <div classNameName="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.descrption}</p>
          <p>Price: {product.price}€</p>
          {show_button && (
            <Link className="btn btn-primary" to={`/product/${product.id}`}>
              more details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
