import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination} from "swiper";

const Carousel = () => {

  const urlImages = [
    "https://cdn.shopify.com/s/files/1/0122/2033/4180/files/Laptops_Tablets_Accessories.jpg?16384588217113715573",
    "https://www.doverjewelry.com/media/weltpixel/owlcarouselslider/images/w/a/watch_homepage_banner.jpeg",
    "https://www.doverjewelry.com/media/weltpixel/owlcarouselslider/images/2/0/2023_new_arrivals.jpeg"
  ]

  return (
    <div className="bg-background box-border  gap-4 h-112 w-full max-w-screen-2xl px-8 py-4 m-auto dark:bg-principal grid grid-cols-3 grid-rows-2">
      <div className="row-span-2 col-span-2 rounded-xl overflow-hidden shadow-xl shadow-[rgba(0,0,0,.1)]">
        <Swiper
          speed={2000}
          loop={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full h-full"
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
      <div className="relative group rounded-xl p-4 cursor-pointer bg-white shadow-xl shadow-[rgba(0,0,0,.1)]">
        <div className="group-hover:bg-[rgba(0,0,0,.1)]  absolute rounded-xl top-0 left-0 w-full h-full"></div>
        <img className="h-full" src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" />

        <div className="w-1/3 absolute top-10 right-4 flex flex-col items-center ">
          <p className="text-orange text-sm">ELECTRONICS</p>
          <p className="text-center text-lg font-semibold px-2">Bright & realistic QLED shades</p>
        </div>

      </div>
      <div className="relative group rounded-xl p-4 cursor-pointer bg-white shadow-xl shadow-[rgba(0,0,0,.1)]">
        <div className="group-hover:bg-[rgba(0,0,0,.1)]  absolute rounded-xl top-0 left-0 w-full h-full"></div>
        <img className="h-full" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />

        <div className="w-1/3 absolute top-10 right-4 flex flex-col items-center ">
          <p className="text-orange text-sm">MEN'S CLOTHING</p>
          <p className="text-center text-lg font-semibold px-2">Exclusive Clothing for Men</p>
        </div>

      </div>


    </div>
  )
}

export default Carousel;