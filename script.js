console.log("Hello World!");
function getComputerChoice() {
    let decider=Math.random()*100;
    if (decider<=33){
        return "rock"
    }
    else if (decider>66){
        return "scissor"
    }
    else{
        return "paper"
    }
    
}
let com=0
let pla=0
// function getHumanChoice(){
//     let ch=prompt("enter your choice rock/paper/scissor").toLowerCase()
//     return ch
// }
let parent=document.querySelector("#choices")
parent.addEventListener("click",(e)=>{
    if (e.target.tagName==="BUTTON"){
        playRound(e.target.textContent.toLowerCase(),getComputerChoice())
    }
})
function playRound(humanChoice, computerChoice) {
    if (humanChoice==computerChoice){
        return
    }
    else if ( humanChoice=="rock" && computerChoice=="scissor"){
        pla+=1
    }
    else if (humanChoice=="scissor" && computerChoice=="paper"){
        pla+=1
    }
    else if (humanChoice=="paper" && computerChoice=="rock"){
        pla+=1
    }
    else{
        com+=1
    }
    document.querySelector("#player-choice").textContent="Player Choice: "+humanChoice
    document.querySelector("#computer-choice").textContent="Computer Choice: "+computerChoice
    document.querySelector("#outcome").textContent="Outcome: "+(pla>com ? "Player Wins!" : com>pla ? "Computer Wins!" : "It's a Tie!")
    document.querySelector("#player-score").textContent="Player Score: "+pla
    document.querySelector("#computer-score").textContent="Computer Score: "+com
    if (pla==5){
        alert("Player wins the game!")
        pla=0
        com=0
    }
    else if (com==5){
        alert("Computer wins the game!")
        pla=0
        com=0
    }
    

}




