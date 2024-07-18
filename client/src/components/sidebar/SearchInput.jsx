import React, { useState } from 'react'
import { LuSearch } from "react-icons/lu";
import useGetConversation from '../hooks/useGetConversation'
import useConversation from '../../zustandStore/useConversation';
import toast from 'react-hot-toast';
const SearchInput = () => {

  const[search , setSearch] = useState('')
  const {setSelectedConversation} = useConversation();
  const{conversations} = useGetConversation();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      toast.error("Search term must be atleast 3 characters long")
    }
    const conversation = conversations.find((c)=>c.fullname && c.fullname.toLowerCase().includes(search.toLowerCase()));
  if(conversation){
      setSelectedConversation(conversation)
      setSearch('');
    }else{
      toast.error("No such user found")
    }
  }

  return (
    <form className='flex items-center gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-full" value={search} onChange={(e)=> setSearch(e.target.value)} />
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
