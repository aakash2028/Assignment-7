function halfNumber(number){
    "use strict";
    return ("Half of "+number+" is "+number/2);
}
window.document.write(halfNumber(5), "<br><br>");

function squareNumber(number){
    "use strict";
    return ("The result of squaring the number "+number+" is "+number*number);
}
window.document.write(squareNumber(3), "<br><br>");

function percentOf(num1,num2){
    "use strict";
    var result = (num1 / num2) * 100 ;
    return (num1+" is "+result+"% of "+num2);
}
window.document.write(percentOf(2,4), "<br><br>");

function findModulus(num1, num2){
    "use strict";
    var result = num1 % num2;
    return (result+" is the modulus of "+num1+" and "+num2);
}
window.document.write(findModulus(4,10), "<br><br>");

var number1 = parseFloat(window.prompt("Enter the first number"));
var number2 = parseFloat(window.prompt("Enter the second number"));
var number3 = parseFloat(window.prompt("Enter the third number"));
sumOfNumbers(number1,number2,number3);
function sumOfNumbers(numbersToBeAdded){
    "use strict";
    var temp = Number(numbersToBeAdded), i;
    for (i = 1; i < arguments.length; i += 1) {
        temp += Number(arguments[i]);
    }
    window.document.write("The sum of numbers " + number1 + " , " + number2 + " , " + number3 + " is " + temp + ".");
}

