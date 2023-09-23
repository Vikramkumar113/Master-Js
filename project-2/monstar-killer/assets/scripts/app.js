const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK'
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK'
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK'
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL'
const LOG_EVENT_GAME_OVER = 'GAME_OVER'


/// THROWING ERROR 
//let chooseMaxLife = enterValue();
function enterValue()
{
    let enteredValue = parseInt(prompt("enter max health for player and monster","100"));
    if(isNaN(enteredValue) || enteredValue <=0)
   {
      throw {message : "invalid user input"};
   }

   return enterValue;
}

// USE OF TRY-CATCH
let chooseMaxLife;
try{
    chooseMaxLife = enterValue()
}catch(error)
{
    //console.log(error)
}

// let enteredValue = parseInt(prompt("enter max health for player and monster","100"));
// if(isNaN(enteredValue) || enteredValue <=0)
//    {
//       alert("please input some number")
//    }
//let chooseMaxLife = 100;
let currentMostarHealth = chooseMaxLife;
let currentPlayerHealth = chooseMaxLife;
let hasBonusLife = true;
let battleLog = []

adjustHealthBars(chooseMaxLife);


function writeToLog(ev,val,mosterHealth,playerHealth)
{
    let logEntry = {
        event : ev,
        finalPlayerHealth : playerHealth,
        finalMonsterHealth : mosterHealth,
        value : val

    }

    switch(ev)
    {
        case LOG_EVENT_PLAYER_ATTACK:
             logEntry = {
                event : ev,
                target : 'MONSTER',
                finalPlayerHealth : playerHealth,
                finalMonsterHealth : mosterHealth,
                value : val
        
            }
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
             logEntry = {
                event : ev,
                target : 'MONSTER',
                finalPlayerHealth : playerHealth,
                finalMonsterHealth : mosterHealth,
                value : val
        
            }
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = {
                event : ev,
                target : 'PLAYER',
                finalPlayerHealth : playerHealth,
                finalMonsterHealth : mosterHealth,
                value : val
        
            }
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event : ev,
                finalPlayerHealth : playerHealth,
                finalMonsterHealth : mosterHealth,
                value : val
        
            }
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event : ev,
                finalPlayerHealth : playerHealth,
                finalMonsterHealth : mosterHealth,
                value : val
        
            }
            break;
        
        default :
            logEntry = {}
        
    }

//     if(ev === LOG_EVENT_PLAYER_ATTACK){
//     let logEntry = {
//         event : ev,
//         target : 'MONSTER',
//         finalPlayerHealth : playerHealth,
//         finalMonsterHealth : mosterHealth,
//         value : val

//     }
//     }else if(ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
//     let logEntry = {
//         event : ev,
//         target : 'MONSTER',
//         finalPlayerHealth : playerHealth,
//         finalMonsterHealth : mosterHealth,
//         value : val

//     }
//     }else if(ev === LOG_EVENT_MONSTER_ATTACK)
//     {
//         let logEntry = {
//         event : ev,
//         target : 'PLAYER',
//         finalPlayerHealth : playerHealth,
//         finalMonsterHealth : mosterHealth,
//         value : val

//     }
//     }else if(ev === LOG_EVENT_PLAYER_HEAL)
//     {
//         let logEntry = {
//         event : ev,
//         finalPlayerHealth : playerHealth,
//         finalMonsterHealth : mosterHealth,
//         value : val

//     }
//     }else if(ev === LOG_EVENT_GAME_OVER)
//     {
//         let logEntry = {
//         event : ev,
//         finalPlayerHealth : playerHealth,
//         finalMonsterHealth : mosterHealth,
//         value : val

//     }
//     }
    battleLog.push(logEntry);

}
function reset()
{
    currentMostarHealth = chooseMaxLife;
    currentPlayerHealth = chooseMaxLife;
    resetGame(chooseMaxLife); 
}

function endRound()
{
    let initialHealth = currentPlayerHealth; 
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage , currentMostarHealth,currentPlayerHealth)

    if(currentPlayerHealth<=0 && hasBonusLife)
    {
        hasBonusLife = false;
        removeBonusLife();  
        currentPlayerHealth = initialHealth;
        setPlayerHealth(initialHealth);
        alert("you would have a dead but bonus life has saved you")
    }
    if(currentMostarHealth <=0 && currentPlayerHealth > 0)
    {
         alert("You win!")
        // reset(chooseMaxLife);
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER_WIN',currentMostarHealth,currentPlayerHealth)

    }else if(currentPlayerHealth <=0 && currentMostarHealth > 0)
    {
         alert("You lose!")
        // reset(chooseMaxLife);
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER_WIN',currentMostarHealth,currentPlayerHealth)
    }else if(currentMostarHealth <=0 && currentPlayerHealth <=0)
    {
         alert("Match draw!")
        // reset(chooseMaxLife);
        writeToLog(LOG_EVENT_GAME_OVER, 'MATCH_DRAW',currentMostarHealth,currentPlayerHealth)
    }

    // if(currentMostarHealth <=0 && currentPlayerHealth > 0 || currentPlayerHealth <=0 && currentMostarHealth > 0 ||currentMostarHealth <=0 && currentPlayerHealth <=0)
    // {
    //     reset(chooseMaxLife);
    // }

    if(currentMostarHealth <=0 || currentPlayerHealth <=0)
    {
        reset(chooseMaxLife);
    }
}
function attack(mode)
{
    let maxDamge = mode===MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    let logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK ;
    // if(mode === MODE_ATTACK)
    // {
    //     maxDamge = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // }else if(mode === MODE_STRONG_ATTACK)
    // {
    //     maxDamge = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }
    const damage =  dealMonsterDamage(maxDamge);
   currentMostarHealth -= damage;
   writeToLog(logEvent, damage,currentMostarHealth,currentPlayerHealth)
   endRound()

   if(currentMostarHealth <=0 && currentPlayerHealth > 0)
   {
        alert("You win!")
       
   }else if(currentPlayerHealth <=0 && currentMostarHealth > 0)
   {
        alert("You lose!")
        
   }else if(currentMostarHealth <=0 && currentPlayerHealth <=0)
   {
        alert("Match draw!")
        
   }
}

function healLife()
{
    let healValue;
    if(currentPlayerHealth >= chooseMaxLife - HEAL_VALUE)
    {
        alert("you can't heal to more than your max initial health.")
        healValue = chooseMaxLife - currentPlayerHealth;
    }else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue)
    currentPlayerHealth += healValue;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMostarHealth, currentPlayerHealth)
    endRound();
}
// OPTION- 1 
// function attackHandler()
// {
//     const damage =  dealMonsterDamage(ATTACK_VALUE);
//    currentMostarHealth -= damage;
//    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
//    currentPlayerHealth -= playerDamage;

//    if(currentMostarHealth <=0 && currentPlayerHealth > 0)
//    {
//         alert("You win!")
//    }else if(currentPlayerHealth <=0 && currentMostarHealth > 0)
//    {
//         alert("You lose!")
//    }else if(currentMostarHealth <=0 && currentPlayerHealth <=0)
//    {
//         alert("Match draw!")
//    } 
// }


//OPTION-2 we are writting same code in attackHandler() and strongattackHandler() function so for not repeating
// the same code we are using attack() function and calling it using option-2
function attackHandler()
{
    attack('ATTACK')
}


// function strongAttackHandler()
// {
//     const damage =  dealMonsterDamage(STRONG_ATTACK_VALUE);
//     currentMostarHealth -= damage;
//     const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
//     currentPlayerHealth -= playerDamage;
 
//     if(currentMostarHealth <=0 && currentPlayerHealth > 0)
//     {
//          alert("You win!")
//     }else if(currentPlayerHealth <=0 && currentMostarHealth > 0)
//     {
//          alert("You lose!")
//     }else if(currentMostarHealth <=0 && currentPlayerHealth <=0)
//     {
//          alert("Match draw!")
//     }
// }
function strongAttackHandler()
{
    attack('STRONG_ATTACK')
}

function showLogHandler ()
{
  //  let i=0; // optional
 // use of for-off loop
    // for(let logEntry of battleLog){
    // console.log(logEntry)
    // }
    // i++

// for-in loop --> for objects key value

 console.log(battleLog)
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healLife);
logBtn.addEventListener('click', showLogHandler)
