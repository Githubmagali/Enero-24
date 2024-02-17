"use client"
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselPage(){

    const img =[
        {
            title: "Americano",
            img: "img/swiper-1.png"
          },
          {
            title: "Cappuccino",
            img: "img/swiper-2.png"
          },
          {
            title: "Expresso",
            img: "img/swiper-3.png"
          },
          {
            title: "Macchiato",
            img: "img/swiper-4.png"
          },
          {
            title: "Lungo",
            img: "img/swiper-5.png"
          }
    ]

    const [overlayVisible, setOverlayVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openOverlay = () => {
      setOverlayVisible(true);
    };
  
    const closeOverlay = () => {
      setSelectedImage(null);
      setOverlayVisible(false);
    };

    return(
        <>
        <Carousel
          showArrows={true}
          className=""
      
        >
          {img.map((item, index) => (
            <div
              key={index}
              className=""
              onClick={() => openOverlay(item.img)}
            >
              <img src={item.img} alt={item.title} className="img" />
            </div>
          ))}
        </Carousel>

        {overlayVisible && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50" onClick={closeOverlay}>
            <div className="bg-white p-4 rounded-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <Carousel
                renderThumbs={() => {}}
                showArrows={true}
                selectedItem={0}
                infiniteLoop={true}
              >
                {img.map((item, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img src={item.img} alt={item.title} className="max-w-full max-h-full" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        )}
      </>
    )
}

export default CarouselPage