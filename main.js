let toggleNavStatus = false;

let toggleNav = function(){
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span ");
    let getSidebarLink = document.querySelectorAll(".nav-sidebar ul li a");
    
    if (toggleNavStatus===false) {
        getSidebar.style.width="272px";
        getSidebarUl.style.visibility = "visible";
        getSidebarTitle.style.opacity="0.5";
        
        let arrayLength = getSidebarLink.length;
        
        for (let i = 0; i < arrayLength ; i++) {
            getSidebarLink[i].style.opacity="1";
        }
        toggleNavStatus=true;
    }

    else if (toggleNavStatus===true) 
    {
        getSidebar.style.width="60px";
        getSidebarTitle.style.opacity="0";
        
        let arrayLength = getSidebarLink.length;
        
        for (let i = 0; i < arrayLength ; i++) {
            getSidebarLink[i].style.opacity="0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus === false;
    }
}
