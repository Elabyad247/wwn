import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text text-center">
        <h1 className="display-4 fw-bold"> Your Wallet's Worst Nightmare</h1>
        <p className="lead mt-3">The scariest place for all your needs</p>
      </div>
    </div>
  );
};

export default Banner;
