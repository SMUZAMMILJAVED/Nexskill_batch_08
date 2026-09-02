
// console.log(a);//undefined
// let b;
// console.log(b);//undefined
// var a;//hoisting
// //no hoisting
// a=30;
// b=20;
// console.log(a,b);
// let num =9
// if(num>4){//true
// let a=3;
// console.log(a)
// }
// ;//3 not defined

// if(true){
//     const a=5;
//     console.log(a);//5
    
// }
// a=4;
// console.log(a);//4
// function print(a,b){
//     return "test"
// }
// const print=a=>a+"b"
 

// console.log(print(1));
// const arr=[1,2,3,4,5];
// const [a,b,c,d,e]=arr
// console.log(c,d);



// const obj={
//     names:'kaif',
//     age:24
// }
// const {age,names}=obj
// console.log(names);
// console.log(age);
// const arr=["kaif",'ahsan','bilal','hamza'];
// console.log(...arr);
// const arr=[1,2,3];
// const arr2=[...arr,4,5,6];
// console.log(arr2);
// (copy by value)
// copy by ref/address
// const arr=[1,2,3,4];
// const arr2=[...arr];//deep clone  || shallow copy
// arr2[0]++;
// console.log(arr);//[2,2,3,4]
// console.log(arr2);//[2,2,3,4]

// const arr=["mango",'apple','watermelon'];
// for(let a of arr){
//     console.log(a);
    
// }
// {let a=4;}
// {console.log(a)}
// const evens=[2,4,6,8,10,12];

// const odd=evens.map(v=>v+1);
// console.log(evens);
// console.log(odd);

               // filter 

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// const newArr=numbers.filter((v)=>{
//    return v%2===0 //true(evens)
// });
// console.log(newArr);
// default para 
// function test(a,b=5){
// console.log(a+b);

// }
// test(1)
// rest para 
// function product(a,b,...c){
//  const result=  c.reduce((p,c)=>p+c,1)
// console.log(result+a+b);
// }
// product(2,2,2,2,2,2,2)
// product(1*1*1*1*1*1*1*7*6*30*50)

// const interval=setInterval(()=>{
//     console.log("hello from interval!");
    
// },1000)//1 seconds
// setTimeout(()=>{
//     console.log("hello from timeout!");
//     clearInterval(interval)
// },3000);
// local storage (no db)
// localStorage.setItem("name","bilal");
// localStorage.removeItem("name")
// localStorage.setItem("obj",JSON.stringify({name:'hamza'}))
console.log(localStorage.getItem("obj"));
