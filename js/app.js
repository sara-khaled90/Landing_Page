
/*
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 */

/**  using ES6 arrow functions**/


// build the nav
/** set a global var for nav list **/
const navigation = document.getElementById("navbar__list");
/**make the list items in navBar equal to the number of section**/
const navigationItemsbuilder = () => {
  let item = "";
/** looping over all sections **/
  document.querySelectorAll("section").forEach((section) => {
    item += `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link" >${section.dataset.nav}</a></li>`;
  });
  navigation.innerHTML = item;
};
navigationItemsbuilder();




// Add class 'active' to section when near top of viewport
/**
* using Element.getBoundingClientRect to specify which section on the viewport and its link
* add active class to the section on viewport
* add active class to the sections links
* remove active classes
**/
window.addEventListener("scroll",function() {
  //loop over function (sections)
	document.querySelectorAll("section").forEach(function(section) {
    let activeItem = navigation.querySelector(`[data-nav=${section.id}]`);
	if(section.getBoundingClientRect().top >= -380 && section.getBoundingClientRect().top <= 120){

    section.classList.add("your-active-class");
    activeItem.classList.add("active-link");
    }
    else{
         section.classList.remove("your-active-class");
         activeItem.classList.remove("active-link");
       }
	});
});

// Scroll to anchor ID using scrollTO event** I manibulate this in css using (html{ scroll-behavior: "smooth"})**//

//add scroll to the top button on the page that’s only visible when the user scrolls below the fold of the page.
/** save the top icon  and the header in variables**/
const up = document.getElementById("top");
const pageHeader = document.querySelector(".page__header");
/**clicking on the icon the document will scroll up **/
up.addEventListener("click",function(){
  document.documentElement.scrollTo({ top: 0, behavior: "smooth"});
});
/** the icon appear after 1000px to down**/
document.addEventListener("scroll", () =>{
if (window.scrollY > 700) {
  up.style.display = "block";
} else {
  up.style.display = "none";
}
});
//Hide fixed navigation bar while not scrolling (it  stills present on page load).
// setTimeout  to check when the user is no longer scrolling.
let scrolling;
document.addEventListener("scroll",() =>{
  pageHeader.style.display = "block";
  clearTimeout(scrolling);
  scrolling = setTimeout(() => {
  pageHeader.style.display = "none";
  },3000);
});

//Update/change the design/content.
//Make sections collapsible.
