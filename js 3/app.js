var a = true;

if (a) {
    console.log("Hello");

}

var a = false;

if (a) {
    console.log("Hello");

} else {

    console.log("Hi");

}

var a = 2;
var b = "2";

console.log(a === b);


var studentPercentage = + prompt("Please enter your % in number: ")
if (studentPercentage > 0) {

    if (studentPercentage < 100) {

        if (studentPercentage >= 80) {

            console.log("A+");

        } else if (studentPercentage >= 70) {

            console.log("A");

        } else if (studentPercentage >= 60) {

            console.log("B");

        } else if (studentPercentage >= 40) {

            console.log("C");

        } else {

            console.log("F");

        }

    } else {
        console.log("Number is greater then 100");


    }

} else {
    console.log("Number is less then 0");


}


// Changes in last element
var naam = ["Naveed","Saleem","Saqib","Raheel"];
naam.pop();
console.log(naam);


var naam = ["Naveed","Saleem","Saqib","Raheel"];
naam.push("Daniyal");
console.log(naam);


// Change in start of the element
var naam = ["Naveed","Saleem","Saqib","Raheel"];
naam.unshift("Daniyal");
console.log(naam);

var naam = ["Naveed","Saleem","Saqib","Raheel"];
naam.shift();
console.log(naam);


// to make a copy
var naam = ["Naveed","Saleem","Saqib","Raheel"];
naam = naam.slice(0,3);
console.log(naam);

// to delete mutiple element we can also add new element in their place
var naam = ["Naveed","Saleem","Saqib","Raheel"];
naam.splice(0,2,"Sameer","Faizan");
console.log(naam);



