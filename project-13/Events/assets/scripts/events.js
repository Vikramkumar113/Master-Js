                            // different ways of adding event listener
// way-1 inline - like we can execute some piece of code by addding onclick="any code"

//way-2

//const buttons = document.querySelectorAll('button')
// button.onclick = function(){
//     alert("hello")
// }


// const buttonHandler = ()=>{
//     alert("hello world")
// }
// button.onclick = buttonHandler

// //Note - draw back of this way is we can't apply onclick on two different function that are connected with same button or elements
// const function1 = ()=>{
//     console.log("function1")
//}

// const function2 = ()=>{
//     console.log("function2")
// }

// button.onclick = function1;
// button.onclick = function2;

// In above code onlclick is confused whick function to be executed on click 
//so it will always executed recent added means last one so here function2 is executed because it override function1

//Way-3 (recommanded)
// button.addEventListener('click', function1);

// setTimeout(()=>{
//     button.removeEventListener('click',function1);
// },2000)

                                            //The Event Objet

// const buttonClickHandler = event =>{
//    event.target.disabled = true;
//      console.log(event)

// }   

// buttons.forEach(btn =>{
//     btn.addEventListener('click',buttonClickHandler)
// })

                                    // preventDefault()
// Actually when we add submit button in form and when we click it whole html document is reloaded, so we can prevent it by adding preventDefault() fucntion
// const form = document.querySelector('form')
// form.addEventListener('submit', event=>{
//     event.preventDefault()

//     // now you write your logic here
//     console.log(event)
// })

                                        // capturing and bubbling
// if there are element nested like this 
// section => div => button  - it is called capturing
// button => div => section  - it is called bubbling  // by default addEventListener is in bubbling phase

                                        // event propogation & stop propogation
const button = document.querySelector('button')
const div = document.querySelector('div')

const divHandler = ()=>{
    console.log("div clicked")
}
const buttonHandler = (event)=>{
    event.stopPropagation()
    console.log("button clicked")
}
button.addEventListener('click',buttonHandler)
//div.addEventListener('click',divHandler,true)
div.addEventListener('click',divHandler)

// if we click button this code print "button cliked and then div clicked" means from inside to outside and this is called bubbling
// so if we dont want this behaviour we can add true in div and it will print opposite of this "div cliked and after button clicked"

// when we add stopProgation function then only button cliked in printed 

                                        // Event Delegation
// const listItems = document.querySelectorAll('li')
// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event =>{
//         event.target.classList.toggle('highlight')
//     })
// })


// event delegation
// const list = document.querySelector('ul')
// list.addEventListener('click', event =>{
//              event.target.classList.toggle('highlight')
// });

// it can be problematic when we have also more elements inside the list elements, so use below method
const list = document.querySelector('ul')
list.addEventListener('click', event =>{
            event.target.closest('li').classList.toggle('highlight')
});
