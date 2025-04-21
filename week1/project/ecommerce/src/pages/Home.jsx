import React, { useState } from "react";
import allProducts from "../fake-data/all-products";
import allCategories from "../fake-data/all-categories";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(
      selectedCategory === category ? null : category
    );
  };

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) =>
        product.category
          .toLowerCase()
          .includes(selectedCategory.replace("FAKE: ", "").toLowerCase())
      )
    : allProducts;

  return (
    <div style={{ padding: "10px", fontSize: "12px" }}>
      <h1>Products</h1>
      <CategoryList
        categories={allCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Home;
