
import exp from 'express'
export const productApp=exp.Router()



let products=[]
//http://localhost:3000/prods
 productApp.get('/prods',(req,res)=>{
    res.json({message:'all the products',payload:products})
})


productApp.get('/prods/:brand',(req,res)=>{
    let brandofurl=req.params.brand
    let ress=products.find(obj=>obj.brand===brandofurl )
 if(ress===undefined){
  return   res.json({message:'product not found'})
 }
 res.json({message:`${brandofurl} prod is`,payload: ress})
 
})

productApp.put('/prods',(req,res)=>{
    // get modified   user from client
    let modifiedProd=req.body
    //get idx of existing uer in users array
    let idx=products.findIndex(obj=>obj.id===modifiedProd.id)
    if(idx===-1){
        return res.json({message:"product not found"})
    }
    //update user with idx
    users.splice(idx,1,modifiedProd)
    //send res
    res.json({message:"product updated"})


})

productApp.post('/prods',(req,res)=>{
      //get prod
      //console.log();
      const newprod=req.body
      //push prod
      products.push(newprod)
      //send res
      res.json({message:'product is created'})
      
})


productApp.delete('/prods/:id',(req,res)=>{
 //get id from url parameter
  let idOfUrl=Number(req.params.id)               //param returns obj in  everytin in strings {id:'5'} so convert into number
 //find idx of user
 let idx=products.findIndex(obj=>obj.id===idOfUrl)
 if(idx===-1){
  return   res.json({message:'product not found'})
 }
 //dlete user by idx
 products.splice(idx,1)
 //send res
    l 
})  