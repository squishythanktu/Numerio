//toggle top-header
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


//slides animation
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

//current section

// Get all sections that have an ID defined
const sections = document.querySelectorAll("div[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 40;
    sectionId = section.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".nav-section a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".nav-section a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}