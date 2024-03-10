function init() {
    console.log("DOM fully loaded and parsed");

    let headerNav = document.querySelector(".header__nav");
    let hamburgerNavIconSpan = document.querySelector(".header__hamburger-nav-icon");
    let navIconClickCount = 0; 

    hamburgerNavIconSpan.addEventListener("click", showNavMenu);
    
    function showNavMenu() {
        // keep track of the number of times the nav icon is clicked
        navIconClickCount++;
        
        let navIconState = "menu";
        
        // if the number of times the nav icon is clicked is odd, show the nav menu and change the icon to close
        if (navIconClickCount % 2 == 1) {
            navIconState = "close";
            
            // removes the header__nav--hide class and add the header__nav--show class to show the nav menu
            console.log("showNavMenu");
            
            headerNav.classList.remove("header__nav--hide");
            headerNav.classList.add("header__nav--show");

        // else the number of times the nav icon is clicked is even, so hide the nav menu and change the icon to open (regular hamburger icon)
        } else {
            // removes the header__nav--show class and add the header__nav--hide class to hide the nav menu
            console.log("hideNavMenu");

            headerNav.classList.remove("header__nav--show");
            headerNav.classList.add("header__nav--hide");
        }

        hamburgerNavIconSpan.innerText = navIconState;

        console.log(hamburgerNavIconSpan);
        console.log(headerNav);
    }
}

window.addEventListener("DOMContentLoaded", init);