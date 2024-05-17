import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faGhost } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <FontAwesomeIcon icon={faGhost} size="lg" />
            <b className="ms-2">WWN</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link me-3" to="/products">
                  SCARY PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/cart"
                  className="nav-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                  <span className="ms-2">{0}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
