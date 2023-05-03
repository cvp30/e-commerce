import SimpleCard from "./SimpleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";


const TripleSlider = ({ products }) => {

  let newArrProducts = [];
  let tmp = [];

  for (let i = 1, j = 0; i <= products.length; i++, j++) {
    if (i % 4 === 0) {
      newArrProducts.push(tmp);
      tmp = [];
    }
    tmp.push(products[i - 1]);
  }
  newArrProducts.push(tmp)

  return (
    <section className="w-full h-fit">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper w-full p-1"
      >
        {
          newArrProducts.map((group, key) => {
            return (
              <SwiperSlide key={key}>
                <div className="flex flex-col gap-2">
                  {
                    group.map((product, key) => {
                      return (
                        <SimpleCard
                          key={key}
                          image={product.image}
                          title={product.title}
                          price={product.price}
                          rating={product.rating.rate}
                        />
                      )
                    })
                  }
                </div>
              </SwiperSlide>
            )
          })
        }


      </Swiper >




    </section>
  )
}

export default TripleSlider;