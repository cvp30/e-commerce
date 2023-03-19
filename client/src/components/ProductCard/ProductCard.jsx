import { faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
const ProductCard = ({ title, price, image, rating }) => {

  const [ptje, setPtje] = useState(rating);

  const chageRating = nuevo => {
    setPtje(nuevo)
  }

  return (
    <div
      className="relative z-0 box-border mx-auto bg-white shadow-xl  hover:shadow-principal dark:hover:shadow-background w-72 h-96 pt-4 rounded-lg"
    >
      <div className="absolute right-1 top-1 ">
        <StarRatings
          rating={ptje}
          // changeRating={chageRating}
          starDimension="1rem"
          starSpacing="0px"
          starRatedColor="#ffd105"
          numberOfStars={5}
        />

        <p className="text-center text-xs">{rating}</p>
      </div>
      <div className=" h-[56%]">
        <Link to="">
          <img
            className=" w-[48%] h-[95%] mx-auto hover:w-[53%] hover:h-[100%] ease-in-out duration-200"
            src={image}
            alt=""
          />
        </Link>
      </div>

      <div
        className=" box-border relative py-4 px-2 w-full h-[44%] rounded-b-2xl"
      >
        <p
          className="z-40 text-lg font-semibold mt-2  truncate"
        >
          {title}
        </p>

        <p
          className="before:content-['$_'] font-semibold box-border pb-5"
        >
          {Number.parseFloat(price).toFixed(2) }
        </p>

        <div className=" box-border flex justify-between  mt-1">
          <input type="number" defaultValue={1} min={0} className="border border-slate w-12  text-center" />

          <div className="flex justify-center items-center gap-3">
            <div className="relative text-principal group cursor-pointer flex pt-2 gap-2 hover:text-[black]">
              <FontAwesomeIcon className="text-xl" icon={faHeart} />
              <p className="absolute whitespace-nowrap px-1 text-sm text-center invisible group-hover:visible text-white bg-principal rounded -left-8 -top-5">add to wish list</p>
              <span className="-z-10 absolute w-3 h-3 rotate-45 invisible group-hover:visible bg-principal -top-2 left-1"></span>
            </div>

            <div className="relative text-principal group cursor-pointer flex pt-2 gap-2 hover:text-[black]">
              <FontAwesomeIcon className="text-xl" icon={faCartPlus} />
              <p className="absolute whitespace-nowrap px-1 text-sm text-center invisible group-hover:visible text-white bg-principal rounded -left-8 -top-5">add to Cart</p>
              <span className="-z-10 absolute w-3 h-3 rotate-45 invisible group-hover:visible bg-principal -top-2 left-1"></span>
            </div>
          </div>


        </div>


      </div>




    </div>
  )
}

export default ProductCard;