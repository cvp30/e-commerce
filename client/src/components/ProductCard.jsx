import StarRatings from "react-star-ratings";
import { CarShopping, Heart, Compare } from "../icons";

const ProductCard = ({ image, category, title, price, rating }) => {
  return (
    <div className=" box-border w-72 h-112 outline outline-1 outline-silver hover:outline-2 hover:outline-red relative flex flex-col group after:absolute after:w-full after:h-full after:top-0 after:-z-10 after:bg-white   transition duration-250 ease-in-out">

      <figure className="box-border w-full h-1/2 flex items-center justify-center">
        <img className="h-[90%] box-border " src={image} alt="" />
      </figure>

      <div className="bg-[yellow w-full h-[35%] flex flex-col items-center justify-between">
        <p className="text-[#8D99AE] text-sm font-normal">
          {category}
        </p>
        <p className="w-full text-center truncate text-dark text-lg font-bold">
          {title}
        </p>
        <div className="w-full flex justify-center items-center gap-2">
          <p className="text-red font-bold text-xl before:content-['$_']">
            {Number.parseFloat(price).toFixed(2)}
          </p>
          <p className="text-[#8D99AE] text-sm before:content-['$_'] line-through">
            999.00
          </p>
        </div>
        <StarRatings
          rating={rating}
          // changeRating={chageRating}
          starDimension="1rem"
          starSpacing="0px"
          starRatedColor="#D10024"
          numberOfStars={5}
        />

        <div className="w-full h-10 flex items-center justify-center gap-8">
          <button className="relative hover:after:block after:hidden after:absolute after:h-8 after:bg-dark after:-top-9 after:-left-9 after:font-normal after:tracking-wider after:content-['WISHLIST'] after:text-white after:text-sm after:px-4 after:py-2">
            <Heart className="h-4" strokeWidth={3} />
          </button >
          <button className="relative hover:after:block after:hidden after:absolute after:h-8 after:bg-dark after:-top-9 after:-left-9 after:font-normal after:tracking-wider after:content-['COMPARE'] after:text-white after:text-sm after:px-4 after:py-2">
            <Compare className="h-4" strokeWidth={3} />
          </button>
        </div>

      </div>

      <div className="w-full h-[15%] flex items-center justify-center box-border">
        <button className="bg-red border-2 border-red gap-0 hover:gap-3 text-white h-12 w-36 hover:w-44 flex items-center justify-center rounded-3xl  hover:bg-white hover:text-red transition-all duration-200 ease-in-out">
          <CarShopping className="h-5 text-red" />
          <p className="font-bold">ADD TO CART</p>
        </button>
      </div>

      {/* <div className="bg-white w-full h-20 absolute bottom-1 -z-20 group-hover:bg-dark group-hover:translate-y-20 transition-all duration-200 ease-in-out">

      </div> */}

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