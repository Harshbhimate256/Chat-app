import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../hooks/useGetConversation'

const AllConversations = () => {

  const {loading,conversations} = useGetConversation()
  // console.log(conversations);
  return (
    <div className='py-2 flex flex-col h-[500px] overflow-y-auto hide-scrollbar'>

    {conversations.map((conversation,index)=>(
      <Conversation key={conversation._id} conversation={conversation} lastIndex={index === conversation.length - 1}/>
    ))}


      {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  )
}

export default AllConversations



// import React from 'react'
// import Conversation from './Conversation'

// const AllConversations = () => {
//   return (
//     <div className='py-2 flex flex-col h-[500px] overflow-y-auto hide-scrollbar'>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//     </div>
//   )
// }

// export default AllConversations
