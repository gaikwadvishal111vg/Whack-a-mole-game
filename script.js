const gameContainer = document.querySelector(".container");
const allMoleItems = document.querySelectorAll(".item");

let startGame;
let startTime;
let countDown =20;
let score =0;

const timeCount = document.getElementById("time-count");
const scoreCount = document.getElementById("score-count");

gameContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('mole-clicked')){
        score++;
        scoreCount.innerHTML = score;
        // console.log(e.target);
        const bushElem = e.target.parentElement.previousElementSibling;
        // console.log(bushElem);
        let textEl = document.createElement("span");
        textEl.setAttribute("class", "whack-text");
        textEl.innerHTML = "whack!";
        bushElem.appendChild(textEl);

        setTimeout(() =>{
            textEl.remove();
        },300);
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    startTime = setInterval(() =>{
        timeCount.innerHTML = countDown;
        countDown--;
    },1000);

    startGame = setInterval(()=>{
        showMole();
    },600);
});

//SHOW MOLE 
function showMole(){
    if(countDown <= 0) {
        clearInterval(startGame);
        clearInterval(startTime);
        timeCount.innerHTML = "0";
    }
    let moleToAppear = allMoleItems[getRandomValue()].querySelector(".mole");
    // console.log(moleToAppear);
    moleToAppear.classList.add("mole-appear");
    hideMole(moleToAppear)
}

function getRandomValue(){
    let rand =Math.random() * allMoleItems.length;
    return Math.floor(rand);
}
function hideMole(moleItem){
    setTimeout(() =>{
        moleItem.classList.remove("mole-appear");
    },1000)
}