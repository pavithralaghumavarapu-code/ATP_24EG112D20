const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
 
      
 
    
 

//1. Use filter() to get only inStock products
let instockprod=cart.filter(item=>item.inStock)
console.log(instockprod);

//2. Use map() to create a new array with:  { name, totalPrice }
let prices=instockprod.map(item=>({
   name:item.name,totalprice:item.price*item.quantity 
}))
console.log(prices);

// 3. Use reduce() to calculate grand total cart value
let grandtotal=instockprod.reduce((total,item)=>total+item.price * item.quantity,0)
console.log(grandtotal);


//   4. Use find() to get details of "Mouse"
let mouseDetail=cart.find(it=>it.name==='Mouse')
console.log(mouseDetail);

//    5. Use findIndex() to find the position of "Keyboard"
let idxOfKeyboard=cart.findIndex(it=>it.name==="Keyboard")
console.log(idxOfKeyboard);
