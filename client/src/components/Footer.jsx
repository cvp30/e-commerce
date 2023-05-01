import { Letter, Map, Phone } from "../icons";


const Footer = () => {
  return (
    <section className="w-full max-w-screen-2xl h-80 bg-dark text-[#B9BABC] flex justify-center items-center border-t-4 border-red ">

      <div className="h-60 w-64 flex flex-col justify-start items-start gap-3 ">
        <h3 className="font-bold text-white">ABOUT US</h3>
        <p className="text-base tracking-wider ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure temporibus placeat maxime.</p>
        <div className="flex w-full justify-start items-center gap-4">
          <Letter className="h-6 text-red" />
          <p>carlos.valer.p30@gmail.com</p>
        </div>
        <div className="flex w-full justify-start items-center gap-4">
          <Phone className="h-6 text-red" />
          <p>+012-34-56-78</p>
        </div>
        <div className="flex w-full justify-start items-center gap-4">
          <Map className="h-6 text-red" />
          <p>1234 New Road</p>
        </div>
      </div>

      <div className="h-60 w-64 flex flex-col justify-start items-start gap-3">
        <h3 className="font-bold text-white">CATEGORIES</h3>
        <div className="flex flex-col gap-5">
          <p>Electronics</p>
          <p>Men's clothing</p>
          <p>Jewelery</p>
          <p>Women's clothing</p>
        </div>
      </div>

      <div className="h-60 w-64 flex flex-col justify-start items-start gap-3">
        <h3 className="font-bold text-white">INFORMATION</h3>
        <div className="flex flex-col gap-5">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>

      <div className="h-60 w-64 flex flex-col justify-start items-start gap-3">
        <h3 className="font-bold text-white">SERVICE</h3>
        <div className="flex flex-col gap-5">
          <p>My Account</p>
          <p>View Cart</p>
          <p>Wishlist</p>
          <p>Help</p>
        </div>
      </div>


    </section>
  )
}

export default Footer;