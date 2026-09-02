for ( var i=0 ;i<10;i++){
    console.log("hello");
    
}

// 
var city = ["karachi","lahore","islamabad","multan", "pindi"]
var userInput = prompt("Enter your city name: ")
var flag = false;
for(var i=0; i<city.length; i++){

if(city[i]===userInput){

console.log(userInput + "" + " city found");
flag = true;
break;
}


}
if(!flag){
console.log(userInput + " " + "city not found");


}


// 
var city = ["karachi","lahore","islamabad","multan", "pindi","hyd"]
for (var i = 0; i<city.length; i++){
    console.log(city[i]);
    
}
// 
var num = + prompt("enter you number: ")
var len = + prompt("enter len: ")
for(var i = 1; i<=len;i++){

    console.log(num + " x " + i + "=" + num*i);
    
}

// 
var num = + prompt("enter you number: ")
for(var i = 10; i>=1;i--){

    console.log(num + " x " + i + "=" + num*i);
    
}
