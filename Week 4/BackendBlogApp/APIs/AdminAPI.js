
import exp from 'express';
import { articleModel } from '../models/articleModel.js';
export const authorApp=exp.Router();

//write the article(protected route-it can be accessed by admin and user also)
authorApp.post("/article",async (req,res)=>{
 //get article from client 
   const articleobj=req.body
   //check author
   let author=await userModel.findById(articleobj.author)
   if(!author)
   {
    return res.status(404).json({message:"invalid author"})
   }
   //check role
   if(author.role!=="AUTHOR"){
     return res.status(403).json({message:"Only author can publish the articles"})
   }
   //create article document
   const articleDoc=new articleModel(articleobj);
   //save
   await articleDoc.save();
   //send res
   res.status(201).json({message:"article published succesfully"});
})


//(203) forbidden only authenticated but not authorized

 
authorApp.put("/article",async(req,res)=>{
   //get artcle from client 
   const articleobj=req.body
   //get user from decoded user
   
   //check author
   let author=await userModel.findById(articleobj.author)
   if(!author)
   {
    return res.status(404).json({message:"invalid author"})
   }
   //check role
 if(author.role !== "author")
{
   return res.status(403).json({message:"only author can publish"})
}
   //create article document
   const articleDoc=new articleModel(articleobj);
   //save
   await articleDoc.save();
   //send res
   res.status(201).json({message:"article published succesfully"});
});


 
authorApp.put("/article",async(req,res)=>{
 

})





