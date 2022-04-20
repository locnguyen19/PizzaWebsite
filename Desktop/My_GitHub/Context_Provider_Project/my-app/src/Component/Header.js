import React from 'react'
import './style.css'
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

export default function Header() {
    const { cartItems, showHideCart } = useContext(CartContext);
    return (
        <div>
            <header>

                <div id="menu-bar" className="fas fa-bars"></div>

                <a href="#" className="logo">TopShop</a>

                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>
                    <a href="#featured">Contact</a>
                    <a href="#review">Review</a>
                </nav>

                <div className="icons">
                    <a href="" className="fa fa-heart"></a>
                    <a className="fa fa-shopping-cart"
                        aria-hidden='true'
                        onClick={showHideCart}
                    ></a>
                    {/* {cartItems.length > 0 && (
                        <div className='item__count'>
                            <span>{cartItems.length}</span>
                        </div>
                    )} */}
                    <a href="" className="fa fa-user"></a>
                </div>
            </header>
        </div>
    )
}
