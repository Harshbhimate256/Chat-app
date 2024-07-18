import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustandStore/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  // const noChatSelected = true;
  const {selectedConversation,setSelectedConversation}=useConversation()
  

  //cleanup fucntion where if user logout the selected conversation will be cleaned
  useEffect(()=>{
    return ()=>{
      setSelectedConversation(null)

    }
  },[setSelectedConversation])
  return (
    <div className="min-w-[600px] flex py-4 flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-3 text-center rounded-xl">
            <span className="text-gray-900 font-bold text-xl font-serif">
              {selectedConversation.fullname}
            </span>
          </div>
          <div className="divider px-0 py-0 h-1" />
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {

  const {authUser} = useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser.fullname}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'

// const MessageContainer = () => {
//   return (
//     <div className='min-w-[600px] flex py-4 flex-col'>
//     <>
//     <div className='bg-slate-500 px-4 py-2 mb-3 text-center rounded-xl' >
//         <span className='text-gray-900 font-bold text-xl font-serif'>John Doe</span>
//     </div>
//     <div className='divider px-0 py-0 h-1'/>
//     <Messages/>
//     <MessageInput/>
//     </>
//     </div>
//   )
// }

// export default MessageContainer
