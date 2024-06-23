let arrowLeft = document.querySelector('.arrow-left');

let arrowRight = document.querySelector('.arrow-right');

let slider = document.querySelector('.slider');

let sliderSlide = document.querySelectorAll('.slider__slide');

let currentIndex = 0;

let markers = document.querySelectorAll('.slider-menu__nav-link');

let colors = ["#6eb1fe", "#c791b9", "#484848", "#ffffff"];

let colors2 = ["#dcab6d", "#642d68", "#484848", "#ffffff"];

let yColor1 = document.querySelectorAll('.y-color1');

let yColor2 = document.querySelectorAll('.y-color2');

let sliderMenu = document.querySelectorAll('.slider-menu__nav');

function colorChange() {
    yColor1.forEach(element => {
        element.style.color = colors[currentIndex];
    });
}
function colorChange2() {
    yColor2.forEach(element => {
        element.style.color = colors2[currentIndex];
    });
}
function colorChangeBorder() {
    sliderMenu.forEach(element => {
        element.style.borderColor = colors[currentIndex];
    });
}
function showTheSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function whatTheSlide(slide) {
    currentIndex = slide;
    showTheSlide(currentIndex);
    colorChange();
    colorChange2() 
    colorChangeBorder()
}

function goPrewSlide() {
    currentIndex = (currentIndex - 1 + sliderSlide.length) % sliderSlide.length;
    showTheSlide(currentIndex);
    colorChange();  // Добавлено чтобы цвет менялся при переходе на предыдущий слайд
    colorChange2() 
    colorChangeBorder()
}

function goNextSlide() {
    currentIndex = (currentIndex + 1) % sliderSlide.length;
    showTheSlide(currentIndex);
    colorChange();  // Добавлено чтобы цвет менялся при переходе на следующий слайд
    colorChange2() 
    colorChangeBorder()
}

for (let i = 0; i < markers.length; i++) {
    markers[i].addEventListener('click', function() {
        whatTheSlide(i);
    });
}

arrowLeft.addEventListener('click', goPrewSlide);
arrowRight.addEventListener('click', goNextSlide);