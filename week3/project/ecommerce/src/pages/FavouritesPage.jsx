import { useFavourites } from "../contexts/FavouriteContext";
import { useFetchMultipleProducts } from "../hooks/useFetchMultipleProducts";
import Spinner from "../components/Spinner";
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";
import "../styles/FavouritesPage.css";
function Favourites() {
  // Get the list of favourite product IDs from the context
  // and fetch the product details for those IDs using a custom hook.
  const { favourites } = useFavourites();
  const { data: products, loading, error } = useFetchMultipleProducts(favourites);

  // Conditional rendering for loading, error, or empty favourites
  if (loading) return <Spinner />;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  if (favourites.length === 0) return <p style={{ textAlign: "center" }}>No favourites added yet.</p>;

  return (
    <div className="favourites-container">
        <Navbar />
      <h2 className="favourites-header">My Favourite Products</h2>
      {products.length === 0 ? (
        <p>You don't have any favourites yet.</p>
      ) : (
        <div className="favourites-list">
          <ProductList products={products} />
        </div>
      )}
      </div>
  );
}

export default Favourites;
