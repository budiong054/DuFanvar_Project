    const mobileNavContainer = document.querySelector('.header_mobile_nav_container'),
    body = document.querySelector('body'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.close'),
    header = document.querySelector('.header');


    const displayOpen = ()=> {
        mobileNavContainer.style.marginLeft = '0%';
        // body.style.backgroundColor = 'rgba(0,0,0)';
        // header.style.color = 'black'
        // header.style.background = 'white'
    } 

    menu.addEventListener('click', displayOpen)

    const displayClose = () => {
    mobileNavContainer.style.marginLeft = '-500%';
    // mobileNavContainer.style.transition = '1s'
    // header.style.backgroundImage = 'url(https://github.com/budiong054/DuFanvar_Project/blob/main/Images/green_vegetation.png?raw=true)';
    }

    close.addEventListener('click', displayClose)