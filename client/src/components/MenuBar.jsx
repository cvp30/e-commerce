import { Link } from 'react-router-dom';
import { Heart, CarShopping } from '../icons';


const MenuBar = () => {

  const linkClass = 'flex flex-col justify-center items-center';
  const fontClass = 'h-6 text-xl';
  const parClass = 'font-normal text-xs';

  // const [mode, setMode] = useState(false);
  // const handleMode = () => {
  //   const state = document.documentElement.classList.toggle("dark");
  //   setMode(state);
  // }

  return (
    <div className=' h-14 w-full md:w-72 box-border text-white font-normal tracking-wide flex justify-around '>

      <Link to="" className='h-full flex flex-col justify-center items-center relative'>
        <span className='text-xs flex items-center justify-center absolute h-5 w-5 rounded-full bg-red top-0 right-1 box-border'>
          0
        </span>
        <Heart className="h-6" />
        <p className='text-sm'>Your Wishlist</p>
      </Link>

      <Link to="" className='h-full flex flex-col justify-center items-center relative'>
        <span className='text-xs flex items-center justify-center absolute h-5 w-5 rounded-full bg-red top-0 -right-1 box-border'>
          0
        </span>
        <CarShopping className="h-6" />
        <p className='text-sm '>Your Cart</p>
      </Link>

      <Link to="" className='h-full flex flex-col justify-center items-center'>
        <img className='h-6 rounded-full' src="data:image/png;base64,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" alt="" />
        <p className='text-sm '>Your Account</p>
      </Link>

    </div>
  )
}

export default MenuBar;