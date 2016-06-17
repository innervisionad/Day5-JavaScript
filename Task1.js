//Input text and display text in 3 boxes (1) unmodified (2) //toUpperCase (3) toLowerCase

var event1 = document.getElementById("acceptString");
event1.addEventListener('click', changeString, false);

var string1 = document.getElementById("input1");


function changeString() {
    
    var upString1 = string1.value.toLocaleUpperCase();
    var lowString1 = string1.value.toLocaleLowerCase();
    
    document.getElementById("unmodString").innerHTML = string1.value;
    document.getElementById("upcaseString").innerHTML = upString1;
    document.getElementById("lowcaseString").innerHTML = lowString1;
}