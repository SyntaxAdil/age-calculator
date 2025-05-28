document.getElementById("cal-btn").addEventListener("click",()=>{
const today=new Date();
let userInput=document.getElementById("dob-in").value;
if(!userInput){
    alert("Please enter a valid birthday");
    return;
}
let birthDate=new Date(userInput);

// get today Credential
let todayYear=today.getFullYear();
let todayMonth=today.getMonth()+1;
let todayDay=today.getDate();

// get dob Credential
let birthYear=birthDate.getFullYear();
let birthMonth=birthDate.getMonth()+1;
let birthDay=birthDate.getDate();

// Arithmetical equations
let resultYear=todayYear-birthYear;
let resultMonth=todayMonth-birthMonth;
let resultDay=todayDay-birthDay;

// logical conditions
if(resultDay<0){
    resultMonth--;
    const prevMonth=new Date(todayYear,todayMonth-1,0).getDate();
    resultMonth+=prevMonth;
}
if(resultMonth<0){
    resultYear--;
    resultMonth+=12;
}
if(birthYear>todayYear ){
    alert("All the best for your future birth");
    return;
}
// DOM manupulation
document.getElementById("year-in").innerHTML=resultYear;
document.getElementById("month-in").innerHTML=resultMonth;
document.getElementById("day-in").innerHTML=resultDay;
})
// enter key
document.getElementById("dob-in").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("cal-btn").click();
    }
});


// reset 
document.getElementById("rst-btn").addEventListener("click", () => {
    document.getElementById("year-in").innerText = 0;
    document.getElementById("month-in").innerText = 0;
    document.getElementById("day-in").innerText = 0;
    document.getElementById("dob-in").value = "";
});
