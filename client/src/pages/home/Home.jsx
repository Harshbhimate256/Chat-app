import React from 'react'
import Sidebar from '../../components/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='min-h-[750px] min-w-[1100px] mx-auto p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex gap-10'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
