import React from "react";

const ShopContainer = (props) => {
  const { shopItems } = props;


  return (
    <section className="shop" id="shop" >
      <div className="heading">
        <span>New Arraival</span>
        <h2>Shop now</h2>
      </div>
      <div className="shop-container">
        {shopItems.map((item, index) => (
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

export default ShopContainer;