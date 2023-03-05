import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const MenuBar = () => {

  const linkClass = 'flex flex-col justify-center items-center';
  const fontClass = '  text-xl';
  const parClass = '  font-bold text-sm'; 

  
  return (
    <div className='flex gap-10 text-principal dark:text-white'>
      <Link to='' className={linkClass}>
        <FontAwesomeIcon className={fontClass} icon={faHeart} />
        <p className={parClass}>orders</p>
      </Link>

      <Link to='' className={linkClass}>
        <div className='relative '>
          <FontAwesomeIcon className={fontClass} icon={faCartShopping} />
          <p
            className='text-sm  rounded-full w-6 h-6 flex justify-center items-center text-orange -top-3 -right-5  font-bold absolute'
          >
            0
          </p>
        </div>

        <p className={parClass}>my cart</p>
      </Link>

      <Link to='' className={linkClass}>
        <FontAwesomeIcon className={fontClass} icon={faUser} />
        <p className={parClass}>User</p>
      </Link>
    </div>
  )
}

export default MenuBar;