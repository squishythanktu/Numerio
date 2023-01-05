window.onscroll = () => {
    const header = document.querySelector('.header');
    const headerTop = document.querySelector('.header-top');

    if (document.documentElement.scrollTop > 0) {
        headerTop.classList.add('d-none');
        header.classList.add('fixed');
    } else {
        headerTop.classList.remove('d-none');
        header.classList.remove('fixed');
    }
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}