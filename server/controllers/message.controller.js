import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId } from "../socket/socket.js";

export const sendMessages =async (req,res)=>{
    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

       let conversation = await Conversation.findOne({
            participants: {$all : [senderId,receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId,receiverId]
            })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id)
        }

        await Promise.all([conversation.save(),newMessage.save()]); // this will work parallel

        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            //io.to(<socket_id>).emit() used to send to events to specific client
            io.to(receiverSocketId).emit("newMessage",newMessage) //we sent the message to to client in the newMessage variable and we have to now catch it in client side(hook used)
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("error in sendMessage controller", error.message);
        res.status(500).json({error:"internal server error"})
    }
}
export const getMessages = async(req,res)=>{
    try{
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants:{$all : [senderId, userToChatId]},
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);

        res.status(200).json(conversation.messages)
    }catch (error) {
        console.log("error in getMessage controller", error.message);
        res.status(500).json({error:"internal server error"})
    }
}