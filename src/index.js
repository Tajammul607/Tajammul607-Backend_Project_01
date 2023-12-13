// require('dotenv').config({'path':'./env'}) other way
import dotenv from 'dotenv'

import Db_connect from './db_connect/DB_index.js';
import { append } from 'vary';
import { app } from './app.js';

dotenv.config(
    {
        path:"./env"
    }
)

//middleware,controllers,routes,models,utils

Db_connect()
.then(()=>{
  app.listen(process.env.PORT || 8000,
    console.log(`Server is listening on ${process.env.PORT}`));

    app.on("ERROR",(err)=>{
      console.log(`Mongo db connection failed ${err}`);
      throw err;
    })
}
)
.catch((error)=>{
   console.log(`Mongo db connection failed !!! ${error}`)
})







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