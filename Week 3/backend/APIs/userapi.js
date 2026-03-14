//create mini-exp app(separate route)
import exp from 'express'
export const userApp=exp.Router()




//test data
let users=[]
//create REST API
//create route 
userApp.get('/users',(req,res)=>{
    res.json({message:'all the users',payload:users})
})
 userApp.get('/users/:id',(req,res)=>{
    let idofurl=Number(req.params.id)
    let idx=users.findIndex(userobj=>userobj.id===idofurl)
 if(idx===-1){
  return   res.json({message:'user not found'})
 }
 res.json({message:`${idofurl} user is`,payload:users[idx]})
 
})
//Route to handle POST(create) req of client
userApp.post('/users',(req,res)=>{
      //get user
      //console.log();
      const newUser=req.body
      //push user to users
      users.push(newUser)
      //send res
      res.json({message:'user is created'})
      
})
//Route to handle PUT(update) req of client
 userApp.put('/users',(req,res)=>{
    // get modified   user from client
    let modifieduser=req.body
    //get idx of existing uer in users array
    let idx=users.findIndex(userobj=>userobj.id===modifieduser.id)
    if(idx===-1){
        return res.json({message:"user not found"})
    }
    //update user with idx
    users.splice(idx,1,modifieduser)
    //send res
    res.json({message:"user updated"})


})                // from :id is url argument here id is key
//Route to handle DELETE req of client
 userApp.delete('/users/:id',(req,res)=>{
 //get id from url parameter
  let idOfUrl=Number(req.params.id)               //param returns obj in  everytin in strings {id:'5'} so convert into number
 //find idx of user
 let idx=users.findIndex(userobj=>userobj.id===idOfUrl)
 if(idx===-1){
  return   res.json({message:'user not found'})
 }
 //dlete user by idx
 users.splice(idx,1)
 //send res
    l 
})  

//when ever we change code in routes while server is running we on;y see old code so to over come his instead of starting server so many time w download
// -p nodemon which monitors the code always to instal this npm install -g nodemon
