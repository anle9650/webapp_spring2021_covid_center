function updateCountryView() {
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if(ddCountry.value == "Yes") {
        divCountry.classList.remove("invisible");
    }
    else {
        divCountry.classList.add("invisible");
    }
}

function validateForm() {
    // check 1
    var DoB = document.querySelector("#txtDOB");
    var divDoBError = document.querySelector("#divDoBError");
    var formIsValid = true;
if (DoB.value == "") {
    divDoBError.classList.remove("invisible");
    divDoBError.innerHTML = "The date of birth cannnot be empty.";
    DoB.classList.add("hasError");
    formIsValid = false;
}
else {
    var DoBDate = new Date(DoB.value);
    var todayDate = new Date();
    if (DoBDate >= todayDate) {
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "Date of birth must be before today's date.";
        DoB.classList.add("hasError");
        formIsValid = false;
    }
    else {
        divDoBError.classList.add("invisible");
        divDoBError.innerHTML = "";
        DoB.classList.remove("hasError");
    }
}

//check 2
var ddCountry = document.querySelector("#ddCountry");
if (ddCountry.value == "Yes") {
    var txtCountry = document.querySelector("#txtCountry");
    if (txtCountry.value == "") {
        document.querySelector("#divCountryError").classList.remove("invisible");
        txtCountry.classList.add("hasError");
        formIsValid = false;
    }
    else {
        document.querySelector("#divCountryError").classList.add("invisible");
        txtCountry.classList.remove("hasError");
    }
}

//check 3
var elements = document.getElementsByTagName("input");
var invalidChars = ['#', '!', '~','&', '<', '>', '`', '"'];
var validChars = true;
for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < invalidChars.length; j++) {
        if (elements[i].value.indexOf(invalidChars[j]) != -1) {
            elements[i].classList.add("hasError");
            validChars = false;
        }

        if (validChars == false) {
            document.querySelector("#divCharError").classList.remove("invisible");
            formIsValid = false;
        }
        else {
            document.querySelector("#divCharError").classList.add("invisible")
        }
    }
}

return formIsValid;
}