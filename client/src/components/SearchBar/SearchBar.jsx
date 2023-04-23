import { Search } from "../../icons";

const SearchBar = () => {
  return (
    <div className='border-2 border-principal text-sm flex items-center rounded-lg w-full md:w-2/5 h-12 bg-white'>

      <select
        className='hidden lg:block outline-0 rounded-l-lg w-4/12 h-full p-3'
      >
        <option value="all">All</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men</option>
        <option value="women's clothing">women</option>
      </select>

      <input 
        type="text" 
        placeholder="Search ..." 
        className="outline-0 p-3 w-11/12 lg:w-7/12 bg-white rounded-r-lg rounded-l-lg lg:rounded-l-none"
      />
      
      <button className='bg-inherit w-10 flex items-center justify-center h-full cursor-pointer'>
        <Search className="h-6 text-red"/>
      </button>

    </div>
  )
}

export default SearchBar;