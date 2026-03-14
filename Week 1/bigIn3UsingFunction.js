//Write a function that receives 3 number args and  return the big number
function bigNum(a,b,c){
    if(a>b&&a>c)return a
    else if (b>a&&b>c)return b
    else 
        return c
}
 let result=bigNum(1,2,3)
 console.log(result)