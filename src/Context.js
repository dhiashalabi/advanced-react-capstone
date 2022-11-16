import React, { useState, useEffect } from "react"
import axios from "axios"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => setAllPhotos(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <Context.Provider
            value={{
                allPhotos,
                toggleFavorite,
                addToCart,
                removeFromCart,
                emptyCart,
                cartItems
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
