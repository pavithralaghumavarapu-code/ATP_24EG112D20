//Find the smallest element in marks array
let marks=[99,58,9,89,88]
let min=marks[0]
for(let idx=0;idx<marks.length;idx++){
    if(marks[idx]<min)
        min=marks[idx]
}
console.log(min)