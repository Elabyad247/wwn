import { Dropdown } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ selected, onSelect }) => {
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
    <Dropdown className="my-3">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {selected || "Select Category"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          key="All"
          active={selected === "All"}
          onClick={() => onSelect("All")}
        >
          All
        </Dropdown.Item>
        {categories.map((cat) => (
          <Dropdown.Item
            key={cat}
            active={selected === cat}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryFilter;
