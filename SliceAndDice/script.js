let slidePosition = 0;

function slideShow () {
    let testimonials = document.getElementsByClassName('testimonials');
    let dots = document.getElementsByClassName('dot');
    for ( let i = 0; i < testimonials.length; i++ ){
        testimonials[i].style.display = "none";
    }
    slidePosition++;
    if ( slidePosition > testimonials.length ){
        slidePosition = 1;
    }
    for ( let i = 0; i < dots.length; i++ ){
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    testimonials[slidePosition-1].style.display = "block";
    dots[slidePosition-1].className += " activeDot";
    setTimeout (slideShow, 3000);
}

slideShow();