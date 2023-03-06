import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import ProductsSlider from "../../Layouts/ProductsSlider";

const Home = () => {

    return (
        <div className="mx-auto w-full h-full">
            <Carousel />
            <Services />
            <ProductsSlider />
            <Footer />
        </div>
      )
}

export default Home;