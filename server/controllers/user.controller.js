import User from "../models/userModel.js";

export const getUserOfSidebar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id;
        const allUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password"); //this inside find() says find all users except the user which is not equal to the loggedin user so that we will not see our own id in the chat box
        res.status(200).json(allUsers);
    } catch (error) {
        console.log("error in getUserOfSidebar function" , error.message);
        res.status(500).json({error: "internal server error"});
    }
}