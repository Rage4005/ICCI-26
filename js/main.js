// // Initialization for ES Users
// import { Collapse, Ripple, initMDB } from "mdb-ui-kit";
// initMDB({ Collapse, Ripple });

document.getElementById("currentYear").textContent = new Date().getFullYear();


$(document).ready(function() {
    $('#navbar-toggler').click(function() {
        $('#navbarNavbar').collapse('toggle');
    });
});



function gotoIndex(){
    window.location.href = "index.html"
}

function gotoRegistration(){
    window.location.href = "registration.html"
}

function gotoContact(){
    window.location.href = "contact_us.html"
}

document.getElementById('cd__main').addEventListener('animationend', function() {
    document.getElementById('divBlock').style.opacity = '1'; // Show the div
  });
  


  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    else{
        alert("Thank you, your form has been submitted.");
        return true;
    }
}