import { validateTitle,validatePriority,validateDate } from "./validator.js";
let Title= validateTitle('ad')
let Priority=validatePriority('')
let Date=validateDate('23-6-2026')
console.log(Title);
console.log(Priority);
console.log(Date);



let tasks=[]
 export function addTask(Title,Priority,Date){
    if(!validateTitle(Title)&&!validatePriority(Priority)&&!validateDate(Date)){
        return "Invalid task"
    }
    else
         tasks.push({Title,Priority,Date})
        console.log(tasks);
        
}
 export function getAllTasks(){
    return  
 }