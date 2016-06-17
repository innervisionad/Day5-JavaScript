// EVENT LISTENER FOR CALCULATE BUTTON
var event1 = document.getElementById("calculate");
event1.addEventListener('click', calculateTax, false);

//USER INPUT VARIABLE
var salaryInput = document.getElementById("input1");

//TAX CALCULATION
function calculateTax() {

    
    if(salaryInput.value > 43000){
        
        var tax1 = (salaryInput.value - 11000);
        var tax2 = (tax1 * 0.8);
        var tax3 = (tax1 - tax2);
        var tax4 = (tax3 * 0.6);
        var tax5 = (tax3 - tax4);
        var taxAmt = (tax3 + tax5);
        var taxFinal = (salaryInput.value - tax3 - tax5);
    }
    else if(salaryInput.value > 11001 && salaryInput.value <=43000) {
        
        var tax1 = (salaryInput.value - 11000);
        var tax2 = (tax1 * 0.8);
        var taxAmt = (tax1 - tax2);
                
        var taxFinal = (salaryInput.value - taxAmt);   
    }
    else {
        var noTax = document.getElementById("taxCount").innerHTML = "You don't  need to pay tax";
        var taxAmt = "No tax.";
        var taxFinal = salaryInput.value;
    }

 
//OUTPUT RESULTS ONTO THE WEBPAGE
    
document.getElementById("grossSal").innerHTML = "£" + salaryInput.value;
document.getElementById("taxCount").innerHTML = taxAmt;
document.getElementById("netSalary").innerHTML = "£" + taxFinal; 
    
}



 