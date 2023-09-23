//iterables - iterables is like array but not every array is iterable like (nodelist) ( iterable where we can use for-of loop)
                                   // video-3
// it has better perfomance
// const numbers = [1,2,3];
// console.log(numbers)


// Rarely used wat and also low performance then first way
//const moreNumbers = new Array(1,2,3);
//const moreNumbers =  Array(1,2,3);
// const moreNumbers = new Array(5); // it will be considered as a length

// const anotherWay = Array.of(1,2,3)
//console.log(anotherWay)

// this is important - it is used to convert string into charater array and also useful 
//for converting iterables and array-like object
// const importantWay = Array.from([1,2,3]); // - [1,2,3]
//const importantWay = Array.from("hello"); // = ["h","e","l","l","o"]

// const listItems = document.querySelectorAll('li')
// const convertNodeList  = Array.from(listItems)
// console.log(convertNodeList)



                                 //video-4 which data can you store in the array
//const array4 = [34,'hello', {moredetails : []}]

// const multiDimension = [[1,1.5],[2,3.2],[3,5.6]]
// for(const multi of multiDimension)
// {
//     for(const multipoints of multi )
//     {
//         console.log(multipoints)
//     }
// }


                                // video-5 push(), pop(), shift(), unshift()
//const arr5 = ['reading','coding']
//arr5.push('living');   // push item at the last
//arr5.unshift('dancing') // push into at the first index

//arr5.pop(); // delete item from the last
//arr5.shift() // delete item at the first index

//arr5[2] = "cooking" // add item at the specific psition if already exists then replace old

// arr5[6] = 'writting'  // set item at the 6th item that not exists but still it add item at that psotion and in-between positions will be empty
// console.log(arr5[4]) // undefined - because that position are empty
// console.log(arr5)


                                // video-6 splice()
 const arr6 = ['item1','item2','item3','item4']
// arr6.splice(0,0,'item0') // first argument is where to start (index): , second argument is how many items to be deleted, and after item that is to be inserted
//arr6.splice(1,0,'item1.5','item1.6','item1.7','item1.8') // after second element you can insert as many as you want
arr6.splice(1,0)
//arr6.splice(0)  // it will delete all the items from array
//arr6.splice(-1,1)  // negative index means counting from end of the array - so it will delete items from end
console.log(arr6)

                            // video-7 slice() - selecting ranges and creating copying
// Use-1 creating copy
// without slice
// const arr7 = [1,23,3.4,56,67]
// const anotherArray = arr7;

// when i pushed 100 in arr7 it will also pushed in anotherArray 
// arr7.push(100)
// console.log(arr7,anotherArray)

//using slice()
// const arr7 = [1,23,3.4,56,67]
// const anotherArray = arr7.slice(); 

// here i pushed 100 in arr7 it will not pushed in anotherArray because slice function is copying the array not address of the array
// arr7.push(100)
// console.log(arr7,anotherArray)

// Use-2 selecting ranges
// const arr7 = [12,14,24,34,67,65,33,55]
// console.log(arr7.slice(2,5))  // it will select elements from index 2 to index 4

// console.log(arr7.slice(-3,-1))
// console.log(arr7.slice(6,2)) // empty array  because start > end conditions should be start < end 

                         // video- 8  concat()

//const arr8 = [12,23,45,67,8,9,08,5,4]
//const newArr8 = arr8.concat([29,65]) 
//const newArr8 = arr8.push([29,65])
/** you can add arr using push also so what the difference - so the difference is push add nested array 
 and concat add array as a new elements in the array
 */
//console.log(arr8,newArr8)

                        // video-9 indexOf() & lastIndexOf()

// const arr9 = [23,45,65,43,22,49,67,66,78,64]
// console.log(arr9.indexOf(65)) // if array contain duplicate value still it will give you the index of first occuring elements
// console.log(arr9.lastIndexOf(78))
// note - This method is not working for array that contains objects for objects find() and findIndex()

                        // video-10 find() and findIndex()
//const arr10 = [{name : 'arr1'},{name : 'arr2'}, {name : 'arr3'}]

// const findObject = arr10.find((person, idx, persons) =>{
//             return person.name == 'arr1';
// })
/** first argument denote the name of the object , second arguments denote the index, third argument denote the name of the array */
//console.log(findObject)

// const findIndex  = arr10.findIndex((person,idx,persons) =>{
//         return person.name == 'arr2'
// })
// console.log(findIndex)

                            // video - 11 includes()
// const arr11 = [23,45,65,43,22,49,67,66,78,64]
// console.log(arr11.includes(43)) // it will give true if elements exists or false if it is not exists

                            // video- 12 for of loop and forEach() loop
 // const prices = [23,45,65,43,22,49,67,66,78,64]
//  const tax  = 0.10;
//  const taxPrices = []
//  for(const price of prices){
//         taxPrices.push(price*(1+tax))
//  }


// forEach can handle array of objects
// prices.forEach((price, idx, prices)=>{
//        const priceObj = { index:idx, taxPrices: price*(1+tax)};
//        taxPrices.push(priceObj)

// })
//console.log(taxPrices)

                            // video - 13 map() 
// Map is same like forEach but here we dont need to extra array
// const taxPrices = prices.map((price, idx, prices)=>{
//        const priceObj = 
//        { index:idx, 
//         taxPrices: price*(1+tax)};
//        return priceObj

//  })
//  console.log( taxPrices)

                            // video - 18 reduce()
//without reduce sum of array
//const prices = [23,45,65,43,22,49,67,66,78,64];
// const sum = 0;

// prices.forEach((price)=>{
//        sum = sum+price;
// })
// console.log(sum);

// reduce() function - it is shorter way
//  const sumOfArray = prices.reduce((preValue, currValue, idx, prices)=>{
//        return preValue+currValue;
// },0)

// console.log(sumOfArray)

                     // video 19- split() & join()
// const data = 'new york;10.99;2000';
// const transformedData = data.split(';') // first argument is seperater and split function make our data into arrayValues
// transformedData[1] = +transformedData[1];  // (string to integer convertion in short way by using +)
// console.log(transformedData)

// const arr = ['vikram','kumar']
// const ans = arr.join(' ') // first argument is seperater 
// console.log(ans)

                     // video 20 - Spread Operator
// Use-1
// const myArray = ['a','b','c','d'];
// myArray.push('e') // it will also added in copiedArray
// const copiedMyArray = [...myArray];  // this three dots are known as spread operaator and it is useful for copying array elements
// //myArray.push('e') // it will not added in copiedArray]
// //console.log(myArray)
// console.log(copiedMyArray);

// Use-2
// const elements = [1,2,3,4,5]
// const min = Math.min(12,43,56);
// console.log(min)

// const min1 = Math.min(elements) // Invalid you can write like this so use spread operator
// const min2 = Math.min(...elements) // valid 
// console.log(min2)

//Use-3
//const objArray = [{name:'vikram', age:20},{name:'Sumer', age:20}]
// objArray.push({name:'hello',age:21}) // it will working
//const newObjArray = [...objArray]

// objArray.push({name:'hello',age:21}) // it will not working because spread operator copy the address of the objArray (object Array) so we can't push after spread operator
// objArray[0].name = 'hello'
// console.log(newObjArray)

                            //video - 21 Array destructiong
// if we want every arr item in variable array destructiong can help us in shorter way
 //const arr = ['max','spartz','manual',23,'crow']
// Way-1
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];

//way-2 better approach
// const [first,second,third, ...other] = arr // here ... operator means rest of the item after manual will be treated as a new array
// console.log(first,second,third, other)

                                //video -22 maps and sets
//maps - like a object, no duplicate allowed,  index based access
// sets - it accepts iterables as items , no duplicate allowed, no index based access

                                // video - 23 working with sets
//const set = new Set([1,24,2232,44])
//console.log(set)
//set.add(1) // no duplicate allowed

//set.has(24) // true

// for(const entry of set.entries())
// {
//    // console.log(entry)// it give every values two types 
//     console.log(entry[0])
// }


                                // video-24 Map
const person1 = {name:'max'}
//const person2 = {name:'manual'}

const map = new Map([[person1, [{salary : 100, id:234}]],[{name:'manual'}, [{salary:200,id:567}]]])
map.set({name:'hello'}, [{salary:300,id:234}])  // adding new value in map
console.log(map)

console.log(map.get(person1)) // accessing values from particular key


// iterating through the map
// accessing key and value
for(const entry of map.entries())
{
    console.log(entry)
}

for(const [key,value] of map.entries())
{
    console.log(key,value)
}

//accessing only key
for(const key of map.keys())
{
    console.log(key)
}

// accessing only values
for(const value of map.values())
{
    console.log(value)
}


                                    // video - 25 maps and object
// map - can use any values ( and types) as keys, large data
// object - only use strings, numbers or symbols as keys, small data


































