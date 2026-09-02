function test() {
    var a = 10;
    alert(a)
}

function test2(a) {

    console.log("Hello " + a);


}

function changebg1() {
    var a = document.getElementById("text");
    a.style.backgroundColor = "yellow"

}
function changebg() {
    var a = document.getElementById("text");
    a.style.backgroundColor = "white"



}

function newf() {
    var a = document.getElementById("text1");
    console.log(a.value);

}

function getvalue() {
    var a = document.getElementById("test3");
    console.log(a.value);


}

function setvalue() {
    var a = document.getElementById("test3");
    a.value = ("Hello world")

}

var a = document.getElementById("para");
console.log(a.innerHTML);

function chnageText() {
    var a = document.getElementById("para");
    a.innerHTML = ("<b> Hello </b>")
}

function expend() {
    var a = document.getElementById("para");
    a.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora voluptatum alias at sit accusantium nobis dolorem laudantium ratione officiis similique ullam voluptate, ut aperiam temporibus exercitationem libero eos nam vel!"

}

function chnagecolor(){
var a = document.getElementById("para");
a.className="red"  
}

function ccc(){
    var c = document.getElementById("ccc")
    var image1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTvYK8ulKBuVE6Lo7s6aou4JEDYJBBN8OSwEYevxg_OLuUVxbYhas7qbR&s=10"
    var image2="https://cdn.pixabay.com/photo/2023/07/19/12/16/car-8136751_1280.jpg"

    if(c.src===image1){
        c.src=image2
    }else{
        c.src=image1
    }


}   

function color(){
    var i = document.getElementById("fff")
    i.className+=" hhh"
}


function chnagebg(){
    var p = document.getElementsByTagName("p")
    for(var i=0;i<p.length; i++){
         p[i].className="green"
    }
   
    


}