import React from "react";

const coffeItems = [
    {
        img: 'img/shop1.png',
        title: 'Gray coffee',
        price: '$45'
    },
    {
        img: 'img/shop2.png',
        title: 'Gray coffee',
        price: '$45'
    },
    {
        img: 'img/shop3.png',
        title: 'Gray coffee',
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
                            <img src={item.img} alt={item.title} />
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