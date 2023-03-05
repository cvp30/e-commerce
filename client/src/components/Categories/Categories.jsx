import { NavLink } from "react-router-dom";


const Categories = () => {

  const style = ({isActive}) => isActive? 'text-selected pointer-events-none':'text-principal dark:text-white'
  return (
    <div className=" flex justify-center gap-32 py-1 font-medium text-sm tracking-wider">
      <NavLink  
        to="/detail" 
        className={style}
      >
        Electronics
      </NavLink>

      <NavLink  
        to="/jewelery"
        className={style}
      >
        Jewelery
      </NavLink>

      <NavLink  
        to="/men"
        className={style}
      >
        Men's clothing
      </NavLink>

      <NavLink  
        to="/women"
        className={style}
      >
        Women's clothing
      </NavLink>
    </div>
  )
}

export default Categories;