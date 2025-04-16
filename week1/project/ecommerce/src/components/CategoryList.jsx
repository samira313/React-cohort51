import React from "react";
import "../styles/CategoryList.css";

function CategoryList({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelectCategory(category)}
          className={`category-btn ${
            selectedCategory === category ? "selected" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
