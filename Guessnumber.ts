import inquirer from "inquirer";

async function Guessnumbergame(){

    let score = 0;

    let playagaingame = true;

    while(playagaingame){
        
        const input = await inquirer.prompt([{
        name : 'userinput',
        type : 'number',
        message : 'Select the number between ( 1 to 10 )'

    }]);
    
    const secretnumber = Math.floor(Math.random() * 10) +1;

    const userinput = Number(input.userinput);

    if(userinput === secretnumber){
        console.log('You won the game.');
        score++;
    }

    else if(userinput > secretnumber){
        console.log('You lost the game.');
    }

    else{
        console.log('You lost the game.');
    };

    console.log('Secret number was ' + secretnumber);

    console.log('Your score is ' + score);

    const playagain = await inquirer.prompt([{
        name : 'playagain',
        type : 'list',
        message : 'Do you want to play again?',
        choices : ['Yes' , 'No']
    }]);

    switch(playagain.playagain){
        case "Yes" :
            playagaingame = true;
        
        break;

        case "No"  :
            playagaingame = false;
        
        console.log('Thanks for playing.');

        break;
        

    }}
}
   Guessnumbergame();
