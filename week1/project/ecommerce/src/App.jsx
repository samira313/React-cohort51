import React, { useState } from "react";
import allProducts from "./fake-data/all-products";
import allCategories from "./fake-data/all-categories";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) =>
        product.category.toLowerCase().includes(
          selectedCategory.replace("FAKE: ", "").toLowerCase()
        )
      )
    : allProducts;

  return (
    <div className="app-container">
      <Header />
      <CategoryList
        categories={allCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
