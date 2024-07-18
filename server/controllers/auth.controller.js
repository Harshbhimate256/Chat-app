import bcrypt from "bcryptjs/dist/bcrypt.js";
import userModel from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";


export const signup = async(req,res)=>{
    try{
        const {fullname,username,password,confirmPassword,gender} = req.body;

        if(password!=confirmPassword){
            return res.status(400).json({error:"Passwords dont match"})
        }
        const user =await userModel.findOne({username});
        if(user){
            res.status(400).json({error:"username already exists"})
        }
        //HASH password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt)

        const profilePicBoy = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const profilePicGirl = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new userModel({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? profilePicBoy : profilePicGirl
        })
        if(newUser){
            //generate JWT token
            generateToken(newUser._id,res);
            await newUser.save();

            res.status(201).json({
            _id:newUser._id,
            fullname:newUser.fullname,
            username:newUser.username,
            ProfilePic:newUser.profilePic,
            message:"user signup successfull"
        })
        }else{
            res.status(400).json({error:"invalid user data"})
        }
        
    }catch(error){
        console.log("error in signup controller",error.message)
        res.status(500).json({error: "internal server error"});
    }
}
export const login =async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await userModel.findOne({username});
        const checkPassword = await bcrypt.compare(password,user?.password || "");
        if(!user || !checkPassword){
            return res.status(400).json({error:"invalid credentials"});
        }
        generateToken(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            username:user.username,
            ProfilePic:user.profilePic,
            message:"user logged in successfully"
        })
    }catch(error){
        console.log("error in login controller",error.message)
        res.status(500).json({error: "internal server error"});
    }
}
export const logout = async(req,res)=>{
   try {
     res.cookie("jwt", "",{maxAge:0})
     res.status(200).json({message:"logged out successfully"})
   } catch(error){
    console.log("error in logout controller",error.message)
    res.status(500).json({error: "internal server error"});
}
}