// constructor function

// function Person(){
//      this.fname = 'vikram';
//      this.age = 20;
//      this.greet = ()=>{
//         console.log("welcome")
//      }
// }

// const p = new Person()
// console.log(p.age)
// console.log(p.greet)


// Prtotypes
class Animal {
    name = 'Lion'
    age = 21

    lion(){
        console.log("king of the forest")
    }

    deer(){
        console.log("deer is killed by lion")
    }
}

class Human {
    name = "Robo"
    age = 21

    human1(){
        console.log("human1")
    }


}

const animal = new Animal();
const h = new Human();

animal.__proto__ = h;

animal.human1()


