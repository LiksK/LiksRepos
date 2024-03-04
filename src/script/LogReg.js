
var signUpButton = document.getElementById("SignUuBTN");


signUpButton.onclick = function() {
    if(document.getElementById("firstRadio").checked == true){
        window.location.href = "../../public/userCont/aplicant.html"
    }
    if(document.getElementById("secondRadio").checked == true){
        window.location.href = "../../public/userCont/recruter.html"
    }
    else{
        console.log("error")
    }
}
