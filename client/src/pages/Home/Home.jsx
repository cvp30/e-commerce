import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import ProductsSlider from "../../Layouts/ProductsSlider";

import ProductCard from "../../components/ProductCard";
import Jewelery from '../../assets/jewelery.png'
import Electronics from '../../assets/Electronics.png'
import Men from '../../assets/Men.png'
import { Link } from "react-router-dom";
import ProductCards from "../../components/ProductCards";
import Qled from "../../assets/qled.png"
import Portable from "../../assets/portable.png";

const Home = () => {

  const categories = [
    {
      name: 'Jewelery Collection',
      img: Jewelery,
    },
    {
      name: 'Electronics Collection',
      img: Electronics,
    },
    {
      name: 'Men\'s and Women\'s clothing Collection',
      img: Men,
    },

  ]
  const Countdown = [
    {
      time: "DAYS",
      number: 2,
    },
    {
      time: "HOURS",
      number: 11,
    },
    {
      time: "MINS",
      number: 50,
    },
    {
      time: "SECS",
      number: 22,
    },
  ]

  return (
    <section className="w-full h-full mx-auto py-10">
      <div className="flex gap-8 md:gap-16 flex-wrap items-center justify-center xl:justify-between">
        {
          categories.map((category, key) => {
            return (
              <div key={key} className="overflow-hidden relative xl:w-90 md:w-80 w-72 aspect-[3/2] bg-target flex justify-center group">
                <img className="h-full group-hover:h-[110%] transition-all duration-300" src={category.img} alt={category.name} />
                <div className="absolute -left-14 -top-44 w-64 h-112 rotate-45 bg-[#d10023] opacity-90"></div>
                <div
                  className="absolute left-0 pl-2 pt-6 w-4/5 h-3/5 flex flex-col justify-between font-bold text-2xl text-white"
                >
                  <p>
                    {category.name}
                  </p>
                  <Link to="" className="text-base font-normal">
                    SHOP NOW &rarr;
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="w-full text-principal pt-16 flex flex-col items-start">
        <p className="text-3xl font-bold">NEW PRODUCTS</p>
        <ProductCards />
      </div>

      <section className="w-full h-90 my-14 bg-silver flex items-center justify-between">
        <figure className="w-1/3 h-full pr-4 flex justify-center">
          <img src={Qled} className="w-full" alt="" />
        </figure>

        <div className="w-1/3 h-full flex flex-col items-center justify-around text-dark tracking-widest">
          <div className="w-full h-28 flex justify-center items-center gap-2 flex-wrap  tracking-widest text-white">
            {
              Countdown.map((elem, key) => {
                return (
                  <div key={key} className="w-24 h-24 rounded-full flex flex-col items-center justify-center bg-red">
                    <p className="text-2xl">{elem.number}</p>
                    <p className="text-xs">{elem.time}</p>
                  </div>
                )
              })
            }
          </div>

          <p className=" font-bold text-4xl">HOT SALE THIS WEEK</p>
          <p className="text-2xl">NEW COLLECTION UP TO 50% OFF</p>

          <button className="py-3 px-7 bg-red text-white rounded-3xl ">SHOP NOW</button>
        </div>

        <figure className="w-1/3 h-full flex justify-center items-center">
          <img src={Portable} className="h-full" alt="" />
        </figure>

      </section>


    </section>
  )
}

export default Home;