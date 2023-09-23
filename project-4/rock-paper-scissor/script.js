const startGameBtn = document.getElementById('start-game-btn');
//Anonymous function - when we assign function to a variable it is called anonymous function

// way-1
/*const start = function startGame()
{
     console.log("game is starting")
}
start();
startGameBtn.addEventListener('click',start)*/ // we can call like this also

//way-2
/*startGameBtn.addEventListener('click', function(){
    console.log("game is starting")
})*/


// function declaration/statement vs function expression


/*
function declaration - we can call anywhere function 
console.log(multiply(3,5))   
function multiply(a,b)
{
    return a*b;
}

console.log(multiply(3,5))
*/


/*
function expression - we can't call function before intialization
hello() // error
const hello = function sayHello()
{
    console.log("hello world")
}
*/

/* Rest operator - it is used when you dont know how much parameter we need to pass
1. we can not pass arguments after rest operator
2. we can pass arguments before rest operator  */
// way-1 - rest operator (recommanded)
// const sumUp = (...numbers) =>{
//     const validateNumber = (number)=>{
//         return isNaN(number) ? 0 : number
//     }
//     let sum = 0;
//     for(const num of numbers)
//     {
//         sum+=validateNumber(num);
//     }

//     return sum;
// }

// console.log(sumUp(4,5,'fhdf',7,8,9))

//way-2 - using array
// const sumUp = (numbers) =>{
//     let sum = 0;
//     for(const num of numbers)
//     {
//         sum+=num;
//     }

//     return sum;
// }

// console.log(sumUp([4,5,6,7,8,9]))

// way-3 - beofre rest operator( old way)
// const sumUp = function (numbers) {
//     let sum = 0;
//     for(const num of arguments)
//     {
//         sum+=num;
//     }

//     return sum;
// }

// console.log(sumUp(4,5,6,7,8,9))


/* concept of callback function */
const sumUp = (resultHandler, ...numbers) =>{
    const validateNumber = (number)=>{
        return isNaN(number) ? 0 : number
    }
    let sum = 0;
    for(const num of numbers)
    {
        sum+=validateNumber(num);
    }

    return resultHandler(sum);
}

const showResult = (result)=>{
    alert("the result of our calculation is"+result);
}

console.log(sumUp(showResult, 4,5,'fhdf',7,8,9))


