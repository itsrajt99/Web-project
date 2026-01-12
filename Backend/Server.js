import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config" ;
import userRouter from "./Routes/userRoute.js";
import sellerRouter from "./Routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./Routes/productRoute.js";
import cartRouter from "./Routes/cartRoute.js";
import addressRouter from "./Routes/addressRoute.js";
import orderRouter from "./Routes/orderRoute.js";


const app = express();
const port = process.env.PORT || 4000;

//DB Connection
await connectDB();

//Cloudinary-setup
await connectCloudinary();


//Allow multiple server to acess backend
const allowedOrigins = ['http://localhost:5173']

//MiddleWear Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins, credentials: true}));


//Route Path
app.get("/",(req,res)=>{
   res.send("Api is Working")
});
app.use("/api/user",userRouter);
app.use("/api/seller",sellerRouter);
app.use("/api/product",productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/address',addressRouter);
app.use('/api/order',orderRouter)


//Server Port 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})