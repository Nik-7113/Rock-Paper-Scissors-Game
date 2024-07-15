let user_score_count = 0;
let comp_score_count = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
}

const drawGame = () => {
    msg.innerText = "Game Was Draw, Play again!";
    msg.style.backgroundColor = "#FF8811"
}

const showWinner = (userwin,userchoice,compchoice) => {
    if (userwin){
        user_score_count++;
        userscore.innerText = user_score_count;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "#5FAD56"
    }else{
        comp_score_count++;
        compscore.innerText = comp_score_count;
        msg.innerText = `You Loose:(  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "#890620"
    }
};

const playGame = (userchoice) => {
    //Generate computer choice -> modular
    const compchoice = genCompChoice();

    if (userchoice===compchoice){
        drawGame();
    } else{
        userwin=true;
        if (userchoice==="rock"){
            //comp can choose paper or scissors
            userwin = compchoice==="paper"? false : true;
        }else if (userchoice==="paper"){
            //comp can choose rock or scissors
            userwin = compchoice==="scissors"? false : true;
        }else if (userchoice==="scissors"){
            //comp can choose paper or rock
            userwin = compchoice==="rock"? false : true;
        }
        showWinner(userwin,userchoice ,compchoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playGame(userchoice);
        });
});

