import React, { useState, useEffect } from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Header from "../components/Header"
import Spinner from "../components/Spinner";
import { getCategories, getProducts } from "../services/api";

function Home() {
   // State variables
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch categories and products when component mounts or category changes
  useEffect(() => {
    setLoading(true);
    setError(null);


    Promise.all([
      getCategories(),
      getProducts(selectedCategory)
    ])
      .then(([categoryData, productData]) => {
        setCategories(categoryData);
        setProducts(productData);
      })
      .catch(() => setError("can not get data"))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  // Handle selecting or unselecting a category
 const handleSelectCategory = (category) => {
  setSelectedCategory(selectedCategory === category ? null : category);
};

  return (

      <div style={{ padding: "10px", fontSize: "12px" }}>
          <Header />
          <CategoryList
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />
          <div style={{ minHeight: "500px" }}>
              {loading && <Spinner />}
              {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
              {!loading && !error && <ProductList products={products} />}
         </div>
    
    </div>
  );
}

export default Home;
