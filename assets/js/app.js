// select elements from the DOM
const inputElement = document.querySelector('.input');
const buttonElement = document.querySelector('.btn');

//click event on button Element
buttonElement.onclick = function (e) {
    e.preventDefault();
    const inputValue = inputElement.value;
    console.log('InputValue:', inputValue);
    // clear input field after search btn has been clicked
    inputElement.value = " ";
}

// slideshow section
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// connect to movieDB 
fetch('https://api.themoviedb.org/3/movie/popular?api_key=b2532490f59083cb196f0daa924552e0')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.results);
    })
    .catch((error) => {
        console.log(error)
    })