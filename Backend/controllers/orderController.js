import Order from "../Models/Order.js";
import Product from "../Models/Product.js";



//To Place an order on COD
export const placeOrderCOD = async(req,res)=>{
    try {
        const {userId,items,address} = req.body;
        if(!address || items.length === 0){
            return res.json({success:false,message:"Invalid Data"})
        }
        //Calculate Amount Using Items
        let amount = await items.reduce(async(acc, item)=>{
          const product = await Product.findById(item.product);
          return (await acc) + product.offerPrice * item.quantity
        },0)
        
        //add tax
        amount += Math.floor(amount *0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD",
        })

        return res.json({success:true, message:"Order Placed Succesfully"})
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
}

//Order detail Of Indivisual details
export const getUserOrders =async(req,res)=>{
    try {
        const {userId} = req.body;
        const orders = await Order.find({userId,$or:[{paymentType:"COD"},{isPaid:true}]}).populate(
            "items.product address"
        ).sort({createdAt: -1});
        res.json({success:true, orders})
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
}

//All order data for seller/admin
export const getAllOrders =async(req,res)=>{
    try {
        const orders = await Order.find({$or:[{paymentType:"COD"},{isPaid:true}]}).populate(
            "items.product address"
        ).sort({createdAt: -1});
        res.json({success:true, orders})
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
}