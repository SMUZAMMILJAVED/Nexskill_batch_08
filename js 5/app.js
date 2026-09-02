var arr = ["apple","mango","banana"]

for (var i = 0; i < arr.length; i++){

    for (var j=0; j<3; j++){

        console.log(arr[i] );

    }

}

var li = [[1, 2, 3],["a", "b", "c"]]
var userInput = prompt ("Enter anything ")
var flag = false
for (var i = 0; i < li.length; i++) {

    for (var j = 0; j < 3; j++) {

        if(li[i][j]== userInput){
            flag = true
            console.log("Found");
            break

            
        }

    }


}if(!flag){
console.log("not found");


}

var city = ["karachi","lahore","islamabad","multan", "pindi"]
var userInput = prompt("Enter your city name: ")
var flag = false;
for(var i=0; i<city.length; i++){

if(city[i].toLowerCase() === userInput.toLowerCase()){

console.log(userInput + "" + " city found");
flag = true;
break;
}


}
if(!flag){
console.log(userInput + " " + "city not found");
}



var txt = ("Hello world")
console.log(txt.length);

var txt = ("Hello world")
console.log(txt.slice(6,9));

var txt = ("Hello world")
console.log(txt.indexOf("wor"));
console.log(txt.charAt(0));

var txt = ("this is an apple")
txt = txt.replace("apple","orange")
console.log(txt);


var num = 79.54
console.log(Math.round(num));

var num = 79.54
console.log(Math.floor(num));

var num = 79.54
console.log(Math.ceil(num));



var cN = (Math.ceil(Math.random()*10));
var userInput = +prompt("Guess any number between 1 to 10",cN);
if (userInput=== cN){
console.log("Yes you guess it right");




}else if (cN-1 === userInput|| cN+1 === userInput){

    console.log("So Close");
    
}else{
    console.log("loose");
    
}

