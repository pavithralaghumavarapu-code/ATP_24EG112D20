
/*2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends */

        
     //otp
     console.log('OTP sent')
     let sec=5
     let intervalId=setInterval(()=>{
      sec--
      console.log(`${sec}`)
    if(sec===0){
      console.log("resend otp");
      clearInterval(intervalId)
    }  
    
    },1000)
console.log(1111);
