import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import ProductsSlider from "../../Layouts/ProductsSlider";

const Home = () => {

    return (
        <div className="mx-auto w-full h-full bg-background">
            <Carousel />
            <Services />
            
            <div className="w-full flex flex-col items-center gap-3 py-12 bg-background dark:bg-principal">
                <h1 className="font-bold text-principal dark:text-white">Why buy from us?</h1>
                <p className="w-2/3 text-center text-slate">We strive to offer competitive prices on all our products. Additionally, we also provide special deals and promotions from time to time to help our customers save even more.</p>
            </div>

            <ProductsSlider />
            <Footer />
        </div>
      )
}

export default Home;