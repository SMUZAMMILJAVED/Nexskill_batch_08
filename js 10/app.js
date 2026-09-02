// var car = {
//     name: 'mira',
//     cc: 660,
//     brand: 'diahatsu',
//     color: 'black',
//     model: 2026,
//     startEngine: function(){
//         console.log("starting engine...");
//     }
// }

// console.log(car.name);

// var car = {
//     name: 'mira',
//     cc: 660,
//     brand: 'diahatsu',
//     color: 'black',
//     model: 2026,
//     Export: false,
//     feature: ['comfort', 'power-window', 'power steering'],
//     engineComponent: {
//         piston: 50
//     },
//     startEngine: function(){
//         console.log("starting engine...");
//     }
// }

// console.log(car.feature[car.feature.length-1]);
// car.cc=1000;
// console.log(car.cc);

// var std_1 = {
//     name: 'hamza',
//     id: 1
// }

// var std_2 = {
//     name: 'bilal',
//     id: 2
// }

// var std_3 = {
//     name: 'ali',
//     id: 3
// }

// var stds = [std_1, std_2, std_3];

// for (var i = 0; i < stds.length; i++) {
//     console.log(stds[i].name);
// }

// function CreateObj(name, id){
//     this.name = name;
//     this.id = id;
// }


// CreateObj.prototype.greet = function () {
//     console.log("hello from " + this.name);
// };

// var std_1 = new CreateObj("kaif", 12);
// var std_2 = new CreateObj("ahmed", 3);
// var std_3 = new CreateObj("bilal", 15);

// console.log(std_1);
// console.log(std_2);
// console.log(std_3);

// std_1.greet();
// std_2.greet();
// std_3.greet();

// let a = 20;
// console.log(a);

// // can not update
// const b = 20;
// console.log(b);

// const test=()=>{
//     console.log("hello");
    
// }
// test()

let num = 9

if (num > 4) { // true
    let a = 3;
    console.log(a)
}

// if (true) {
//     const a = 5;
//     console.log(a); // 5
// }

// a = 4;
// console.log(a); // 4

// const print = a => a + "b";

// console.log(print(1));

// const arr = [1, 2, 3, 4, 5];

// const [a, b, c, d, e] = arr;

// console.log(c, d);

// const obj ={
//     name : "daniyal",
//     age :  26 


// }

// const {name,age} = obj;
// console.log(name);
// console.log(age);

// const arr = ["kaif", "ahsan", "bilal", "hamza"];
// console.log(...arr);

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];

console.log(arr2);

// const a = [ "apple", "banana", "cherry" ];
// for (const fruit of a) {
//     console.log(fruit);
// }

const even = [2,4,6,8,10,12]

const odd = even.map((v)=>{
return v+1;

})

console.log(odd);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = numbers.filter((v) => {
    return v % 2 === 0; // true (evens)
});

console.log(newArr);

// default parameter

function test(a, b = 5) {
    console.log(a + b);
}

test(1, 2);

// Rest parameter

function sum(a, b, ...c) {
    let result = 0; // 18

    for (let i = 0; i < c.length; i++) {
        result = result + c[i];
    } // 18

    console.log(result + a + b);
}

sum(1, 2, 3, 4, 5, 6);

function sum(a, b, ...c) {
    let result = c.reduce((p,c)=>p+c,0); 


    console.log(result + a + b);
}

sum(1, 2, 3, 4, 5, 6);



function product(a, b, ...c) {
    let result = 1; // 18

    for (let i = 0; i < c.length; i++) {
        result = result * c[i];
    } // 18

    console.log(result * a * b);
}

product(1, 2, 3, 4, 5, 6);

setInterval(() => {
    console.log("hello from interval!");
}, 1000); // 1 second

setTimeout(() => {
    console.log("hello from interval!");
}, 3000); // 3 second