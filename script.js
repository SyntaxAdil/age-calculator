document.getElementById("cal-btn").addEventListener("click", () => {
    const today = new Date();
    let userInput = document.getElementById("dob-in").value;
    if (!userInput) {
        alert("Please enter a valid birthday");
        return;
    }
    let birthDate = new Date(userInput);
    if (birthDate > today) {
        alert("You haven't been born yet!");
        return;
    }
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1;
    let todayDay = today.getDate();

    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth() + 1;
    let birthDay = birthDate.getDate();

    let resultYear = todayYear - birthYear;
    let resultMonth = todayMonth - birthMonth;
    let resultDay = todayDay - birthDay;

    if (resultDay < 0) {
        resultMonth--;
        const daysInPrevMonth = 
        new Date(todayYear, todayMonth - 1, 0).getDate();
        resultDay += daysInPrevMonth;
    }
    if (resultMonth < 0) {
        resultYear--;
        resultMonth += 12;
    }
    document.getElementById("year-in").innerHTML = resultYear;
    document.getElementById("month-in").innerHTML = resultMonth;
    document.getElementById("day-in").innerHTML = resultDay;
    document.getElementById("rst-btn").addEventListener("click",()=>{
        document.getElementById("dob-in").value="";
         document.getElementById("year-in").innerHTML = "0";
    document.getElementById("month-in").innerHTML = "0";
    document.getElementById("day-in").innerHTML = "0";
    });
    
});
