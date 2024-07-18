import React from "react";
import {useAuthContext} from '../../context/AuthContext'
import useConversation from "../../zustandStore/useConversation";
import { extracTime } from "../../utils/extractTime";
const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const{selectedConversation}=useConversation();
  const fromMe = message.senderId === authUser._id;

  const formattedTime = extracTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.ProfilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
  return (
    <>
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt=""
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white  ${bubbleBgColor}`}>{message.message}</div>
      <div className="chat-footer opacity-50">{formattedTime}</div>
    </div>
    </>
  );
};

export default Message;



// import React from "react";

// const Message = () => {
//   return (
//     <>
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS chat bubble component"
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//           />
//         </div>
//       </div>
//       <div className="chat-bubble">You were the Chosen One!</div>
//       <div className="chat-footer opacity-50">Delivered</div>
//     </div>
//     <div className="chat chat-start">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS chat bubble component"
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//           />
//         </div>
//       </div>
//       <div className="chat-bubble">You were the Chosen One!</div>
//       <div className="chat-footer opacity-50">Delivered</div>
//     </div>
//     </>
//   );
// };

// export default Message;
