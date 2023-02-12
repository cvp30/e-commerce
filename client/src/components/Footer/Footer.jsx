
// subscribe, about us

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-principal text-white p-8">
      {/* <div 
        className="w-full  h-96 bg-no-repeat bg-cover bg-center bg-[url('https://thumbs.dreamstime.com/b/e-commerce-business-online-digital-internet-shopping-concept-virtual-screen-208785477.jpg')]"
      >
      </div> */}
      <h1 className="text-center font-bold">E-commerce</h1>
      <h3 className="text-center">Amazing e-commerce platform for everyone</h3>
      
      <div className="flex justify-center gap-24 mt-8">
        <Link to=''>About</Link>
        <Link to=''>Contact Us</Link>
        <Link to=''>Need help?</Link>
        <Link to=''>Terms of Use</Link>
        <Link to=''>Privacy Policy</Link>
        <Link to=''>Payment Methods</Link>
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <Link to="https://www.facebook.com">
          <img 
            className="w-12"
            src="https://img.icons8.com/color/96/null/facebook.png" alt="" 
          />
        </Link>

        <Link to="https://www.linkedin.com/">
          <img 
            className="w-12"
            src="https://img.icons8.com/fluency/96/null/linkedin.png" alt="" 
          />
        </Link>

        <Link to="https://github.com/">
          <img 
            className="w-12"
            src="https://img.icons8.com/3d-fluency/94/null/github.png" alt="" 
          />
        </Link>

        <Link to="https://twitter.com/">
          <img 
            className="w-12"
            src="https://img.icons8.com/fluency/48/null/twitter.png" alt="" 
          />
        </Link>
        
        
      </div>
      
    </footer>
  )
}


export default Footer;