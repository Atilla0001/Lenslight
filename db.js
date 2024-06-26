import mongoose, { mongo } from "mongoose"



const conn = ()=>{
    mongoose.connect(process.env.DB_URI,{
        dbName: "lenslight_tr"
    })
} 