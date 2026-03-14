//Write a function that receives an array & search element as args and returns
//  the index of that search element in the array. It should return "not found"
//  when search element not found.
function searchKey(array,key){
    for(let i=0;i<array.length;i++){
        if(array[i]==key)return i
    }
    return "not found"
}
let result=searchKey([10,20,30],30)
console.log(result)