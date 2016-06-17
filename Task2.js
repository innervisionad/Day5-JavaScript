//Input a string and display the letter at the given index //using the slice() method.  On a separate line display the //string from that same character to the end of the string.

var event1 = document.getElementById("acceptString");
event1.addEventListener('click', sliceSelect, false);



var string1 = document.getElementById("input1");

var slice1 = document.getElementById("input2");

slice1.addEventListener('keypress', function(event){
    var key = event.which;
    if(key === 13){
        sliceSelect();
    }
}, false);

function sliceSelect() {
    
    var slice = string1.value.slice(parseInt(slice1.value)-1);
    
    
    
    
document.getElementById("remainString").innerHTML = "The remainder of the sentence is '" + slice + "'";
    
}

