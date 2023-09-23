                                  // synchronus and asynchronus flow

// const button = document.querySelector('button');
// const output = document.querySelector('p');


// function trackUserHandler() {
//   console.log('Clicked!');
// }

// // this is called asynchronus code because it takes longer time (waits until user click)
// button.addEventListener('click', trackUserHandler);


// // synchronus code
// let result =0;
// for(let i=0; i< 10000000; i++)
// {
//  result+=i;
// }

// console.log(result)


/* as we know javascript is single threaded so our code is line by line executed and one it incountered asynchronus 
code it sends it to browser and it stored in queue and our synchronus code is pushed in stack and it executed with flow
all the calls that are in queue is pushed in stack by event loop . so when synchronus code executed and stack is empty
so first call from queue is pushed to stack by event loop when its execution is finished next call is pushed to stack and 
its go on until all the calls from queue is not finished */

                                     // Promises
                        // how to create promise and calling to promise
// const ticket = new Promise(function(resolve, reject){
//      const isboarded = true;
//      if(isboarded){
//       resolve("you got tickets")
//      }else{
//       reject("your ticket cancelled")
//      }
// })

//promise calling
// ticket.then((data)=>{
//    console.log("congrats", data)
// }).catch((data)=>{
//   console.log("sorry",data)
// })


                                      // returning promise 

/** Promise has three stages pending, fulfilled, rejected
    Intially stage is pending when something asychronus code is running and when promise return resolve it result is fulfilled and if it return reject then
    result is rejected
 */
// function ticketHandler(){
//   return new Promise(function(resolve,reject){
//     const isboarded = true;
//      if(isboarded){
//       resolve("you got tickets")
//      }else{
//       reject("your ticket cancelled")
//      }
//   })
// }

//console.log(ticketHandler())


// how to avoid callback hell and multiple chaining in promises

// what is callback hell - calling a function inside a function many many times turns into callback hell

// firstFunction(args, function() {
//   secondFunction(args, function() {
//     thirdFunction(args, function() {
//       // And so on…
//     });
//   });
// });


// promise chaining

function getChesse(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        const cheese = "chesse";
        // resolve(cheese);
        reject("bad cheese")
      },2000)
    });
}

function makeDough(cheese){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const dough = cheese+"dough";
      resolve(dough);
    },2000)
  });
}

function bakePizza(dough){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const pizza = dough+"pizza";
      resolve(pizza);
    },2000)
  });
}


// promise chaining  error handling with then and catch
getChesse().then((cheese)=>{
   console.log("here is your"+cheese)
   return makeDough(cheese);
}).then((dough)=>{
  console.log("here is your "+ dough)
  return bakePizza(dough);
}).then((pizza)=>{
  console.log("here is your"+ pizza)
}).catch((data)=>{
  console.log("error occured"+data)
})

// promise chaining with async and await and error handling

// async function orderPizza(){
//   try{
//   const cheese = await getChesse();
//   console.log("here is your"+cheese)
//   const dough = await makeDough(cheese);
//   console.log("here is your "+ dough)
//   const pizza  = await bakePizza(dough);
//   console.log("here is your"+ pizza);
//   }catch(err){
//      console.log("error ocuured"+err)
//   }
// }

// orderPizza()
 





