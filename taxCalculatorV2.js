// EVENT LISTENER FOR THE CALCULATE BUTTON
var event1 = document.getElementById("calculate");
event1.addEventListener('click', calculateTax, false);

//USER INPUT VARIABLE
var salaryInput = document.getElementById("input1");

//TAX CALCULATION
function calculateTax() {

//40% TAX BRACKET
    if(salaryInput.value > 43000){
        var tax1 = (salaryInput.value - 11000);        
        var tax2 = (32000 * 0.2);
        var tax3 = (tax1 - 32000);
        var tax4 = (tax3 * 0.4);
        var taxAmt = (tax2 + tax4);
        var taxFinal = (salaryInput.value - tax2 - tax4);
    }
//20% TAX BRACKET
    else if(salaryInput.value > 11000 && salaryInput.value <= 43000) {
        
        var tax1 = (salaryInput.value - 11000);
        var tax2 = (tax1 * 0.8);
        var taxAmt = (tax1 - tax2);
                
        var taxFinal = (salaryInput.value - taxAmt);   
    }
//NON-TAXED SALARY
    else {
         document.getElementById("taxCount").innerHTML = "You don't need to pay tax";
        var taxAmt = "0";
        var taxFinal = salaryInput.value;
    }

 
//OUTPUT RESULTS ONTO THE WEBPAGE
    
document.getElementById("grossSal").innerHTML = "<b>" + "£" + salaryInput.value + "</b>";
    
document.getElementById("taxCount").innerHTML = "<b>" + "£" + taxAmt + "</b>";
    
document.getElementById("netSalary").innerHTML = "<b>" + "£" + taxFinal + "</b>"; 
    
}



 