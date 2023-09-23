/*concept -1  Hoisting - Hoisting is JavaScript's default behavior of moving declarations to the top.
              In JavaScript, a variable can be declared after it has been used.
              In other words; a variable can be used before it has been declared.  */

// it will give undefined
    // console.log(userName)
    // var userName = 'vikram'


// it will give correct result
    // userName = 'vikram'
    // console.log(userName);
    // var userName;

// it will give reference error
    // carName = "Volvo";
    // let carName;

// it will give syntax error
    // car = "Volvo";
    // const car;




/* concept -2 'use-strict' - Defines that JavaScript code should be executed in "strict mode" */

//without strict mode 
    //x = 3
    //console.log(x)  // no error simply print 3

//"use strict";

    //x = 3
    //console.log(x) // error


// concept -3 Primitive vs referecne values

// PRIMITIVE VALUES
// let userName = "Max"
// console.log(userName)

// let anotherName = userName
// console.log(anotherName)

// userName = "Manuel"
// console.log(userName)

// console.log(anotherName)

// REFERNCE VALUES - 
// Arrays
// let hobbies = ['sports']
// console.log(hobbies)

// let newHobbies = hobbies
// console.log(newHobbies)

// hobbies.push('cooking')
// console.log(hobbies)

// console.log(newHobbies)

// Objects 
// let person = { age : 30}
// console.log(person.age)

// let anotherPerson = person;

// console.log(anotherPerson.age = 32)

// console.log(person.age);

// primitive types behaviour in arrays or objects
// let hobbies = ['sports']
// console.log(hobbies)

// let newHobbies = [...hobbies]
// console.log(newHobbies)

// hobbies.push('cooking')
// console.log(hobbies)

// console.log(newHobbies)

const hobbies = ['sports']

hobbies.push('cooking');    // adding new data to memory not changing the address

console.log(hobbies)

hobbies = ['sports','cooing','dancing']   // error => here we are assigning it new address and space in the memory to constant datatype









