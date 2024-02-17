"use client"
import { useCart } from "../../context/cartProvider";


function CoffeePage({ item }) {
    const { addToCart, removeFromCart } = useCart();

    return (
        <div className={`flex flex-col items-center gap-y-3${item.soldOut ? "filter grayscale opacity-80 text-center" : ""}`}>
            <div className="">
                <img src={item.img} alt={item.title} />
            </div>
            <h4 className="text-center font-bold">{item.title}</h4>
            <span className="text-center font-bold">{item.soldOut ? "SOLD OUT" : `$ ${item.price}`}</span>
            {!item.soldOut && (
                <>
                    <button className="bg-gray-300 hover:bg-gray-400 p-2 rounded-xl" onClick={() => addToCart(item)}>Add to Cart</button>
                    <button className="bg-gray-300 hover:bg-gray-400 p-2 rounded-xl" onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                </>

            )}
        </div>
    )
}

export default CoffeePage