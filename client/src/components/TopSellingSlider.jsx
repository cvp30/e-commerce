import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../redux/actions";
import MultipleSlider from "./MultipleSlider";

const TopSellingSlider = () => {

  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);

  useEffect(() => {
    if (!allProducts.length) dispatch(getAllProducts());
  }, [])

  return (
    <section className="w-full">
      <MultipleSlider products={allProducts} />

    </section>
  )
}

export default TopSellingSlider;