"use client"
import React from "react";
import { useCart } from "@/context/cartProvider";


function CartDisplay() {
    const { cart, totalCost } = useCart();


    return (
        <div className="flex flex-col items-center gap-y-3 bg-gray-50 py-8">
            <h2 className="font-bold">Your Cart</h2>
            {cart.length > 0 ? (
                <ul className="">
                    {cart.map((item, index) => (
                        <li key={index} className="text-center py-3">
                            {item.title.charAt(0).toUpperCase() + item.title.slice(1)} -{" "}
                            {item.quantity} x ${item.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="">No items in cart.</p>
            )}
            <p className="">Total Cost: ${totalCost}</p>
            <button className="py-2 px-9 bg-gray-200 hover:bg-gray-300 rounded-lg">Buy</button>
        </div>

    )
}

export default CartDisplay