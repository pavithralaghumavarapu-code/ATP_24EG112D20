const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
 
 
 
//1.Insert new Emp at 2nd position
employees.splice(2,0,{eno:100,name:'pavi',marks:[100,100,100]})
//create let newemp={id:...} and add like employe.slice(2,0,newemp)
 console.log(employees)

 //2.Remove an emp with name "Kiran"
employees.splice(4,1)
//we can also do with findingidx  
// let kiranidx=employees.findIndex(emp=>emp.name==='kiran) employees.splice(kiranidx,1)
console.log(employees)


//3.Change the last mark 95 to 75 of emp  "Sneha"
 employees.splice(3,0,employees[3] .marks.splice(2,1,75))
console.log(employees)
/*
let sneha=employees.find(emp=>emp.name==='sneha')
if(sneha){
    sneha.marks.splice(marks.length-1,1,75)         //we can also find idx of 95
}
*/