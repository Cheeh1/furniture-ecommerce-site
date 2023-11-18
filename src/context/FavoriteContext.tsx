import { ReactNode, createContext, useState } from "react";
import toast from "react-hot-toast";

interface FavoriteContextType {
  favorites: number[];
  handleFavorite: (productId: number) => void;
}

export const FavoriteContext = createContext<FavoriteContextType>({
    favorites: [],
    handleFavorite: () => {},
});

export const FavoriteContextProvider = ({children}: {children: ReactNode}) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
        toast.error("Item removed from favorite", {
          position: "top-center",
          duration: 1000,
          className: "text-sm",
        });
    } else {
      setFavorites([...favorites, productId]);
        toast.success("Item added to favorite", {
          position: "top-center",
          duration: 1000,
          className: "text-sm",
        });
    }
  };

  const favoritecontextvalue: FavoriteContextType = {
    favorites,
    handleFavorite
  }

  console.log("Initial Favorites from Storage:", favorites);
  return (
    <FavoriteContext.Provider value={favoritecontextvalue}>
      {children}
    </FavoriteContext.Provider>
  );
};
