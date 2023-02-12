import { NavLink } from "react-router-dom";


const Categories = () => {
  return (
    <div className=" flex justify-center gap-32 py-1 font-medium text-lg text-white">
      <NavLink  
        to="/electronics" 
        className={({isActive}) => isActive? "text-[#c3c5c9] pointer-events-none":""}
      >
        Electronics
      </NavLink>

      <NavLink  
        to="/jewelery"
        className={({isActive}) => isActive? "text-[#737B87] pointer-events-none":""}  
      >
        Jewelery
      </NavLink>

      <NavLink  
        to="/men"
        className={({isActive}) => isActive? "text-[#737B87] pointer-events-none":""}
      >
        Men's clothing
      </NavLink>

      <NavLink  
        to="/women"
        className={({isActive}) => isActive? "text-[#737B87] pointer-events-none":""}
      >
        Women's clothing
      </NavLink>
    </div>
  )
}

export default Categories;