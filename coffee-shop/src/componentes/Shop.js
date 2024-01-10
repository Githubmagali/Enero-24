import React, { useState } from "react";

const coffeItems = [
    {
        imgSrc: 'img/shop1.png',
        title: 'Gray chair',
        price: '$45'
    },
    {
        imgSrc: 'img/shop2.png',
        title: 'Gray chair',
        price: '$45'
    },
    {
        imgSrc: 'img/shop3.png',
        title: 'Gray chair',
        price: '$45'
    }


];


const Shop = () => {

    return (
        <section>
            <div className="heading-shop" id="shop">
                <span>Shop now</span>
                <h1>Coffee</h1>
            </div>
            <div className="shop-container">
                {coffeItems.map((item, index) => (
                    <div className="box" key={index}>
                        <div className="box-img">
                            <img src={item.imgSrc} alt={item.title} />
                        </div>
                        <h2>{item.title}</h2>
                        <span>{item.price}</span>
                        <a href="#" className="btn">Order now</a>
                    </div>

                ))}

            </div>
        </section>

    );
}

export default Shop;