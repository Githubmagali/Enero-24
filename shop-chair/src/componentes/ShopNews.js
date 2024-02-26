import React from "react";

const ShopNews = (props) => {
    const { newItems } = props;


    return (
        <section className="new">
            <div className="heading">
                <span>New Collection</span>
                <h2>Best Selling</h2>
            </div>
            <div className="new-container">
                {newItems.map((item, index) => (
                    <div className="box" key={index}>
                        <div className="box-img">
                            <img src={item.imgSrc} alt={item.title} />
                        </div>
                        <div className="title-price">
                            <h3>{item.title}</h3>
                            <div className="stars">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                            </div>
                        </div>
                        <span>{item.price}</span>
                        <i className='bx bx-cart'></i>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ShopNews;