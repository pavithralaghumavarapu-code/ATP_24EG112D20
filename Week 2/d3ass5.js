 
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
/*

Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000  */


    const creditTxns = transactions.filter(t => t.type === "credit");
console.log(creditTxns);

const amounts = transactions.map(t => t.amount);
console.log(amounts);

const finalBalance = transactions.reduce((balance, t) => {
  return t.type === "credit"
    ? balance + t.amount
    : balance - t.amount;
}, 0);

console.log(finalBalance);

const firstDebit = transactions.find(t => t.type === "debit");
console.log(firstDebit);

const txnIndex = transactions.findIndex(t => t.amount === 10000);
console.log(txnIndex);