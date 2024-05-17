import { ListGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const apiUrl = "https://dummyjson.com/products";
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    fetch(`${apiUrl}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <ListGroup>
      <ListGroup.Item active={true}>All</ListGroup.Item>
      {categories.map((cat) => (
        <ListGroup.Item active={false}>{cat}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Sidebar;
