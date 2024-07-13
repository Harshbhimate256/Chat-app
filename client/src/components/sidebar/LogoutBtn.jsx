import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
import useLogout from '../hooks/useLogout.js';

const LogoutBtn = () => {
  const{loading,logout} = useLogout()
  return (
    <div className='cursor-pointer rounded-full border m-auto flex mt-32 ml-0 p-2 hover:bg-slate-500'>
      {!loading ? (
        <RiLogoutCircleLine className='text-white w-7 h-7 mt-auto' onClick={logout} />)
      :
      (<span className='laoding loading-spinner'></span>)}
    </div>
  )
}

export default LogoutBtn;
