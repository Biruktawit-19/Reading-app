document.querySelector(".signup").onclick = function(){
    window.location.href = "signup.html";
}

document.querySelector(".login").onclick = function(){
    window.location.href = "login.html";
}
function openBook(){
window.location.href = "reader.html";
}

let pages = [
"Page 1: Anthony was born in Egypt and became one of the most famous monks in history.",

"Page 2: After the death of his parents he decided to dedicate his life to God.",

"Page 3: He lived in the desert and became an inspiration to many believers."
];

let currentPage = 0;

function nextPage(){

if(currentPage < pages.length - 1){
currentPage++;
document.getElementById("bookText").innerText = pages[currentPage];
}

}

function prevPage(){

if(currentPage > 0){
currentPage--;
document.getElementById("bookText").innerText = pages[currentPage];
}

}
let dailyGoal = 5;

let pagesRead = localStorage.getItem("pagesRead");

if(pagesRead == null){
pagesRead = 0;
}

updateProgress();

function markRead(){

pagesRead++;

localStorage.setItem("pagesRead", pagesRead);

updateStreak();

updateProgress();
checkBadges();
}
function updateProgress(){

document.getElementById("progress").innerText =
"Today's Progress: " + pagesRead + " / " + dailyGoal + " pages";

}
let today = new Date().toDateString();

let savedDay = localStorage.getItem("day");

if(savedDay != today){

localStorage.setItem("pagesRead", 0);

localStorage.setItem("day", today);

}
let dash = document.getElementById("dashboardProgress");

if(dash){

let pagesRead = localStorage.getItem("pagesRead") || 0;

dash.innerText = pagesRead + " pages read today";

}
let streak = localStorage.getItem("streak") || 0;

let lastRead = localStorage.getItem("lastRead");

function updateStreak(){

let today = new Date().toDateString();

if(lastRead != today){

streak++;

localStorage.setItem("streak", streak);

localStorage.setItem("lastRead", today);

}

}
let streakBox = document.getElementById("streakDisplay");

if(streakBox){

streakBox.innerText = "🔥 Reading Streak: " + (localStorage.getItem("streak") || 0) + " days";

}
function checkBadges(){

let pages = localStorage.getItem("pagesRead");

if(pages >= 10){
alert("🏆 Badge Earned: 10 Pages Reader!");
}

if(pages >= 50){
alert("🏆 Badge Earned: 50 Pages Master!");
}

}
95214814
