"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


function SwiperPage() {

    const coffee = [
        {
            title: "Americano",
            subtitle: "Expresso with hot water",
            img: "img/shop1.png"
        },
        {
            title: "Cappuccino",
            subtitle: "chocolate with coffee",
            img: "img/coffee-2.png"
        },
        {
            title: "Expresso",
            subtitle: "1oz expresso",
            img: "img/coffee-3.png"
        },
        {
            title: "Macchiato",
            subtitle: "Espresso shot",
            img: "img/coffee-4.png"
        },
        {
            title: "Lungo",
            subtitle: "Long pulled expresso",
            img: "img/coffee-5.png"
        },
        {
            title: "Ristretto",
            subtitle: "short pulled expresso",
            img: "img/coffee-6.png"
        }
    ]

    return (
        <div>
            <section className="md:p-40">
                <div className="text-center">

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
                        {coffee.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="md:p-8">
                                    <div className="md:relative md:h-40 md:overflow-hidden"> 
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <h3 className="font-bold py-5">{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    )
}

export default SwiperPage