import { NavLink } from "react-router-dom";


const Categories = () => {

  const style = ({isActive}) => isActive? 'text-orange pointer-events-none':'text-principal hover:text-orange dark:hover:text-orange dark:text-white'
  return (
    <div className="w-full border-t-2 border-b-2 border-principal dark:border-orange flex justify-center gap-32 py-1 font-bold text-sm tracking-wider">
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