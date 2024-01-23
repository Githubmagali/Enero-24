import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Img from "../../assets/slider2.json";
import "./styles.css"


const DemoCarousel = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openOverlay = () => {
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
    setOverlayVisible(false);

  };

  return (
    <>
      <Carousel showArrows={true} className="carousel-container">
        {Img.map((item, index) => (
          <div key={index} className="img-container" onClick={() => openOverlay(item.img)}>
            <img src={item.img} alt={item.title} className="img" />
          </div>

        ))}
      </Carousel>
      {overlayVisible && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="card-2" onClick={(e) => e.stopPropagation()}>
            <Carousel showArrows={true} selectedItem={0} infiniteLoop={true}>
              {Img.map((item, index) => (
                <div key={index} className="img-container">
                  <img src={item.img} alt={item.title} className="img" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}

    </>
  );

};

export default DemoCarousel;