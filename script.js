const days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months_of_year = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

let day= document.getElementById("day");
let date= document.getElementById("date");
let month= document.getElementById("month");
let year= document.getElementById("year");

function setDate(today){
    date.textContent=today.getDate().length==2?today.getDate():(0+today.getDate());
    day.textContent=days_of_week[today.getDay()];
    month.textContent=months_of_year[today.getMonth()];
    year.textContent=today.getFullYear();
}

let currentDate= new Date();;

const left= document.querySelector(".left");
const right= document.querySelector(".right");

left.addEventListener('click', setYesterday);
right.addEventListener('click', setTomorrow);

function setYesterday(){
    console.log("yest");
    let tempDate=new Date();
    tempDate.setDate(currentDate.getDate()-1); //Date object autocorrects to the legitimate value (0 May= 30 April)
    currentDate=tempDate;
    console.log(tempDate);
    setDate(currentDate);
}

function setTomorrow(){
    console.log("tom");
    let tempDate=new Date();
    tempDate.setDate(currentDate.getDate()+1);
    currentDate=tempDate;
    console.log(tempDate);
    setDate(currentDate);
}

setDate(currentDate);