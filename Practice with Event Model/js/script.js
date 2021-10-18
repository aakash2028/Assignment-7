// Old Way
function displayMessage() {
    "use strict";
    window.alert("I have been clicked.. (old school method)");
}

// Element Property
var myElement = document.getElementById("myButton")
myElement.onclick = function () {
    "use strict";
    window.alert("I have been clicked.. (Element Property)");
}

// User Defined
function btnOnClick() {
    "use strict";
    window.alert("I have been clicked..(User Defined Function)")
}
var myOtherButton = window.document.getElementById("myOtherButton")
myOtherButton.addEventListener("click", btnOnClick);

// Call-Back Function
var myOtherButton2 = window.document.getElementById("myOtherButton2")
myOtherButton2.addEventListener("click", function() {
    "use strict";
    window.alert("I have been clicked..(Call Back Function)")
});

// Event Listners
