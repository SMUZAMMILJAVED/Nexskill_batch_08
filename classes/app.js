// rest parameters 
// function test(x,...e){
// console.log(e[2]);

// }
// test(1,5,5,6)

// default parameters 
// function test(x=9,y,z=4){
// console.log(x);//7
// console.log(y);//undefined 
// console.log(z);4

// }
// // test(7)
// let arr=[3,5,6,8,7,3,6,3,8];
// arr=arr.map(v=>v*2)
// console.log(arr);
// filter 
// 
// arr=arr.filter(value=> value%3 ===0);
// console.log(arr);
// let arr=[1,1,3,5,10,30,40];
// const a=arr.reduce((p,c)=>p+c,0);
// console.log(a);

// class Animal{ //itself not a object (blue print)
// name='lion';
// id=22
// }
// const animal_1=new Animal()
// console.log(animal_1.name,animal_1.id);
// class Human{
//     constructor(name,id){
// this.name=name;
// this.std_id=id
//     }
//     greet(){
//         console.log(`hello from ${this.name}` );
        
//     }
//   static  test(){
//         console.log("test from Animal Class");
        
//     }
//     get getId(){
//         return this.std_id;
//     }
//    set setId(v){
// if(v>0 && v<=20){
//     this.std_id=v
// }
//    }
// }
// const a=new Human("kaif",23);
// const b=new Human("hamza",24);

// console.log(a);
// console.log(b);
// console.log(a);

// a.setId=-5
// console.log(a.getId);

// // a.test();//

                                     // local storage (browser)
const a={age:24};//number

localStorage.setItem("obj",JSON.stringify(a));

