let slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

document.getElementById("prevBtn").addEventListener("click", function () {
  changeSlide(-1);
});

document.getElementById("nextBtn").addEventListener("click", function () {
  changeSlide(1);
});
