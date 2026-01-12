import User from "../Models/User.js";


//Update user Cart Data
export const updateCart = async(req,res)=>{
    try {
        const {userId,cartItems} = req.body;

        await User.findByIdAndUpdate(userId,{cartItems});
        res.json({sucess:true,message:"Cart Updated"})
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
}