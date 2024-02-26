"use client"
import React, { useState } from "react";
import { useCart } from "../../context/cartProvider";
import Delivery from "./delivery";
import TakeAway from "./takeaway";


function OrderCart() {
    const { cart, totalCost } = useCart();
    const [selectedMethod, setSelectedMethod] = useState(null);

    const handleMethodChange = (method) => {
        setSelectedMethod(method);
    }

    return (

        <div className="grid grid-cols-3 text-center pt-40 px-72 gap-y-10">
            <div className="col-span-3 text center gap-y-20">
                <h1 className="text-5xl text-yellow-800">Order</h1>
            </div>
            {cart.length > 0 ? (
                cart.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="col-span-1 text-xl">
                            {item.quantity}
                        </div>
                        <div className="col-span-1 text-xl">
                            {item.title}
                        </div>
                        <div className="col-span-1 text-xl">
                            ${item.price}
                        </div>
                    </React.Fragment>
                ))
            ) : (
                <div className="col-span-3 text-center">
                    <p className="text-3xl py-4 text-gray-800">No items in your cart.</p>
                </div>
            )}
            <div className="col-span-3 text-center">
                <p className="text-xl">Total Cost: ${totalCost}</p>
            </div>
            <div className="col-span-3 text-center">
                <h1 className="col-span-3 text-xl">Method of delivery</h1>
            </div>

            <div className="col-span-3 text-center">
                <div className="flex justify-center gap-x-20 text-5xl">
                    <p className={`text-2xl text-gray-500 cursor-pointer ${selectedMethod === "takeaway" ? "font-bold" : ""}`}
                        onClick={() => handleMethodChange("takeaway")}>TakeAway</p>
                    <p className={`text-2xl text-gray-500 cursor-pointer ${selectedMethod === "delivery" ? "font-bold" : ""}`}
                        onClick={() => handleMethodChange("delivery")}>Delivery</p>

                    {selectedMethod === "delivery" && (
                        <div className="pt-8 w-24 pl-6">
                            <Delivery />
                        </div>
                    )}
                   

                </div>
            </div>
            <div className="col-span-1">
                    {selectedMethod === "takeaway" && (
                        <div className="pt-8 w-24 pl-6">
                            <TakeAway />
                        </div>
                    )}
                    </div>
        </div>
    )
}

export default OrderCart