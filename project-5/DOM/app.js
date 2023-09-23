// methods for accessing element
document.getElementById('title')
document.getElementsByClassName('list-item')


// mostly used methods
document.querySelector('.list-item');  // it give first element that match the class name
document.querySelectorAll('.list-item'); // it give collection of all elements that have class name as list-item

// selecting first and last item in a list
//document.querySelector('ul li: first-of-type')
//document.querySelector('ul li: last-of-type')

// attributes vs properties
 /* id = if we change id attribute it will reflect in properties also and 
        if we change id using properites than it will relfect to attribute
        (1:1 mapping + live sync)

    class = if we change class attriute it will reflect in className property and
            if we change className property than it will reflect in attribute
            (different name [class,className]+ live sync)

    value= this is very important 
           if we change in value attribute it will reflect in value property 
           but if we change in value property than it will not reflect in value attribute
           (1:1 mapping + 1 way sync)

           so for this we have two methods setAttribute() and getAttribute
           setAttribute = for setting value in tag
           getAttribute = for setting value in web page
*/

// setting the property in attribute and webpage
/*const element = document.querySelector('input')

element.setAttribute('value',"mera bharat mahan") // setting in code

element.value = element.getAttribute('value') // setting in webpage


// 11 selecting random elements
const li = document.querySelectorAll('li')

li[1].textContent = li[1].textContent + ' changed';

// for- of  loop
for(listItem of li)
{
        console.log(listItem)
}
*/

//12 dom properties 
const ul = document.querySelector('ul');

// children vs childNodes
console.log(ul.children)
console.log(ul.children[0])
console.log(ul.childNodes)
console.log(ul.childNodes[0])

// firstChild vs firstElementChild and lastNode vs lastElementNode
console.log(ul.firstChild)
console.log(ul.firstElementChild)
console.log(ul.lastChild)
console.log(ul.lastElementChild)

// parentNode vs parentElement - there is no difference between both properties (only 1 exception)
const liFirst = document.querySelector('li');
console.log(liFirst.parentElement)
console.log(liFirst.parentNode)

// exception
console.log(document.documentElement.parentElement);
console.log(document.documentElement.parentNode);

// closest
console.log(liFirst.closest('body'))
console.log(liFirst.closest('html'))

// previous sibling vs next sibling
const ulist = document.querySelector('ul');
console.log(ulist.previousElementSibling)
console.log(ulist.previousSibling)
console.log(ulist.nextSibling)
console.log(ulist.nextElementSibling);


// styling dom elements
/*const section = document.querySelector('section')
const button = document.querySelector('button')
button.addEventListener('click', ()=>{
        // if(section.className === 'red-bg visible')
        // {
        //         section.className = 'red-bg invisible'
        // }else{
        //         section.className = 'red-bg visible'
        // }

        // classList methods (we also have other methods like contains , add ,remove )
        section.classList.toggle('invisible');
       
})*/

// innerHtml VS innerAdjustendHtml
    //const section = document.querySelector('section')

// it replaced our ul and replaced with h2
     //section.innerHtml = '<h2>hello i replaced your previous content</h2>'

// it add new items with already existed content but this method is not efficient 
// because it rerendered our whole content and that is not good for performance
        //section.innerHTML = section.innerHTML + '<li>item-5</li>'

// inseetAdjacentHtml = it is efficient methods insert
const div = document.querySelector('div')
div.insertAdjacentHTML('beforeend','i am efficient methods guys');
 
// 22 append,prepand, createElement, before(), after()

// append-
// appending text node -
const list = document.querySelector('ul');
list.append("hello i am text node");

//appending element node
const newLi = document.createElement('li');
newLi.textContent = 'Item-4';
//list.append(newLi);
//list.prepad(newLi);

// appending item in specific position of the list-
//list.lastElementChild.before(newLi);
//list.firstElementChild.before(newLi);

//list.lastElementChild.after(newLi)
//list.firstElementChild.after(newLi)

// replace with list item
//list.firstElementChild.replaceWith(newLi)

// append method is not supported by some browsers so we have another way
//const secondLi = list.children[1];

//secondLi.insertAdjacentElement('afterend',newLi);

// 23 copying element
const newLi2 = newLi.cloneNode(true);
list.append(newLi,newLi2)

//24 - live node list vs static node list
// getElementBy.... vale methods live list dete hai means HTMLCollection
// querySelector   vale methods static list dete hai means NodeList

//25 removing element
const p = document.querySelector('p');
p.remove(); // this is not supported by internet explorer

// another way
const li = document.querySelector('ul');
li.parentElement.removeChild(li);
















