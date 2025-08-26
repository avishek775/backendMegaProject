import app from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";



dotenv.config({
    path:"./.env"
})

connectDB()
.then(()=>{
app.listen(port, ()=> console.log(`Server is running on port: ${port}`))
}).catch((err)=>{
    console.error("MongoDB connection error", err)
    process.exit(1)
});



const port= process.env.PORT || 8000