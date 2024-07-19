import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import useSendMessage from "../hooks/useSendMessage";

const MessageInput = () => {
  const[message,setMessage] = useState("");
  const{sendMessage,loading}=useSendMessage()
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message)
    setMessage('')
  }
  return (
    <form className="px-4 my-1" onSubmit={handleSubmit}>
      <div className="w-full flex">
        <input type='text'
          placeholder="Type here"
          className="text-lg textarea textarea-bordered w-[85%] resize-none no-scrollbar"
          rows="1"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <button className="mx-4 btn btn-circle btn-outline">
          {loading ? <span className="loading loading-spinner"></span>: <RiSendPlaneFill className="text-2xl" />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

// import React from "react";
// import { RiSendPlaneFill } from "react-icons/ri";

// const MessageInput = () => {
//   return (
//     <form className="px-4 my-1">
//       <div className="w-full">
//         <input
//           type="text"
//           placeholder="Type here"
//           className="input input-bordered w-[85%]"
//         />
//         <button className="mx-4 btn btn-circle btn-outline">
//         <RiSendPlaneFill  className="text-xl"/>
//       </button>
//       </div>

//     </form>
//   );
// };

// export default MessageInput;
