import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"

function Header() {
    const { cartItems } = useContext(Context)

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                <p className="cart-count">{cartItems.length}</p>
                <i className={`ri-shopping-cart-${cartItems.length > 0 ? "fill" : 'line'} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header
