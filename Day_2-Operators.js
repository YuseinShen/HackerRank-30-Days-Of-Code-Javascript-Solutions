// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {

    var tip = meal_cost * (tip_percent / 100); 
    var tax = meal_cost * (tax_percent /100);
    var total = meal_cost + tip + tax
    
    console.log(total.toFixed())
    
    }