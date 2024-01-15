// ADD EVENT LISTENER ON MULITPLE ELEMENTS

const addEventOnElements = function (elements, eventType, callback){
  for (i = 0, len = elements.length; i < len; i++){
    elements[i].addEventListener(eventType, callback);
  }
}

// NAVBAR TOGGLE FOR MOBILE
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");


const toggleNavbar = function(){
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


// ACTIVE HEADER WHEN WINDOW SROLLS DOWN TO 100PX

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function(){
  if(this.window.scrollY > 100){
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Scroll Reveal
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function (){
  for(let i = 0, len = revealElements.length; i < len; i++){
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i <len; i++){
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);



// RESUME CODE
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);

    if(pageTurn.classList.contains('turn')){
      pageTurn.classList.remove('turn');
      setTimeout(() =>{
        pageTurn.style.zIndex = 20 - index;
      }, 500)
    }
    else{
      pageTurn.classList.add('turn');
      setTimeout(() =>{
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  }
})

//contact me button
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.button.contact-me');

contactMeBtn.onclick = () => {
  pages.forEach((page,index) =>{
    setTimeout(() =>{
      page.classList.add('turn');

      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500)
    }, (index + 1) * 200 + 100)
  })
}

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if( pageNumber , 0 ) {
    pageNumber = totalPages - 1;
  }
}

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() =>{
      
    })
  })
}
