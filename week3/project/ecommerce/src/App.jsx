import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Favourites from "./pages/FavouritesPage";
import Navbar from "./components/Navbar";
import { FavouriteProvider } from "./contexts/FavouriteContext";
import NotFound from "./pages/NotFoundPage";


function App() {
  return (
    <FavouriteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </FavouriteProvider>

  );
}

export default App;
