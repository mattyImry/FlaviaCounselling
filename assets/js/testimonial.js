
// TESTIMONIAL SLIDER AUTOMATIC
var slideIndex = 0;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var myTimer;

showSlides();

function showSlides() {    
    var i;    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    dots[slideIndex -1].className += " active";
    slides[slideIndex -1].style.display = "block";
    myTimer = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// TESTIMONIAL SLIDER MANUAL

function currentSlide(no) {
    var i;    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex = no;
    slides[no -1].style.display = "block";
    dots[no -1].className += " active";
    clearTimeout(myTimer);
    myTimer = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
  var newslideIndex = slideIndex + n;
  if(newslideIndex < 5 && newslideIndex > 0){
     currentSlide(newslideIndex);
  }
}