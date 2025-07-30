// Initialization for ES Users
// import { Collapse, Ripple, initMDB } from "mdb-ui-kit";
// initMDB({ Collapse, Ripple });

// Remove theme toggle functionality

// Initialize copyright year when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Removed initTheme and theme toggle code
  // Update copyright year
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Highlight active navbar link
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

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
  