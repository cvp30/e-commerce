import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const Slider = ({products}) => {
  return (
    <Swiper
        speed={2000}
        freeMode={true}
        grabCursor={true}
        modules={[Autoplay, Keyboard]}
        autoplay={{
          delay: 3000,
        }}
        keyboard={{
          enabled: true,
        }}
        className="mySwiper m-4 justify-center w-full"
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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
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
                <Link to={`product/${product.id}`}>
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating.rate}
                  />
                </Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
  )
}

export default Slider;
