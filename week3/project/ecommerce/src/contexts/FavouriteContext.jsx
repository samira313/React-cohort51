import { createContext, useState, useContext } from "react";

const FavouriteContext = createContext();

// This component provides the favourite context to its children.
export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Function to add/remove a product ID from the favourites list.
  // If the ID is already in the list, it removes it; otherwise, it adds it.
  const toggleFavourite = (id) => {
    setFavourites(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // The context value that will be provided to the children components.
  // It includes the current list of favourites and the function to toggle them.
  return (
    <FavouriteContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

// This custom hook allows components to access the favourite context easily.
export const useFavourites = () => useContext(FavouriteContext);
