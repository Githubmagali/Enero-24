"use client"
import { useCart } from "../../context/cartProvider";


function CoffeePage({ item }) {
    const { addToCart, removeFromCart, getItemQuantity } = useCart();

    return (
        <div className={`flex flex-col items-center gap-y-3${item.soldOut ? "filter grayscale opacity-80 text-center" : ""}`}>
            <div className="">
                <img src={item.img} alt={item.title} className="h-48 w-34"/>
            </div>
            <h4 className="text-center font-bold">{item.title}</h4>
            <span className="text-center font-bold">{item.soldOut ? "SOLD OUT" : `$ ${item.price}`}</span>
            {getItemQuantity(item.id) > 0 ? (
                  <div className='lg:flex lg:gap-x-3'>
                  <button className="bg-gray-300 hover:bg-gray-400 px-2 rounded-xl" onClick={() => addToCart(item)}>
                      +
                  </button>
                  <p className="text-xs text-center">{getItemQuantity(item.id)}</p>
                  <button className="bg-gray-300 hover:bg-gray-400 px-2 rounded-xl" onClick={() => removeFromCart(item.id)}>
                      -
                  </button>
                  </div>
            ) : (
                <button disabled={item.soldOut} onClick={() => addToCart(item)} className='text-sm rounded-md bg-gray-400 text-white hover:bg-gray-200 py-1 px-4'>
                {item.soldOut ? 'Sold Out' : 'Add to cart'}
            </button>
            )}
           
        </div>
    )
}

export default CoffeePage