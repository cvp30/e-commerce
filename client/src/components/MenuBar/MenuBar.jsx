import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Avatar } from 'flowbite-react';

const MenuBar = () => {

  const linkClass = 'flex flex-col justify-center items-center';
  const fontClass = ' text-white text-3xl rounded-full';
  const parClass = ' text-white ont-bold text-base'; 

  
  return (
    <div className='flex gap-10'>
      <Link to='' className={linkClass}>
        <FontAwesomeIcon className={fontClass} icon={faHeart} />
        {/* <Avatar status='away' statusPosition='bottom-right'/> */}

        <p className={parClass}>orders</p>
      </Link>

      <Link to='' className={linkClass}>
        <div className='relative'>
          <FontAwesomeIcon className={fontClass} icon={faCartShopping} />
          <p
            className='bg-orange rounded-full w-6 h-6 text-center text-white bottom-0 right-0 translate-x-1/4 translate-y-1/4 font-semibold absolute'
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