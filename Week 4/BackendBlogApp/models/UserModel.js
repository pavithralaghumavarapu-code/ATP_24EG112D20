import {Schema,model} from 'mongoose'


const userSchema=new Schema({
    firstName:{
        tyep:String,
        required:[true,'first name is req'],
    },
    lastName:{
        type:String 
    },email:{
        type:String,
         required:[true,'first name is req'],
         unique:[true,'email alredy exists']
    },password:{
        type:String,
         required:[true,'password  is req'],
    },role:{
        type:String,
         enum:["USER","AUTHOR","ADMIN"],
         required:[true,'{Value} is an invalid role'],
    },
    profileImgUrl:{                
        type:String                
    }                             
    ,isUserActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true,
    versionKey:false,
    strict:"throw"
})
//create midel
export const UserModel=model('user',userSchema)