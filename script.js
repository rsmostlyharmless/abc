let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}

slides[slideIndex-1].style.display = "block";
}



const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  Stop

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 10.0); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

start();
stop();
