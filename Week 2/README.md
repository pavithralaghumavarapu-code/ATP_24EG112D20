Classes in JavaScript
JS supports OOP + Functional programming
A class = blueprint for objects
Not very popular in JS (functions preferred)
React Hooks (v16.8) reduced need for classes
In TypeScript:
Classes are common
But interfaces & types can also be used
 Function vs Method
Function → called independently
Method → called using an object
Function → no direct this
Method → has access to this
Function → defined separately
Method → defined inside object/class
 Static in Classes
3 ways to define static:
Using static keyword
Inside static block
Inside static method
Static block runs before constructor
Reason: runs when class loads into memory
🔹 Modules
Modules = reusable code across files
Default Export
Only one per file
Can import with any name
Named Export
Multiple exports allowed
Must use same name with {}
 Optional Chaining & Nullish Coalescing
?. → avoids errors for undefined properties
?? → provides default value for null/undefined
 Dates in JavaScript
Use Date object
Default format → ISO (UTC)
Internally stored as timestamp
Important Methods
Get → getFullYear(), getMonth(), getDate()
Set → setFullYear(), setMonth()
getTime() → timestamp
 Copying Data
Primitives → copied by value
Reference → copied by reference
 Shallow vs Deep Copy
Shallow copy:
Copies top-level only
Nested objects still linked
Deep copy:
Fully independent copy
Use structuredClone()
 Error Handling
Use Error object
Custom errors using extends Error
Handle using:
try...catch
