function add (a,b){

return(a+b);


}

var a = add(5,5)
console.log(a);
 



var a = 10;


function test (){

    var b = 20;
    console.log(a);
    console.log(b);
    
    
}
test()
console.log(a);
console.log(b);

var a = 10;


function test (){

    var a = 20;
    console.log(a);
    
}
test()
console.log(a);

hositing

console.log(a);
var a=12;   

a =10;
function test(){
console.log(a);

var a = 20;
}

test()
console.log(a);
var a;


function test(){
console.log(a);
var a = 20;

}
test()
a=2;
console.log(a);
var a;



var days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];
var day = new Date().getDay();
var day = days[day];

switch (day) {
    case 'sat':
        console.log("holiday : " + day);
        break;

    case 'sun':
        console.log("holiday: " + day);
        break;

    case 'mon':
        console.log("working day : " + day);
        break;

    case 'fri':
        console.log("half day : " + day);
        break;

    default:
        console.log("invalid");
}

var i = 1;

while (i >= 10) {
    console.log(i, "test");
    i++;
}

var i = 0;

do {
    console.log(i, "test");
    i++;
} while (i > 10);