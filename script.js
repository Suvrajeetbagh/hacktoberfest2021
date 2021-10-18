
var slider = document.getElementById("myRange");
var output = document.getElementById("range-slider__value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// window.open('https://www.linkedin.com/mynetwork/', '_self');             // Open link in same tab
// window.open('https://www.linkedin.com/mynetwork/', '_blank');           // Open link in new tab

// //Accept request
// let request=document.querySelectorAll('[aria-label^="Accept"]')         //Getting Accept buttons   ,querySelectorAll return Array
// if (request==[]){                                                          // Run Only if requests are presents
//     console.log("You have requests")
//     var offset = 0;                      
//     request.forEach((req)=>{
//     setTimeout(()=>{                                                       // Cool Down Timeout  for sending request
//          req.click();                                                      // Sending Request
//         // console.log(req)
//     },5000+ offset);                                                      // Setting timeout for each loop
//     offset += 5000;
// })
// }   
// console.log("Task Done")                                                   // Task Done


// //Send Request 
function sendReq(size){
  window.open("https://www.linkedin.com/mynetwork/","_self");
let accounts=document.querySelectorAll('[aria-label^="Invite"]')        //Getting Connect buttons   ,querySelectorAll return Array
let list=Array.from(accounts)                                           //NodeList to Array    
list = list.sort(() => Math.random() - 0.5)                             // Shuffle array,So that it don, send request in linear Way
var offset = 0;                                                         // For Timer
for(let i=0;i<size;i++){                                                   // For loop 5 times, You can Change Checking Condition    
    setTimeout(()=>{                                                    // Cool Down Timeout  for sending request
        list[i].click()                                                 // Sending Request
     console.log(list[i]);
    },5000+ offset);                                                    // Setting timeout for each loop
    offset += 5000;                                                      // 5sec for next Timeout
}
console.log("Task Completed");
}
sendReq(10);


// // withdraw  requests

// let accounts=document.querySelectorAll('[aria-label^="Withdraw"]')
// let i=0
// let cnt=3;

// function confirm(){
//   setTimeout(() => {
//     document.querySelector(".artdeco-button--primary").click()
//     console.log("confirm Function");
//     i++;
//     if(i<cnt){
//       withdraw();
//     }
//   },3000);
// }
// function withdraw(){
//   setTimeout(() => {
//     user=accounts[i];
//     console.log("Withdraw Function")
//     user.click()
//     confirm();
//   },3000);
// }

// withdraw();

