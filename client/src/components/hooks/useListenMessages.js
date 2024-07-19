import { useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext"
import useConversation from "../../zustandStore/useConversation"

const useListenMessages = () => {
  const {socket} = useSocketContext()
  const {messages,setMessages} = useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        setMessages([...messages,newMessage])
    })
    return ()=> socket?.off("newMessage")
  },[socket,setMessages,messages])
}
//now call this hook inside messages component
export default useListenMessages
