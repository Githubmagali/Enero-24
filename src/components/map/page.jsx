"use client"
import React, { useState } from 'react';
import CarouselPage from './carousel'



function MapPage() {

    const [showCard, setShowCard] = useState(false);

    const toggleCard = () => setShowCard(!showCard);
    return (
        <>
            <section className='grid md:grid-cols-2 md:gap-x-40' id='location'>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-extrabold lg:text-7xl m-3 ">Welcome !</h1>
                    <h2 className='text-center text-xl m-2'>The kingdom of coffee</h2>
                    <h3 className='text-center mt-8'>Take away</h3>
                    <button onClick={toggleCard} 
                    className='my-9 p-4 font-bold bg-gray-300 rounded-md hover:bg-gray-600 hover:text-white'>Our location</button>
                </div>
                <div className='flex flex-col items-center lg:w-3/5 '>
                       <CarouselPage />
                </div>
                </section>
                
            {showCard && (
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-50">
                <div className='bg-white p-10 rounded-lg  max-w-md w-full'>
                    <button onClick={toggleCard} className="font-bold mt-2">
                        X
                    </button>
                    <h2 className='text-center font-bold mt-3'>Our location</h2>
                    <p className='text-center'>Av Galicia 100, B1868BGA CABA</p>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1372370683007!2d-58.38622642532899!3d-34.676485661342944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccb8228f238d%3A0x4e7d2cae69803158!2sAv.%20Galicia%20100%2C%20B1868BGA%20Pi%C3%B1eyro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1705963186092!5m2!1ses-419!2sar"
                        className="w-full h-full"
                        allowfullscreen="false"
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            )}
         
           
        </>
    )
}

export default MapPage