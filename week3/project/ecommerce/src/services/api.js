const BASE_URL = "https://fakestoreapi.com";

// Fetch all categories
export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching categories");
  }
};

// Fetch products (all or by category)
export const getProducts = async (selectedCategory) => {
  try {
    const url = selectedCategory
      ? `${BASE_URL}/products/category/${selectedCategory}`
      : `${BASE_URL}/products`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching products");
  }
};

// Fetch product details by ID
export const getProductDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching product details");
  }
};
