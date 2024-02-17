"use client"
import { useCart } from "@/context/cartProvider";


function NavbarPage() {
    const { cart } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-slate-100 ">
            <h1 className="font-bold text-yellow-900 hover:text-gray-400 m-4 px-10 text-2xl">Coffe</h1>
            <ul className="flex space-x-9 m-4 px-4">
                <li className="">
                    <a href="#location" className="hover:text-slate-500 text-xl">Location</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-slate-500 text-xl ">Contact</a>
                </li>
                
                <li>
                    <a href="#menu" className="hover:text-slate-500 text-xl">Menu</a>
                </li>
                <li>
                    <a href="#shop" className="hover:text-slate-500 text-xl">Shop</a>
                </li>
                <li>
                 <i className='bx bxs-shopping-bags text-3xl hover:text-slate-500'></i>
                 {totalItems}
                </li>
                

            </ul>
        </nav>

    )
}

export default NavbarPage