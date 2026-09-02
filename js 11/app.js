// // rest parameters

// function test(a, b, ...c) {

//     console.log(a, b, c);

// }
// test(1, 2, 3, 4, 5)

// // default parameter

// function test2(x = 5, y, z = 5) {

//     console.log(x, y, z);

// }
// test2(1)
// // map
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = []
// for (let i = 0; i < arr.length; i++)
//     arr2.push(arr[i] * 2);
// console.log(arr2);

// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr3 = arr3.map((v) => v * 2);
// console.log(arr3);

// // filtter
// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr4 = arr4.filter((a) => a === 2);
// console.log(arr4);

// // reduce
// let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr5 = arr5.reduce((p, c) => {
//     return p + c;
// }, 0)
// console.log(arr5);

// Classes
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    greet(){
        console.log(`hello from ${this.name}`);
        
    }
    static test(){
        console.log(`test from class`);
        
    }
    get getId(){
        return this.id;
    }
    set setId(data){
         this.id=data
    }
}

const person1 = new Person("Daniyal",26);
const person2 = new Person("Faizan",25);
console.log(person1);
console.log(person2);

person2.greet()

Person.test()
person1.setId=29
console.log(person1.getId);
 
