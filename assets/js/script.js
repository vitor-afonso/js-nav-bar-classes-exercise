/* jshint esversion: 6*/

window.onload = function() {
    let menuOpener = document.querySelector('#menu-opener');
    menuOpener.onclick = show;
};


function show() {
   
    let menuArea = document.querySelector('#menu-area');
    
    if (menuArea.classList.contains('open')){

        menuArea.classList.remove('open');
        menuArea.classList.add('closed');
        return;
    }
    menuArea.classList.remove('closed');
    menuArea.classList.add('open');
}