import React from "react";
import "../styles/ProductItem.css";
import { Link, useNavigate } from 'react-router-dom';
import { useFavourites } from "../contexts/FavouriteContext.jsx";
import HeartSolid from "../assets/heart-solid.svg";
import HeartRegular from "../assets/heart-regular.svg";

function ProductItem({ product }) {

  const { favourites, toggleFavourite } = useFavourites();
  const isFavourite = favourites.includes(product.id);
  const navigate = useNavigate();
  return (
    <div className="product-item"> 

      <img
        src={isFavourite ? HeartSolid : HeartRegular}
        alt="Favourite Heart"
        className="heart-icon"
        onClick={() => toggleFavourite(product.id)}
      />

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
