import SearchBar from "../components/SearchBar/SearchBar";
import MenuBar from "../components/MenuBar/MenuBar";
import Categories from "../components/Categories/Categories";
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logo.png'

const NavBar = () => {

  return (
    <>
      <header className="bg-background dark:bg-principal  pt-1">
        <div className="flex justify-between items-center mt-1 px-5  h-20 w-full max-w-screen-2xl mx-auto">
          <Link className="box-border w-28 " to='/'>
            <img className="h-full" src={logo} alt="" />
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