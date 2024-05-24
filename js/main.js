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
