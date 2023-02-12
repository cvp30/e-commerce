import { Carousel as Slider } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Carousel = () => {
  
  return (
    <div className="h-112 w-full">
      <Slider
        className="bg-principal"
        slideInterval={4000}
        leftControl={ <FontAwesomeIcon className='text-5xl text-background' icon={faChevronLeft} /> }
        rightControl={ <FontAwesomeIcon className='text-5xl text-background' icon={faChevronRight} /> }
      >
        <img
          className="h-full w-full"
          src="https://cdn.shopify.com/s/files/1/0122/2033/4180/files/Laptops_Tablets_Accessories.jpg?16384588217113715573"
          
        />
         <img
          className="h-full w-full"
          src="https://www.doverjewelry.com/media/weltpixel/owlcarouselslider/images/w/a/watch_homepage_banner.jpeg"
          alt="..."
        />
        
        <img
          src="https://www.doverjewelry.com/media/weltpixel/owlcarouselslider/images/2/0/2023_new_arrivals.jpeg"
          alt="..."
        />
        {/*
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        /> */}
      </Slider>
    </div>
  )
}

export default Carousel;