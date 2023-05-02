import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllJewelery } from "../redux/actions";


const Category = () => {

  const { typeCategory } = useParams();

  const dispatch = useDispatch();
  const allCategory = useSelector(state => state.allJewelery);

  useEffect(() => {
    if (!allCategory.length) dispatch(getAllJewelery());
  }, [])

  return (
    <section className="w-full flex ">
      <div className="w-1/3 bg-target h-screen flex flex-col">
        <div>
          <h3>FILTER BY PRICE</h3>
          <input type="range" min='0' max='3' />
        </div>
      </div>

      <div className="w-2/3 h-screen bg-[yellow]">

      </div>

    </section>
  )
}


export default Category;