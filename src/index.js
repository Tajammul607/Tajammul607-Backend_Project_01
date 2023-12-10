// require('dotenv').config({'path':'./env'}) other way
import dotenv from 'dotenv'

import Db_connect from './db_connect/DB_index.js';

dotenv.config(
    {
        path:"./env"
    }
)



Db_connect







/*
import express  from 'express';
const app=express()
(async ()=> {
    try{
      await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      app.on("Error", (error)=>{
        console.log("Opps couldn't connect",error);
        throw error;
      })

      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on ${process.env.PORT}`);
      })

    }catch(error){
      console.error("ERROR",error)
    }
} )()
*/