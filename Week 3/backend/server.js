//create server
import exp from 'express'
const app=exp() 
import {userApp} from "./APIs/userapi.js"
import {productApp} from "./APIs/productapi.js"
//use body parser inbuilt middleware extracts body from post and put
app.use(exp.json())
 //create custom middleware fun
 function middleware1(req,res,next){
    //send res from middleware
   // res.json({message:"this res from middleware1"})
    //forward req to 
    console.log("middleware1 executed")
    next()
 }
 function middleware2(req,res,next){
    //send res from middleware
    //res.json({message:"this res from middleware2"})
    //forward req to 
    console.log("middleware2 executed")
    next()
 }





//use middleware
app.use(middleware1)
app.use(middleware2)
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//app is a special name used to identify express application  exp app contains http server
// created server now set a port num





const port=3000
//assign port  num to http server
app.listen(port,()=>console.log(`server lisening on port ${port}`))


 