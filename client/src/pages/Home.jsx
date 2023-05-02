import { Link } from "react-router-dom";

import Jewelery from '../assets/jewelery.png';
import Electronics from '../assets/Electronics.png'
import Men from '../assets/Men.png'
import ProductCards from "../components/ProductCards";
import Qled from "../assets/qled.png"
import Portable from "../assets/portable.png";
import { Facebook, Twitter, Instagram, Letter } from '../icons';

const Home = () => {

  const categories = [
    {
      name: 'Jewelery Collection',
      link: 'jewelery',
      img: Jewelery,
    },
    {
      name: 'Electronics Collection',
      link: 'electronics',
      img: Electronics,
    },
    {
      name: 'Men\'s and Women\'s clothing Collection',
      link: 'clothing',
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
    <section className="w-full h-full mx-auto pt-10">

      <div className="w-full lg:w-[95%] mx-auto flex gap-8 md:gap-16 flex-wrap items-center justify-center xl:justify-between">
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
                  <Link to={`category/${category.link}`} className="text-base font-normal">
                    SHOP NOW &rarr;
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="w-full lg:w-[95%] mx-auto text-principal pt-16 flex flex-col items-start">
        <p className="text-3xl font-bold">NEW PRODUCTS</p>
        <ProductCards />
      </div>

      <section className="w-full h-full pl-6 py-6 my-14 bg-silver flex items-center justify-between">
        <figure className="hidden md:w-1/2 lg:w-1/3 h-90 pr-4 md:flex justify-center">
          <img src={Qled} className="w-full" alt="" />
        </figure>

        <div className="w-full md:w-1/2 lg:w-1/3 h-full flex gap-8 flex-col items-center justify-around text-dark tracking-widest">
          <div className="w-full flex justify-center items-center gap-2 flex-wrap  tracking-widest text-white">
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

          <p className=" font-bold text-4xl text-center">HOT SALE THIS WEEK</p>
          <p className="text-2xl text-center">NEW COLLECTION UP TO 50% OFF</p>

          <button className="py-3 px-7 bg-red text-white rounded-3xl ">SHOP NOW</button>
        </div>


        <figure className="hidden w-1/3 h-90 lg:flex justify-center items-center">
          <img src={Portable} className="h-full" alt="" />
        </figure>

      </section>

      <div className='w-full h-48 relative flex flex-col justify-around items-center border-t-2 border-t-silver'>
        <Letter className="h-44 absolute text-silver rotate-12 left-1/4 -top-4 -z-10" />
        <p className='text-dark text-2xl font-normal'>Sign up for the <span className='font-bold'>NEWSLETTER</span></p>

        <form className='w-full md:w-130 flex flex-col md:flex-row gap-2 md:gap-0'>
          <input className='w-full md:w-2/3 outline-none p-2 border md:border-r-0 border-silver rounded-l-full rounded-r-full md:rounded-r-none ' type="email" placeholder='Enter Your Email' />
          <button className='w-full md:w-1/3 p-2 border border-red rounded-l-full md:rounded-l-none rounded-r-full bg-red text-white' >Subscribe</button>
        </form>

        <div className='h-10 w-36 flex justify-between items-center text-dark'>
          <a href="" className='h-full w-10 p-2 border border-silver hover:bg-silver hover:text-red transition-all duration-300 ease-in-out'>
            <Facebook />
          </a>
          <a href="" className='h-full w-10 p-2 border border-silver hover:bg-silver hover:text-red transition-all duration-300 ease-in-out'>
            <Twitter />
          </a>
          <a href="" className='h-full w-10 p-2 border border-silver hover:bg-silver hover:text-red transition-all duration-300 ease-in-out'>
            <Instagram />
          </a>
        </div>

      </div>





    </section >
  )
}

export default Home;