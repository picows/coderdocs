"use strict";


/* ====== Define JS Constants ====== */
const sidebarToggler = document.getElementById('docs-sidebar-toggler');
const sidebar = document.getElementById('docs-sidebar');
const sidebarLinks = document.querySelectorAll('#docs-sidebar .scrollto');



/* ===== Responsive Sidebar ====== */

window.onload=function()
{
    responsiveSidebar();
};

window.onresize=function()
{
    responsiveSidebar();
};


function responsiveSidebar() {
    let w = window.innerWidth;
	if(w >= 1200) {
	    // if larger
	    console.log('larger');
		sidebar.classList.remove('sidebar-hidden');
		sidebar.classList.add('sidebar-visible');

	} else {
	    // if smaller
	    console.log('smaller');
	    sidebar.classList.remove('sidebar-visible');
		sidebar.classList.add('sidebar-hidden');
	}
};

sidebarToggler.addEventListener('click', () => {
	if (sidebar.classList.contains('sidebar-visible')) {
		console.log('visible');
		sidebar.classList.remove('sidebar-visible');
		sidebar.classList.add('sidebar-hidden');

	} else {
		console.log('hidden');
		sidebar.classList.remove('sidebar-hidden');
		sidebar.classList.add('sidebar-visible');
	}
});


/* ===== Smooth scrolling ====== */
/* Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */

sidebarLinks.forEach((sidebarLink) => {

	sidebarLink.addEventListener('click', (e) => {

		e.preventDefault();

		var target = sidebarLink.getAttribute("href").replace('#', '');

		//console.log(target);

        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
        
        // https://stackoverflow.com/questions/136458/change-the-url-in-the-browser-without-loading-the-new-page-using-javascript
        history.pushState(null, sidebarLink.innerText, sidebarLink.getAttribute("href"));


        //Collapse sidebar after clicking
		if (sidebar.classList.contains('sidebar-visible') && window.innerWidth < 1200){

			sidebar.classList.remove('sidebar-visible');
		    sidebar.classList.add('sidebar-hidden');
		}

    });

});


/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Initialize Gumshoe
var spy = new Gumshoe('#docs-nav a', {
	offset: 69 //sticky header height
});

// Change the as the as the user scrolls
document.addEventListener('gumshoeActivate', function (event) {

	var li = event.target;
	var itemTitle = li.childNodes[0].innerText;

	var docTitle = itemTitle + " |" + document.title.split("|")[1];
	document.title = docTitle;

}, false);


/* ====== SimpleLightbox Plugin ======= */
/* Ref: https://github.com/andreknieriem/simplelightbox */

var lightbox = new SimpleLightbox('.simplelightbox-gallery a', {/* options */});
