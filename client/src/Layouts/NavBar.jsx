import SearchBar from "../components/SearchBar/SearchBar";
import MenuBar from "../components/MenuBar/MenuBar";
import Categories from "../components/Categories/Categories";
import { Link, Outlet } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <header className="bg-principal px-5 py-1">
        <div className="flex justify-between items-center mt-1">
          <Link to='/'>
            <h1 className="text-orange font-medium">E-commerce</h1>
          </Link>
          
          <SearchBar />

          <MenuBar />
        </div>

        <Categories />

      </header>

      <Outlet />
    </>
  )
}

export default NavBar;