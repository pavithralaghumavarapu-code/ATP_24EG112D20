
//Write a function that receives an array as arg and return their sum
function sumOfArr(a){
    let sum=0
    for(let i=0;i<a.length;i++){
sum=sum+a[i]
    }
    return sum
}

let result=sumOfArr([1,2,3])
console.log(result)
