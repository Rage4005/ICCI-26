document.addEventListener("DOMContentLoaded", function() {
    var door = document.getElementById('door');
    var floatingImgContainer = document.getElementById('floatingImgContainer');
    
    // Animation for door opening
    setTimeout(function() {
        door.style.animation = "openDoor 2s forwards";
        floatingImgContainer.style.opacity = 1;
    }, 1000); // Delay the opening animation for 1 second
});
