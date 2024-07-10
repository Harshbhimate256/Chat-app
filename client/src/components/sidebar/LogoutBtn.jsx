import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";

const LogoutBtn = () => {
  return (
    <div className='cursor-pointer rounded-full border m-auto flex mt-32 ml-0 p-2 hover:bg-slate-500'>
      <RiLogoutCircleLine className='text-white w-7 h-7 mt-auto' />
    </div>
  )
}

export default LogoutBtn
