import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faCartShopping, faSun } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MenuBar = () => {

  const linkClass = 'flex flex-col justify-center items-center';
  const fontClass = 'h-4 text-xl';
  const parClass = 'font-normal text-sm';

  // const [mode, setMode] = useState(false);
  const handleMode = () => {
    const state = document.documentElement.classList.toggle("dark");
    // setMode(state);
  }
  // console.log(mode)

  return (
    <div className='flex justify-center items-center gap-10 text-selected dark:text-white'>
      <Link to='' className={linkClass}>
        <FontAwesomeIcon className={fontClass} icon={faHeart} />
        <p className={parClass}>orders</p>
      </Link>

      

      <Link to='' className={`${linkClass} relative`}>
        
          <FontAwesomeIcon className={fontClass} icon={faCartShopping} />
          <p
            className='text-sm  rounded-full w-6 h-6 flex justify-center items-center text-orange -top-3 -right-1  font-bold absolute'
          >
            0
          </p>
        

        <p className={parClass}>my cart</p>
      </Link>

      <Link to='' className={linkClass}>
        <FontAwesomeIcon className={fontClass} icon={faUser} />
        <p className={parClass}>User</p>
      </Link>

      <button onClick={handleMode} className="border">mode</button>
      {/* <button onClick={handleMode} className='relative w-16 group h-8 box-border border border-principal dark:border-white bg-white rounded-full'>
      <FontAwesomeIcon className={`absolute text-star h-6 top-1 left-1 group-checked:left-4 ${mode ? '':''}`} spin icon={faSun} />
      
      </button> */}
    </div>
  )
}

export default MenuBar;