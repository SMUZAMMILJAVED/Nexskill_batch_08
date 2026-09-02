// var car={
//     name:'mira',
//     cc:660,
//     brand:'diahatsu',
//     color:'black',
//     model:2026,
//     export:false,
//     feature:['comfort','power window','power steering'],
//     engineComponent:{
// piston:50
//     },
//     startEngine:function(){
// console.log("starting engine...");

//     }
// }
// car.cc=1000
// // console.log(car.color);
// // var plan1={
// //     name:'basic',
// //     price:12,
// //     site:"test"
// // }
// // var plan2={}
// // var plan3={}
// delete car.export

// car.startEngine();
// console.log(car);
// var std_1 = {
//     name:'hamza',
//     id:1
// }
// var std_2 = {
//     f_name:'bilal',
//     id:2
// }
// var std_3 = {
//     fullName:'ali',
//     id:3
// }
// var stds=[std_1,std_2,std_3];
// for(var i=0;i<stds.length;i++){
//     console.log(stds[i].name);
    
// }
// function CreateObj(name,id){
//  var obj={
//     name:name,
//     id:id
//  }  
//  return obj 
// } 

// function CreateObj(name,id){
//     this.name=name,
//     this.id=id
   
// }
// CreateObj.prototype.greet=function (){
//         console.log("hello from " + this.name);
        
//     }
// var std_1=new CreateObj("kaif",12);
// var std_2=new CreateObj("ahmed",3);
// var std_3=new CreateObj("bilal",15);
// console.log(std_1);
// console.log(std_2);
// console.log(std_3);
// std_1.greet()
// std_2.greet()
// std_3.greet()
// console.log("rollNo" in std_1);//false


// non-premitive datatypes (copy by ref/address)
// var a=3;
// var b=a;
// b++;
// console.log(a);//3
// console.log(b);//4
// var obj={
//     num:3
// }
// var obj2=obj;
// obj2.num++;
// console.log(obj);
// console.log(obj2);
// console.log(window.location.href);
// try{
//     console.log('hello 1')
// }catch(err){

// }

// console.log('hello 2')

// 

// {let a=30;}
// const a=30;
// a=90
// console.log(a);

// function test(a){
//     console.log("hello from " , a);
    
// }
// const square=a=>a**2;
 


// const result=square(2);
// console.log(result);
// const obj={
// name:"test"
// };//non-premitive
// obj.name="test2"
// console.log(obj);
