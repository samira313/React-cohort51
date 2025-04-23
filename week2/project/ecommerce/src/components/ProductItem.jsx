import React from "react";
import "../styles/ProductItem.css";
import { Link, useNavigate } from 'react-router-dom';
function ProductItem({ product }) {
  const navigate = useNavigate();
  return (
    <div className="product-item"> 
      <img 
      src={product.image}
       alt={product.title}
        onClick={() => navigate(`/product/${product.id}`)}
         />
      <Link to={`/product/${product.id}`} className="product-title-link">
        {product.title}
      </Link>
      <p className="price">€{product.price}</p>
      <p className="rating">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  );
}


export default ProductItem;
