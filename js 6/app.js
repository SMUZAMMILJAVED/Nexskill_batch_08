var a = "23.56";
console.log(parseInt(a));

var a = "23.56";
console.log(parseFloat(a));


var a = "23";
console.log(Number(a));

var a = "23";
console.log(+a);


var age = prompt("enter your age");
console.log(age-2);


var num = 22;
console.log(num.toString());

var num = 4.454442
console.log(num.toFixed(2));



var a = new Date();
var b = a.getDay(); // getmonth/year/sec/millisec/day/hours/min
console.log(b);

var a = new Date();
var day =["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
console.log(day[a.getDay()]);


var c = new Date();
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(month[c.getMonth()]);

var fifaWorldCup = new Date("25 June 2030")
var nextfifaWorldCup=(fifaWorldCup.getTime());
var currentTime = new Date();
var c_m_s = currentTime.getTime();
console.log((((((nextfifaWorldCup-c_m_s)/1000)/60)/60)/24)/365);


function tellTime() {
    var a =  new Date();
    alert("Current time" + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());
    
    
}



function add (a,b){

console.log(a+b);

}

function greet (name){

    console.log(name + " Hello");
    
}

greet("Faizan")

function add_2 (a,b){

    return(a+b);

}

a = add_2(2,6);

if (a%2==0){
    console.log("even");
    

}else{

    console.log("Odd");
    
}