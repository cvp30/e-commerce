import ProductCard from '../ProductCard/ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const Slider = ({products}) => {
  return (
    <Swiper
        speed={2000}

        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}

        className="mySwiper py-4 justify-center w-full max-w-screen-2xl"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {
          products.map(product => {
            return (
              <SwiperSlide key={product.id}>
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating.rate}
                  />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
  )
}

export default Slider;
