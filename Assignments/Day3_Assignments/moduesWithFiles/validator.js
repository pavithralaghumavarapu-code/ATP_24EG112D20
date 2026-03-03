  let validateTitle=function(title){
    if(!title){
        return "Title required"
    }
    if(title.length>=3)
         return 'title is valid' 
    else
       return  'title is invalid' 
       
        
 }
 let validatePriority=function(priority){
     if(!priority){
        return "proriy is required"
    }
     if(priority==='low'||priority==='medium'||priority==='high')
     return true
    return false
    // let pri=['low','medium',high]  let res=pri,includes(priority)
 }
 let validateDate=function(date){
    let duedate=new Date('24-6-2026')
        let today=new Date()
        if(duedate>today)return duedate
        return true
    
 
 }
  export {validateTitle,validatePriority,validateDate}