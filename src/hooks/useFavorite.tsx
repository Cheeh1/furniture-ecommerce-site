import { useState } from "react"
export const useFavorite = () => {
    const [favorites, setFavorites] = useState<number[]>([])

    const handleFavorite = (productId: number) => {
        if (favorites.includes(productId)) {
            setFavorites(favorites.filter((id) => id !== productId))
        }  else {
            setFavorites([...favorites, productId])
        }
    }
    
    return {
        favorites,
        handleFavorite,
    }
}