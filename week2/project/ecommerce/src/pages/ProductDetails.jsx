import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getProductDetails } from "../services/api";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const navigate = useNavigate();

  // Get product ID from URL
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch product details when component mounts or ID changes
  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductDetails(id)
    .then((data) => setProduct(data))
    .catch(() => setError("Failed to fetch product details"))
    .finally(() => setLoading(false));
}, [id]);

  // Conditional rendering for loading, error, or missing data
  if (loading) return <Spinner />;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  if (!product) return null;

  return (
    <div className="details-container">
      <h2 className="details-header">{product.title}</h2>

      <div className="details-content">
        <img src={product.image} alt={product.title} className="details-image" />

        <div className="details-info">
          <p>{product.description}</p>
          <p className="details-price">€{product.price}</p>
          <p className="rating">
           Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p>Category: {product.category}</p>
          <button
            onClick={() => navigate("/")}
            className="back-button"
          >
            ← Back to Home
         </button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;


