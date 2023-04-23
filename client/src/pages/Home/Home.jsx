import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import ProductsSlider from "../../Layouts/ProductsSlider";

import Jewelery from '../../assets/jewelery.png'
import { Link } from "react-router-dom";

const Home = () => {

  const categories = [
    {
      name: 'Jewelery Collection',
      img: Jewelery,
    }
  ]

  return (
    <section className="w-full h-full border py-10">
      <div className="flex items-center justify-center">
        {
          categories.map(category => {
            return (
              <div className="overflow-hidden relative w-90 aspect-[3/2] bg-target flex justify-center group">
                <img className="h-full group-hover:h-[130%] transition-all duration-300" src={category.img} alt={category.name} />
                <div className="absolute -left-4 -top-44 w-64 h-112 rotate-45 bg-[#d10023] opacity-80"></div>
                <div 
                  className="absolute left-0 p-8 w-1/2 font-bold text-3xl text-white"
                >
                  <p>
                    {category.name}
                  </p>
                  <Link to="" className="text-lg font-normal">
                    SHOP NOW &rarr;
                  </Link>
                </div>
              </div>
              
            )
          })
        }

        {/* <div className="overflow-hidden relative h-60 w-90 bg-target flex justify-center">
          <img
            src={Jewelery} alt=""
            className="h-full"
          />
          <div className="absolute -left-4 -top-44 w-64 h-[28rem] rotate-45  bg-[#d10023] opacity-80"></div>
        </div> */}

      </div>

    </section>
    // <div className="mx-auto w-full h-full bg-background">
    //     <Carousel />
    //     <Services />

    //     <div className="w-full flex flex-col items-center gap-3 py-12 bg-background dark:bg-principal">
    //         <h1 className="font-bold text-principal dark:text-white">Why buy from us?</h1>
    //         <p className="w-2/3 text-center text-slate">We strive to offer competitive prices on all our products. Additionally, we also provide special deals and promotions from time to time to help our customers save even more.</p>
    //     </div>

    //     <ProductsSlider />
    //     <Footer />
    // </div>
  )
}

export default Home;