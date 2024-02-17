import React from 'react';
import CoffeePage from './coffe'


function CoffeeeShop(){

    const coffeItems = [
        {
          id:1,
          img: "img/shop1.png",
          title: "Expresso",
          price: 10,
          soldOut: false,
        },
        {
          id:2,
          img: "img/shop2.png",
          title: "Ristretto",
          price: 10,
          soldOut: false,
        },
        {
          id:3,
          img: "img/shop3.png",
          title: "Capuccino",
          price: 7,
          soldOut: false,
        },
        {
          id:4,
          img: "img/shop4.png",
          title: "Americano",
          price: 7,
          soldOut: false,
        },
        {
          id:5,
          img: "img/shop5.png",
          title: "Lungo",
          price: 7,
          soldOut: false,
        },
        {
          id:6,
          img: "img/shop6.png",
          title: "scrambled eggs",
          price: 7,
          soldOut: false,
        },
        {
          id:6,
          img: "img/shop7.png",
          title: "Croissant",
          price: 7,
          soldOut: false,
        },
        {
          id:6,
          img: "img/shop8.png",
          title: "Brownie",
          price: 7,
          soldOut: true,
        },
        {
          id:6,
          img: "img/shop9.png",
          title: "Cookies",
          price: 7,
          soldOut: true,
        },
      ];

    return(
        <section className='container mx-auto my-8 md:grid-cols-4 gap-8 max-w-screen-lg' id="shop">
            <div className='text-center'>
                <div className='font-bold py-9'>Coffee Shop</div>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4 px-20 ">
                {coffeItems.map((item, index)=>(
               <CoffeePage item={item} key={index}/>
                ))}
            </div>
        </section>

    )
}

export default CoffeeeShop