import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CoffeeData from "../../assets/slider.json";
import "./coffee.css";

const Coffee = () => {
  return (
    <div>
      <section className="coffee container">
        <div className="coffee-content">
          <h2>
            Coffee <span>specialties</span>
          </h2>
          <Swiper
            loop
            navigation
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              400: {
                slidesPerView: 1,
              },
              655: {
                slidesPerView: 2,
              },
              880: {
                slidesPerView: 3,
              },
            }}
          >
            {CoffeeData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="coffee-box">
                  <div className="box-img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <h3 className="box-title">{item.title}</h3>
                  <p>{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Coffee;
