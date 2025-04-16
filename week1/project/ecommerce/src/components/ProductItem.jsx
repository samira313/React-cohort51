import React from "react";
import "../styles/ProductItem.css";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.title.replace("FAKE: ", "")}</h3>
      <p className="price">€{product.price}</p>
      <p className="rating">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  );
}

export default ProductItem;
