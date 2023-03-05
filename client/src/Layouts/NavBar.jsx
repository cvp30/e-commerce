import SearchBar from "../components/SearchBar/SearchBar";
import MenuBar from "../components/MenuBar/MenuBar";
import Categories from "../components/Categories/Categories";
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logo.png'

const NavBar = () => {

  const handleMode = e => {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <header className="bg-background dark:bg-principal  px-5 py-1">
        <div className="flex justify-between items-center mt-1 h-20 w-full max-w-screen-2xl mx-auto">
          <Link className="h-full" to='/'>
            <img className="h-full" src={logo} alt="" />
          </Link>

          <SearchBar />

          <MenuBar />
        </div>

        <Categories />
        <button onClick={handleMode} className="">dark</button>

      </header>

      <Outlet />
    </>
  )
}

export default NavBar;