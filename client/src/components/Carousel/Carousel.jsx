import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";

const Carousel = () => {

  const urlImages = [
    "https://cdn.shopify.com/s/files/1/0122/2033/4180/files/Laptops_Tablets_Accessories.jpg?16384588217113715573",
    "https://www.doverjewelry.com/media/weltpixel/owlcarouselslider/images/w/a/watch_homepage_banner.jpeg",
    "https://www.doverjewelry.com/media/weltpixel/owlcarouselslider/images/2/0/2023_new_arrivals.jpeg"
  ]

  return (
    <div className="h-112 w-full  m-auto dark:bg-principal">
      <Swiper
        cssMode={true}
        freeMode={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper w-full h-full max-w-screen-2xl"
      >
        {
          urlImages.map((img, key) => {
            return (
              <SwiperSlide key={key} className="">
                <img
                  className="h-full w-full"
                  src={img}
                />
              </SwiperSlide>
            )
          })
        }


      </Swiper>
    </div>
  )
}

export default Carousel;