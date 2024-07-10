import React from 'react'
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-4'>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-full" />
        <div className='rounded-full border-gray-400 border-2 p-3 cursor-pointer hover:bg-gray-400 hover:text-white'>
            <LuSearch />
        </div>
    </form>
  )
}

export default SearchInput


// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-4'>
//         <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
//         <div className='rounded-full border-gray-400 border-2 p-3 cursor-pointer hover:bg-gray-400 hover:text-white'>
//             <LuSearch />
//         </div>
//     </form>
//   )
// }

// export default SearchInput
