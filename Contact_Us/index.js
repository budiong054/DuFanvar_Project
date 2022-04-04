    const mobileNavContainer = document.querySelector('.header_mobile_nav_container'),
    body = document.querySelector('body'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.close'),
    header = document.querySelector('.header');


    const displayOpen = ()=> {
        mobileNavContainer.style.marginLeft = '0%';
    } 

    menu.addEventListener('click', displayOpen)

    const displayClose = () => {
    mobileNavContainer.style.marginLeft = '-300%';
    }

    close.addEventListener('click', displayClose)