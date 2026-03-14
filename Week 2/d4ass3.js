/*1.Exam portal simulator:
-----------------------------
When a student submits an exam:

        Immediately show: “Exam submitted successfully”
        After 2 seconds → show: “Evaluating answers…”
        After 4 seconds → show: “Result: Pass” */

        
        //exam portal simulator
     console.log("exam sumited succesfull")
     setTimeout(()=>{
       console.log("evaluating answers")},2000
     ) 
     setTimeout(()=>{
       console.log("Result: Pass")},4000
     )