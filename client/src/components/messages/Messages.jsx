import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton'

const Messages = () => {

  const {messages,loading} = useGetMessages()
  const lastMessageRef = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
    },100)
  },[messages])
  return (
    <div className='px-4 h-[600px] overflow-y-auto scroll-style'>
      {!loading && messages.length > 0 && messages.map((message)=>(
        <div key={message._id} ref={lastMessageRef}>
          <Message  message={message}/>
        </div>
      ))}

      {loading && [...Array(3)].map((_,index)=> <MessageSkeleton key={index}/>)}
      {!loading && messages.length === 0 &&(
        <p className='text-center'>Send a message to start conversation</p>
      )}
    </div>
  )
}

export default Messages

// import React from 'react'
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className='px-4 h-[600px] overflow-y-auto'>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//     </div>
//   )
// }

// export default Messages
