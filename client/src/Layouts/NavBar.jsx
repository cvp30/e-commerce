import SearchBar from "../components/SearchBar/SearchBar";
import MenuBar from "../components/MenuBar/MenuBar";
// import Categories from "../components/Categories/Categories";
// import { Link, Outlet } from "react-router-dom";
// import logo from '../assets/logo.png'

const NavBar = () => {

  return (
    <header className="w-full h-40 md:h-26 bg-header border-b-[3px] border-b-red box-border flex items-center">

      <div className="w-full px-2 md:px-0 md:w-[95%] max-w-screen-2xl h-full md:h-3/4 mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-4xl text-white">
          <span className="text-red">E</span>
          COMMERCE
        </p>

        <SearchBar />

        <MenuBar />

      </div>

      {/* 
      <p className="text-4xl text-white">
        <span className="text-red">E</span>
        COMMERCE
      </p>

      <SearchBar />

      <div className=" h-8 flex border">
      </div> 
      */}


    </header>
    // <>
    //   <header className="bg-background dark:bg-principal  pt-1">
    //     <div className="flex justify-between items-center mt-1 px-5  h-20 w-full max-w-screen-2xl mx-auto">
    //       <Link className="box-border w-28 " to='/'>
    //         <img className="h-full" src={logo} alt="" />
    //       </Link>

    //       <SearchBar />

    //       <MenuBar />
    //     </div>

    //     <Categories />

    //   </header>

    //   <Outlet />
    // </>
  )
}

export default NavBar;