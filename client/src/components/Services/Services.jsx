import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faDollarSign, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

const Services = () => {

  const iconStyle = 'text-orange w-16 h-12 box-border p-2 ';
  const box = " dark:shadow-white text-white h-full w-72 h-2/3 px-1 flex justify-center items-center gap-3";
  return (
    <div className="box-border flex justify-around items-center gap-16 bg-principal dark:bg-principal  h-28 w-full max-w-screen-2xl m-auto">
      <div className={box}>
        <FontAwesomeIcon className={iconStyle}  icon={faTruckFast}/>
        <div>
          <p className='font-semibold'>Free Shipping</p>
          <p className='text-slate text-sm'>Free deliver over $100</p>
        </div>
      </div>

      <div className={box}>
        <FontAwesomeIcon className={iconStyle} icon={faDollarSign}/>
        <div>
          <p className='font-semibold'>Money Back Guarantee</p>
          <p className='text-slate text-sm'>100% money back guarantee</p>
        </div>
      </div>

      <div className={box}>
        <FontAwesomeIcon className={iconStyle} icon={faShieldHalved}/>
        <div>
          <p className='font-semibold'>Secure Shopping</p>
          <p className='text-slate text-sm'>Best security features</p>
        </div>
      </div>

    </div>
  )
}

export default Services;