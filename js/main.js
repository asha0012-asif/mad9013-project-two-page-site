function init() {
    console.log("DOM fully loaded and parsed");

    let headerNav = document.querySelector(".header__nav");
    let hamburgerNavIconSpan = document.querySelector(".header__hamburger-nav-icon");
    let navIconClickCount = 0; 

    hamburgerNavIconSpan.addEventListener("click", showNavMenu);
    
    function showNavMenu() {
        // keep track of the number of times the nav icon is clicked
        navIconClickCount++;
        
        let navIconState = `<span class="material-symbols-outlined header__hamburger-nav-icon header__hamburger-nav-icon--close">menu</span>`;
        
        // if the number of times the nav icon is clicked is odd, show the nav menu and change the icon to close
        if (navIconClickCount % 2 == 1) {
            console.log("showNavMenu");
            headerNav.style.display = "flex";

            navIconState = `<span class="material-symbols-outlined header__hamburger-nav-icon header__hamburger-nav-icon--open">close</span>`;
        
        // if the number of times the nav icon is clicked is even, hide the nav menu and change the icon to open (regular hamburger icon)
        } else {
            console.log("hideNavMenu");
            headerNav.style.display = "none";
        }

        hamburgerNavIconSpan.innerHTML = navIconState;
    }
}

window.addEventListener("DOMContentLoaded", init);