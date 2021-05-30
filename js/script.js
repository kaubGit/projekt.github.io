const slide = document.querySelector('.oneSlide');
const images = document.querySelectorAll('.oneSlide div');
const dots = document.querySelectorAll('.dot');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let z = 1;
const t = 5000;
const size = images[0].clientWidth;

let timeId = setTimeout(automaticSlide, t);

slide.style.transform = 'translateX(' + (-size * z) + 'px)';

function automaticSlide() {
    if (z >= images.length - 1) return;
    slide.style.transition = "transform 0.5s ease-in-out";
    z++;
    slide.style.transform = 'translateX(' + (-size * z) + 'px)';
}

next.addEventListener('click',()=>{
    if (z >= images.length - 1) return;
    slide.style.transition = "transform 0.5s ease-in-out";
    z++;
    slide.style.transform = 'translateX(' + (-size * z) + 'px)';
});

prev.addEventListener('click',()=>{
    if (z <= 0) return;
    slide.style.transition = "transform 0.5s ease-in-out";
    z--;
    slide.style.transform = 'translateX(' + (-size * z) + 'px)';
});

slide.addEventListener('transitionend',()=>{
    if (images[z].id === "l_clone") {
        slide.style.transition = "none";
        z = images.length - 2;
        slide.style.transform = 'translateX(' + (-size * z) + 'px)';
    }
    if (images[z].id === "f_clone") {
        slide.style.transition = "none";
        z = images.length - z;
        slide.style.transform = 'translateX(' + (-size * z) + 'px)';
    }
    clearTimeout(timeId);
    timeId = setTimeout(automaticSlide, t);
});

slide.addEventListener('transitionstart',()=>{
    for (i = 0; i < dots.length; i++) {
        dots[i].style.opacity = "60%";
    }
    if (z === 0) {
        dots[2].style.opacity = "100%";
    }
    else if (z === 4) {
        dots[0].style.opacity = "100%";
    }
    else {
        dots[z - 1].style.opacity = "100%";
    }
});

dots[0].addEventListener('click',()=>{
    slide.style.transition = "transform 0.5s ease-in-out";
    z = 1;
    slide.style.transform = 'translateX(' + (-size * z) + 'px)';
});

dots[1].addEventListener('click',()=>{
    slide.style.transition = "transform 0.5s ease-in-out";
    z = 2;
    slide.style.transform = 'translateX(' + (-size * z) + 'px)';
});

dots[2].addEventListener('click',()=>{
    slide.style.transition = "transform 0.5s ease-in-out";
    z = 3;
    slide.style.transform = 'translateX(' + (-size * z) + 'px)';
});