import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import ProductsSlider from "../../Layouts/ProductsSlider";

import Jewelery from '../../assets/jewelery.png'
import Electronics from '../../assets/Electronics.png'
import Men from '../../assets/Men.png'
import { Link } from "react-router-dom";

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

  return (
    <section className="w-full h-full mx-auto py-10">
      <div className="flex gap-8 md:gap-16 flex-wrap items-center justify-center xl:justify-between">
        {
          categories.map(category => {
            return (
              <div className="overflow-hidden relative xl:w-90 md:w-80 w-72 aspect-[3/2] bg-target flex justify-center group">
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

      <div className="w-full text-principal pt-16">
        <p className="text-3xl font-bold">NEW PRODUCTS</p>


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