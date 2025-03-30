const gencompchoice=()=>{
    const option=["PAPER","ROCK","SCISSORS"];
    const randomidx=Math.floor(Math.random()*3);
    return option[randomidx];
}
const DRAWGAME=()=>{
    console.log("GAME WAS DRAW");

}
const SHOWWINNER=(USERWIN,userchoice,compchoice)=>{
    if(USERWIN===true)
    {
        console.log("you win!");
        msg.innerText=`you win! Your ${userchoice} beats Comp ${compchoice}`;
        msg.style.background="green";
        userscore++;
        userscorepara.innerText=userscore;
    }
    else
    { 
        console.log("you Loose!");
        msg.innerText=`you Loose! Comp ${compchoice} beats Your ${userchoice}`;
        msg.style.background="red";
        compscore++;
        compscorepara.innerText=compscore;
    }
}

const playgame=(userchoice)=>{
    console.log("user choice is=",userchoice);
    //get comp choice
    const compchoice=gencompchoice();
    console.log("comp choice is=",compchoice);
    if(userchoice===compchoice)
    {
        DRAWGAME();
        msg.innerText="Game was DRAW. Play Again";
        msg.style.background="rgb(4, 6, 11)";
    }
    else{
        let USERWIN=false;
        if(userchoice==="ROCK")
        {
            USERWIN=compchoice==="PAPER"?false:true;
            USERWIN=compchoice==="SCISSORS"?true:false;
        }
        else if(userchoice==="PAPER")
        {
            USERWIN=compchoice==="ROCK"?true:false;
            USERWIN=compchoice==="SCISSORS"?false:true;
        }
        else 
        {
            USERWIN=compchoice==="PAPER"?true:false;
            USERWIN=compchoice==="ROCK"?false:true;
        }
        SHOWWINNER(USERWIN,userchoice,compchoice);
    }

}

let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".CHOICE");
const msg=document.querySelector("#MSG");
const userscorepara=document.querySelector("#USER-SCORE");
const compscorepara=document.querySelector("#COMP-SCORE");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)
    })
})