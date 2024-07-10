import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const MessageInput = () => {
  return (
    <form className="px-4 my-1">
      <div className="w-full flex">
        <textarea
          placeholder="Type here"
          className="text-lg textarea textarea-bordered w-[85%] resize-none no-scrollbar"
          rows="1"
        />
        <button className="mx-4 btn btn-circle btn-outline">
          <RiSendPlaneFill className="text-2xl" />
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
