// Old Way
function displayMessage() {
    "use strict";
    window.alert("I have been clicked.. (old school method)");
}

// Element Property
window.onload = function () {
    var myElement = document.getElementById("myButton")
        myElement.onclick = function () {
            window.alert("I have been clicked.. (Element Property)");
    }
}


// User Defined
function btnOnClick() {
    "use strict";
    return window.alert("I have been clicked (STEP 3) User Defined Function");
}

window.addEventListener("load", function () {
    "use strict";
    var myOtherButton = window.document.getElementById("myOtherButton");
    myOtherButton.addEventListener("click", btnOnClick);
});


// Call-Back Function

window.addEventListener("load", function () {
    "use strict";
    var myOtherButton2 = window.document.getElementById("myOtherButton2");
    myOtherButton2.addEventListener("click", function () {
        return window.alert("I have been clicked ..(Call Back Function)");
    });
});
