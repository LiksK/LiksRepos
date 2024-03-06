
var signUpButton = document.getElementById("SignUuBTN");

signUpButton.onclick = function() {
    if(document.getElementById("firstRadio").checked) {
        window.location.href = "../../public/userCont/aplicant.html"
    }
    else if(document.getElementById("secondRadio").checked){
        window.location.href = "../../public/userCont/recruter.html"
    }
    else{
        console.log("error")
    }
}