import React from "react";
import "./../shop-2.css";
import SwiperCore, {Navigation} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; 
import CoffeData from "../../assets/slider.json";
SwiperCore.use([Navigation]);


const Coffe = ()=>{
    return (<div>
       <section className="coffe container">
        <h2>Coffe <span>specialties</span></h2>
        <div className="coffe-content">
            <Swiper
            navigation
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
                400:{
                    slidesPerView:1,
                },
                655:{
                    slidesPerView:2,
                },
                880:{
                    slidesPerView:3,
                }
            }}>
                {CoffeData.map((item, index)=>(
                    <SwiperSlide key={index}>
                        <div className="coffe-box">
                            <div className="box-img">
                                <img ssrc={item.image} alt={item.title} />
                                <span className="box-icon">{item.icon}</span>
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
}

export default Coffe;
