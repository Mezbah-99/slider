
let slideIndex = 1;

// dot shows
dotShows();
showSlides(slideIndex)

setInterval(myCurrent, 5000) // Change Image Every 5s 

function myCurrent(){
    slideIndex += 1;
    showSlides(slideIndex)
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
  dots[slideIndex-1].className += " active";
}

function dotShows(){
    const slides1 = document.getElementsByClassName("mySlides");
    const dot = document.createElement("div");
    dot.classList.add("dots-container")
    document.getElementById("slideshow-container").appendChild(dot)
    dot.setAttribute('id', 'dots-container');
    const main = document.getElementById('dots-container');

    const myslide = document.getElementsByClassName("mySlides");
    

    for(let i = 0; i < slides1.length;i++){
        main.innerHTML += `<span class='dot' onclick='currentSlide(${i+1})'></span>`;
        myslide[i].innerHTML += `<div class='numbertext'>${i+1} / ${slides1.length}</div>`
    }
}
