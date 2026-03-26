import exp from 'express'
import{config} from 'dotenv'
import {connect} from 'mongoose'
import {userApp} from './APIs/UserAPI'
import {adminApp} from './APIs/AdminAPI'
import {authorApp} from './APIs/AdminAPI'
import {commonApp} from './APIs/CommonAPI'
config()
const app=exp()
//db
app.use(exp.json())
app.use('user-api',userApp)
app.use('admin-api', adminApp)
app.use('author-api',authorApp)
app.use('common-api',commonApp)
const connectDB=async()=>{
    try{
     await connect(process.env.DB_URL)
     console.log('db server connected');
     //port
const port=process.env.PORT||4000
app.listen(port,()=>console.log(`server on port${port}`))
     
    }catch(err){
console.log('err in connection of db  ',err);

    }
}
connectDB()
 
app.use((req,res,next)=>{
    res.status(404).json({message:`path${req.url}invalid path`})
})
 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name==="ValidationError")
    {
        res.status(400).json({ message: "Validation failed", error: err.message });
    }
    if(err.name==="CastError")
    {
        res.status(400).json({ message: "Invalid input", error: err.message });
    }
    if(err.name==="mongooseError")
    {
        res.status(400).json({ message: "Mongoose error", error: err.message });
    }
})