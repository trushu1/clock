// console.log("I am a student");

// var name=prompt("I am taking input");
// console.log(name);
// for(let i=0;i<=10;i++){
//     console.log(i*2);
// }
// let n=1;
// while(n<=10){
//     console.log(n);
//     n++;
// }
// let n=prompt("Give any number");
// if(n%2==0){
//     console.log("Its an even number");
// }
// else{
//     console.log("Its an odd number");
// }

// let marks=prompt("Enter your marks");
// if(marks>88 && marks<=90){
//     console.log("Its a A grade");
// }
// else if(marks>66 && marks<=70){
//     console.log("Its a B garde");
// }
// else{
//     console.log("Its a C grade");
// }
// let fname=prompt("give your name");
// let lname=prompt("Give your last name");
// let msg="Hello"+fname+" "+lname+"You are using JS!!";
// alert(msg);

// const favMovie="Marvels";
// let guess=prompt("Guess my favourite movie");
// while((guess!=favMovie) && (guess!="quit")){
//     guess=prompt("Wrong Answer!! Please try  agein!!");
// }
// if(guess==favMovie){
//     console.log("Congrats");
// }
// else{
//     console.log("You  Quitted");
// }
function updateTime() {
    const indiaTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    document.getElementById("india-time").textContent = indiaTime;
  
    const usaTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    document.getElementById("usa-time").textContent = usaTime;
  
    const ukTime = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });
    document.getElementById("uk-time").textContent = ukTime;
  
    const japanTime = new Date().toLocaleString("en-JP", { timeZone: "Asia/Tokyo" });
    document.getElementById("japan-time").textContent = japanTime;
  
    const australiaTime = new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" });
    document.getElementById("australia-time").textContent = australiaTime;
  }
  
  updateTime();
  setInterval(updateTime, 1000); // Update time every second
