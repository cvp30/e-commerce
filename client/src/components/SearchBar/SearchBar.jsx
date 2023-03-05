import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className='border-2 border-principal text-sm flex items-center rounded-lg w-2/5 bg-white'>

      <select
        className='outline-0 rounded-l-lg w-72 h-full p-3 '
      >
        <option value="all">All Categories</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>

      <input 
        type="text" 
        placeholder="search anything ..." 
        className="outline-0 p-3 w-full bg-white border-0 rounded-r-lg "
      />
      
      <button className='bg-inherit px-2 cursor-pointer'>
        <FontAwesomeIcon className='text-xl text-principal' icon={faMagnifyingGlass} />
      </button>

    </div>
  )
}

export default SearchBar;