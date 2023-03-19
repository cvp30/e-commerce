import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faCartShopping, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MenuBar = () => {

  const linkClass = 'flex flex-col justify-center items-center';
  const fontClass = 'h-6 text-xl';
  const parClass = 'font-normal text-xs';

  const [mode, setMode] = useState(false);
  const handleMode = () => {
    const state = document.documentElement.classList.toggle("dark");
    setMode(state);
  }

  return (
    <div className='flex justify-center items-center gap-4 text-selected dark:text-white'>
      <Link to='' className={linkClass}>
        <FontAwesomeIcon className={fontClass} icon={faHeart} />
        <p className={parClass}>wishlist</p>
      </Link>

      <Link to='' className={`${linkClass} relative`}>
        
          <FontAwesomeIcon className={fontClass} icon={faCartShopping} />
          <p
            className='text-sm  rounded-full w-6 h-6 flex justify-center items-center text-orange -top-3 -right-3  font-bold absolute'
          >
            0
          </p>
        

        <p className={parClass}>my cart</p>
      </Link>

      <Link to='' className={linkClass}>
        <FontAwesomeIcon className={fontClass} icon={faUser} />
        <p className={parClass}>User</p>
      </Link>

      <p className='text-3xl text-[#c6c6c6] h-12'>|</p>

      <button onClick={handleMode} className='relative w-10 h-10'>
        <FontAwesomeIcon className={`absolute top-1 left-1.5 ${!mode ? "invisible":"" }`} size="xl" icon={faSun} />
        <FontAwesomeIcon className={`absolute top-1 left-2.5 ${mode ? "invisible":"" }`} size="xl" icon={faMoon} />
      </button>
      
    </div>
  )
}

export default MenuBar;