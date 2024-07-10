import React from 'react'
import Conversation from './Conversation'

const AllConversations = () => {
  return (
    <div className='py-2 flex flex-col h-[500px] overflow-y-auto hide-scrollbar'>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
    </div>
  )
}

export default AllConversations
