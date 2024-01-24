import React from "react";
import "./storeCoffee.css"
import "./../../index.css"
import StoreItem from "./storeItem";

const coffeItems = [
  {
    id:1,
    img: "img/shop1.png",
    title: "Expresso",
    price: 0,
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

const StoreCoffee = () => {
  return (
    <section>
      <div className="heading-shop" id="shop">
        <span>Shop now</span>
        <h1>Coffee</h1>
      </div>
      <div className="shop-container">
        {coffeItems.map((item, index) => (
            <StoreItem item={item} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default StoreCoffee;
