// let userScore = 0;
// let compScore = 0;
// let choices=document.querySelectorAll(".image")
// let display=document.getElementById("result")
// let uScore=document.querySelector("#user-score")
// let cScore=document.querySelector("#bot-score")
// choices.forEach((i)=>{
//     i.addEventListener("click",()=>{
//         let userChoice=i.getAttribute("id")
//         play(userChoice)
//         // console.log(i.getAttribute("id"), 'was clicked')
//     })
// })
// const play=(userChoice)=>{
//     let compChoice=genCompChoice()
//     if(userChoice===compChoice)
//         draw()
//     else{
//         let userWin=true
//         if(userChoice==="rock")
//             userWin=(compChoice==="paper"?true:false)
//         else if(userChoice==="paper")
//             userWin=(compChoice==="scissors"?true:false)
//         else
//         userWin=(compChoice==="rock"?true:false)
//     }
//     winner(userChoice,compChoice,userWin)
// }
// const genCompChoice=()=>{
//     let choicesAvailable=["rock","paper","scissors"]
//     return choicesAvailable[Math.floor(Math.random()*3)]
// }
// const winner=(userChoice,compChoice,userWin)=>{
//     if(userWin)
//     {
//         userScore++
//         uScore.innerHTML=uScore
//         display.innerHTML="You win!"
//         display.style.backgroundColor="green"
//     }
//     else{
//         compScore++
//         cScore.innerHTML=cScore
//         display.innerHTML="You lose :("
//         display.style.backgroundColor="red"
//     }
// }
// const draw=()=>{
//     display.innerHTML="It's draw. Play Again!"
// }


let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".image");
let display = document.getElementById("result");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#bot-score");

choices.forEach((i) => {
    i.addEventListener("click", () => {
        let userChoice = i.getAttribute("id");
        play(userChoice);
    });
});

const play = (userChoice) => {
    let compChoice = genCompChoice();
    let userWin;

    if (userChoice === compChoice) {
        draw();
        return; // Exit early to avoid further checks
    }

    if (userChoice === "rock") userWin = compChoice === "scissors";
    else if (userChoice === "paper") userWin = compChoice === "rock";
    else userWin = compChoice === "paper";

    winner(userChoice, compChoice, userWin);
};

const genCompChoice = () => {
    let choicesAvailable = ["rock", "paper", "scissors"];
    return choicesAvailable[Math.floor(Math.random() * 3)];
};

const winner = (userChoice, compChoice, userWin) => {
    if (userWin) {
        userScore++;
        uScore.innerHTML = userScore;
        if (display) {
            display.innerHTML = "You win!";
            display.style.backgroundColor = "green";
        }
    } else {
        compScore++;
        cScore.innerHTML = compScore;
        if (display) {
            display.innerHTML = "You lose :(";
            display.style.backgroundColor = "red";
        }
    }
};

const draw = () => {
    if (display) {
        display.innerHTML = "It's a draw. Play Again!";
        display.style.backgroundColor = "orange";
    }
};
