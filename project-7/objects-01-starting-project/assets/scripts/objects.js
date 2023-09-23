 // video -5 adding , modifying & deleting object properties

//  let person = {
   
//     name:'max',
//     age:30,
//     hobbies: ['reading','writing','dancing'],
//     greet : function(){
//         alert("hello")
//     }
// }


// adding properties
// person.id = 2334;

 // deleting properties
// delete person.age;

 // modifying
// person.name = 'manual'

                            // video - 6 special key names & square bracket property access
// here we learn how can we write key values in different way
let person1 = {
    'first name': 'vikram',
    age:21
}

//console.log(person1['first name'])

                            // video - 7 property value and property order
// let person1 = {
//     'first name': 'vikram',
//     age:21,
//     1.5:"hello"
// }

// console.log(perosn1[1.5])

// order of object is as we add properties like that (for person1 - {first name, age, 1.5})
// if we have objet that have numbers as a key than order will be in sorted way

                            // video -8 dynamic access property & setting properties dynamic

// const keyValue = 'level'
// let person1 = {
//     'first name': 'vikram',
//     [keyValue] : "123",
//     age:21,
//     1.5:"hello"
// }

// const userName = 'first name'
// console.log(person1[userName])
// console.log(person1[keyValue])


                            // video - 9 demo app and shorthand property
const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const movies = []

const addMovieHandler = ()=>{
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;
    const newMovie ={
        info : {
            title,  // this is short form of key-value and it is used when key and value has same name
            [extraName] : extraValue  // dynmaic access 
        },
        id : Math.random()
    }

    movies.push(newMovie)
    console.log(movies)
    
}

addMovieBtn.addEventListener('click',addMovieHandler)







