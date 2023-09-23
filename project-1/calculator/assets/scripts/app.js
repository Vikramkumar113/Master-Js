//alert('This works!');

let defaultResult = 0;
let currentResult = defaultResult;
//currentResult = currentResult+ 5*3;

// creating array
let logEntries = [];

//let currentDescription = `( ${defaultResult} + ${currentResult} )`

function createAndLog(operationNumber, operationIdentifier,preResult, newResult)
{
    let logEntry = {
        number : operationNumber,
        operation : operationIdentifier,
        previousRes : preResult,
        afterRes : newResult
      };

      logEntries.push(logEntry)
      console.log(logEntries)
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber)
{
    let currentDescription = `( ${resultBeforeCalc} ${operator} ${calcNumber})`
    outputResult(currentResult,currentDescription)
}

function getNumberInput()
{
    return parseInt(usrInput.value)
}

function add()
{
    let enterNumber =  getNumberInput()
    let initialResult = currentResult;
  //  let currentDescription =`( ${currentResult} + ${enterNumber} ) `
    currentResult = currentResult+ enterNumber
  //  outputResult(currentResult, currentDescription)
  createAndWriteOutput('+', initialResult, enterNumber)
  createAndLog(enterNumber,'add',initialResult,currentResult)

// creation of object
//   let logEntry = {
//     number : enterNumber,
//     operation : "add",
//     previousRes : initialResult,
//     afterRes : currentResult
//   };

  // accessing object 
    //    logEntries.push(logEntry)
    //     console.log(logEntries)

       // console.log(logEntry.afterRes) // accessing any particular key data of object
  // working with array
        //logEntries.push(enterNumber)
         //console.log(logEntries)

   // accessing element of array
        // console.log(logEntries[2]);
}

function subtract()
{
    let enterNumber = getNumberInput()
    let initialResult = currentResult;
  //  let currentDescription =`( ${currentResult} - ${enterNumber} ) `
    currentResult = currentResult - enterNumber
 //   outputResult(currentResult, currentDescription)
 createAndWriteOutput('-', initialResult, enterNumber)
 createAndLog(enterNumber,'subtract',initialResult,currentResult)
}

function multiply()
{
    let enterNumber =  getNumberInput()
    let initialResult = currentResult;
   // let currentDescription =`( ${currentResult} * ${enterNumber} ) `
    currentResult = currentResult * enterNumber
   // outputResult(currentResult, currentDescription)
   createAndWriteOutput('*', initialResult, enterNumber)
   createAndLog(enterNumber,'multiply',initialResult,currentResult)
}

function division()
{
    let enterNumber = getNumberInput()
    let initialResult = currentResult;
  //  let currentDescription =`( ${currentResult} / ${enterNumber} ) `
    currentResult = currentResult / enterNumber
   // outputResult(currentResult, currentDescription)
   createAndWriteOutput('/', initialResult, enterNumber)
   createAndLog(enterNumber,'division',initialResult,currentResult)
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',division);


