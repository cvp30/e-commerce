import Carousel from "../../components/Carousel/Carousel";
import ProductsSlider from "../../Layouts/ProductsSlider";

const Home = () => {

    return (
        <div className="mx-auto w-full h-full">

            <Carousel />
            <ProductsSlider />
        </div>
      )
}

export default Home;