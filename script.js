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
function getHumanChoice(){
    let ch=prompt("enter your choice rock/paper/scissor").toLowerCase()
    return ch
}
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
    console.log("computer choice: "+computerChoice)
    console.log("player choice: "+humanChoice)
  
}


playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
console.log("computer score: "+com)
console.log("player score: "+pla)


