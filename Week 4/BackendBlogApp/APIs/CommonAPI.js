import exp from 'express'
import {hash} from 'bcryptjs'
export const commonApp=exp.Router()

commonApp.post('/users',async(req,res)=>{
    const alloweduser=['USER',"AUTHOR"]
    const newUser=req.body 
    //chec role
    if(!alloweduser.includes(newUser)){
        return req.status(400).json({message:'invalid user'})
    }
newUser.password= await hash(newUser,passwors,12)
    //create new user
    const newUserDoc=new UserModel(newUser)

    await newUserDoc.save(
        res.json(201).json({message:'user is created'})
    )
})

//route for login 
//route for login
commonApp.post("/users",async(req,res)=>{
    const user=await userModel.findOne({email:req.body.email})
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    const isMatch = await compare(req.body.password,user.password)
  if(!isMatch){
    return res.status(401).json({message:"Invalid password"})
  }
  res.json({message:"Login successful"})
})
//route for logout

commonApp.put('/password',vertifyToken("AUTOR",'USER','ADMIN'),(req,res)=>{
//check cur pass and new password are same 
const {curpass,newpass}=req.body;
if(curpass==newpass){
    return res.status().json({message:'new pass should not match old'})
}
//get cur password of user/admin/author

const currpass=
//check thhe cur pass of req and user are not same
//hash the pass
// replace cur pass of user with new pass
//save
//send res








})






const bcrypt = require('bcrypt');

commonApp.put('/password', verifyToken("AUTHOR","USER","ADMIN"), async (req, res) => {

    
        const { curpass, newpass } = req.body;

        // check if new password same as old password
        if (curpass === newpass) {
            return res.status(400).json({ message: "New password should not match old password" });
        }

        // get current user from token
        const user = req.user;

        // compare current password with DB password
        const isMatch = await  compare(curpass, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Current password is incorrect" });
        }

        // hash new password
        const hashedPassword = await bcrypt.hash(newpass, 10);

        // update password
        user.password = hashedPassword;

        // save to DB
        await user.save();

        res.json({ message: "Password updated successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});