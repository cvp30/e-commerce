import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faDollarSign, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

const Services = () => {

  const box = "shadow-md shadow-principal dark:shadow-white h-full w-72 h-5/6 flex justify-center items-center gap-8";
  return (
    <div className="box-border flex justify-around items-center gap-16 bg-background dark:bg-principal h-36 w-full max-w-screen-2xl m-auto">
      <div className={box}>
        <FontAwesomeIcon className='text-orange' size='2xl' icon={faTruckFast}/>
        <div>
          <p className='font-bold dark:text-white'>Free Shipping</p>
          <p className='text-slate'>Free deliver over $100</p>
        </div>
      </div>

      <div className={box}>
        <FontAwesomeIcon className='text-orange' size='2xl' icon={faDollarSign}/>
        <div>
          <p className='font-bold dark:text-white'>Money Back Guarantee</p>
          <p className='text-slate'>100% money back guarantee</p>
        </div>
      </div>

      <div className={box}>
        <FontAwesomeIcon className='text-orange' size='2xl' icon={faShieldHalved}/>
        <div>
          <p className='font-bold dark:text-white'>Secure Shopping</p>
          <p className='text-slate'>Best security features</p>
        </div>
      </div>

    </div>
  )
}

export default Services;