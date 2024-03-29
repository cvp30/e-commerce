import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from 'react';
import { Previous, Next } from '../icons';

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, A11y } from "swiper";
import ProductCard from "./ProductCard";

const Slider = ({ products }) => {

  const prev = useRef(null);
  const next = useRef(null);

  return (
    <>
      <div className="flex gap-4">
        <button ref={prev}>
          <Previous className="h-6 text-dark hover:text-white hover:bg-red border border-dark hover:border-red rounded-full p-1 transition-all duration-200 ease-in-out" />
        </button>
        <button ref={next}>
          <Next className="h-6 text-dark hover:text-white hover:bg-red border border-dark hover:border-red rounded-full p-1 transition-all duration-200 ease-in-out" />
        </button>
      </div>
      <Swiper
        loop={true}

        navigation={
          {
            nextEl: next.current,
            prevEl: prev.current,
          }
        }
        modules={[Navigation, A11y]}
        className="mySwiper p-2 box-border"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          930: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {
          products.map(product => {
            return (
              <SwiperSlide key={product.id}>
                <ProductCard
                  image={product.image}
                  category={product.category}
                  title={product.title}
                  price={product.price}
                  rating={product.rating.rate}
                />

              </SwiperSlide>
            )
          })
        }


      </Swiper >
    </>
  )
}

export default Slider;