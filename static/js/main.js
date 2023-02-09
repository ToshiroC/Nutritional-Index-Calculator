document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.querySelector(".menu-btn");
    var menu = document.querySelector(".menu");
    var menuNav = document.querySelector(".menu-nav");
    var navItems = document.querySelectorAll(".nav-item");
  
    // Set Initial State of Menu
    var showMenu = false;
  
    menuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));
  
        // Set Menu State
        showMenu = true;
      } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));
  
        // Set Menu State
        showMenu = false;
      }
    }
  });