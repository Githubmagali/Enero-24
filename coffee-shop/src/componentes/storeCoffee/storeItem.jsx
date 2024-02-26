import React from "react";
import { useCart } from "../../CartContext"
import "./../../index.css"
import  "./storeCoffee.css"


function StoreItem({ item }) {
    const { addToCart, removeFromCart } = useCart();

    return (
        <div className={`box ${item.soldOut ? "sold-out" : ""}`}>
            <div className="box-img-shop">
                <img src={item.img} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
            <span>{item.soldOut ? "SOLD OUT" : `$ ${item.price}`}</span>
            {!item.soldOut && (
                <>
                    <button className="store-btn" onClick={() => addToCart(item)}>Add to Cart</button>
                    <button className="store-btn" onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                </>

            )}
        </div>

    );
}

export default StoreItem