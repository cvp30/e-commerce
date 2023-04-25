import StarRatings from "react-star-ratings";

const ProductCard = () => {
  return (
    <div className=" box-border w-72 h-108 outline outline-1 outline-silver hover:outline-2 hover:outline-red relative flex flex-col group after:absolute after:w-full after:h-full after:top-0 after:-z-10 after:bg-white   transition duration-250 ease-in-out">

      <figure className="box-border w-full h-1/2 flex items-center justify-center">
        <img className="h-[90%] box-border " src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
      </figure>

      <div className="bg-[yellow w-full h-1/2 flex flex-col items-center justify-center">
        <p className="text-[#8D99AE] text-sm font-normal">
          CATEGORY
        </p>
        <p className="text-dark text-lg font-bold">
          PRODUCT NAME HERE
        </p>
        <p className="text-red font-bold text-xl before:content-['$_']">
          {/* {Number.parseFloat(price).toFixed(2) } */}
          100
        </p>
        <StarRatings
          rating={4}
          // changeRating={chageRating}
          starDimension="1rem"
          starSpacing="0px"
          starRatedColor="#D10024"
          numberOfStars={5}
        />
      </div>

      <div className="bg-white w-full h-20 absolute bottom-1 -z-20 group-hover:bg-dark group-hover:translate-y-20 transition-all duration-200 ease-in-out">

      </div>

      {/* <div className="w-full h-20 bg-dark box-border flex items-center justify-center">
        <button className="bg-red w-40 text-white rounded-3xl p-2 ">
          ADD TO CART
        </button>
      </div> */}

      {/* <div className="w-full h-16 flex items-center justify-center box-border  transition-all duration-200 bg-dark">
        <button className="w-3/4 text-white bg-red p-2 rounded-3xl">
          ADD TO CART
        </button>
      </div> */}
    </div>
  )
}

export default ProductCard;