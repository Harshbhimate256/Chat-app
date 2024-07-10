import React from 'react'
import SearchInput from './sidebar/SearchInput'
import AllConversations from './sidebar/AllConversations'
import LogoutBtn from './sidebar/LogoutBtn'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-300 p-4 flex flex-col  w-full'>
      <SearchInput/>
      <div className='divider px-3'></div>
      <AllConversations/>
      <LogoutBtn/>
    </div>
  )
}

export default Sidebar


// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-300 p-4 flex flex-col'>
//       <SearchInput/>
//       <div className='divider px-3'></div>
//       <AllConversations/>
//       <LogoutBtn/>
//     </div>
//   )
// }

// export default Sidebar
