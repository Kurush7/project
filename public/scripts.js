const frontend = document.getElementsByClassName('frontend')[0];
frontend.addEventListener( 'mouseover', () => {
    console.log('enter');
    frontend.style.opacity = 0;
});
frontend.addEventListener( 'mouseleave', () => {
    console.log('leave');
    frontend.style.opacity = 1;
});