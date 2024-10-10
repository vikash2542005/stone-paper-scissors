let userScore=0;
let computerScore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScoreYou=document.querySelector("#you");
const compScoreComputer=document.querySelector("#computer");



const  genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const RI=Math.floor(Math.random()*3);
    return option[RI];
}

const shoeWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreYou.innerHTML=userScore;
        msg.innerHTML=`you Win! your ${userChoice} beats computers ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        compScoreComputer.innerHTML=computerScore;
        console.log("you lose"); 
        msg.innerHTML=`You Lose, computers ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    // user choice
    console.log("userchoice=",userChoice);

    //computer choice
    const compChoice=genCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice===compChoice){
        console.log("match draw");
        msg.innerHTML="Match Draw!";
        msg.style.backgroundColor="darkblue";
    }else{
        let userWin= true;
        if(userChoice==="rock"){
            // comp choose paper or scissors
            userWin = compChoice==="paper" ?  false : true ;
        }

        else if(userChoice==="paper"){
            //comp choose rock or scissors
                userWin=compChoice==="scissors" ? false : true; 
         } else{
            // user choice == scissors
            //comp choose paper or rock
            userWin=compChoice==="rock" ? false : true;
         }

         shoeWinner(userWin,userChoice,compChoice);

     }
      
          
    }



choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
          playGame(userChoice);
    });
    
});