import { createContext,useState } from "react";

export const FavoriteContext = createContext({
    favorites: [],
    totalFavorite : 0,
    addFavorite: (post) =>{},
    removeFavorite: (postId) => {},
    isFavorite:(postId) => {}
})

export function FavoriteContextProvider(props) {
    const [userFavorites,setUserFavorite] = useState([])

    function addFavorite(post) {
        setUserFavorite((previousFavorite) => {
            return previousFavorite.concat(post)
        })
    }

    function removeFavorite(postId) {
        setUserFavorite((previousFavorite) => {
            return previousFavorite.filter((post) => post.id !== postId)
        })
    }

    function isFavorite(postId) {
        return userFavorites.some((post) => post.id === postId)
    }

    const context = {
        favorites : userFavorites,
        totalFavorite : userFavorites.length,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return (
        <FavoriteContext.Provider value={context}>
            {props.children}
        </FavoriteContext.Provider>
    )
    
}