import {Schema,model} from 'mongoose'
const commentSchema=new Schema({
    user:{
        type:Types.ObjectID,
        ref:"user",
   required:[true,'user id required']
    },coment:{
        type:String
    }
})

const articleSchema=new Schema({
author:{
    type: Types.ObjectID,
   ref:"user",
   required:[true,'author id required']
},
title:{
    type:String,
    required:[true,'title is requie=red']
},category:{
  type:String,
  required:[true,'category is required']
},
content:{
     type:String,
  required:[true,'content is required']
},
Comment:[commentSchema],
isArticleActice:{
    type:Boolean,
    
}
},{timestamps:true,
    versionKey:false,
    strict:"throw"})
export const  ArticleModel=model("article",articleSchema)