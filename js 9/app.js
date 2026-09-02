
function change(){
    var div = document.getElementById("con")
    var a = div.getElementsByTagName("a")

for (var i = 0; i<a.length; i++ ){

    a[i].innerHTML="hello"
}



}


// std_1.address="karachi" //insert

// std_1.id=90 //update

// delete std_1.name //delete

// console.log(std_1); //read

var students = [
    {name:'kaif', id:34, address:'karachi'},
    {name:'basit', id:35, address:'lahore'}
];

for (var i = 0; i < students.length; i++) {
    console.log(students[i].name, students[i].id);
}





