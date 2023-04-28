// Hero Text
const typedSpan = document.getElementById("typed");
const totype = [
	"UX Designer",
	"User Researcher",
	"Product Designer",
	"Information Architect",
	"Artist"
];

const delayTyping_char = 100;
const delayErasing_text = 75;
const delayTyping_text = 1500;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
	if (charIndex < totype[totypeIndex].length) {
		typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
		charIndex++;
		setTimeout(typeText, delayTyping_char);
	} else {
		setTimeout(eraseText, delayTyping_text);
	}
}

function eraseText() {
	if (charIndex > 0) {
		typedSpan.textContent = totype[totypeIndex].substring(0, charIndex - 1);
		charIndex = charIndex - 1;
		setTimeout(eraseText, delayErasing_text);
	} else {
		totypeIndex++;

		if (totypeIndex >= totype.length) totypeIndex = 0;
		setTimeout(typeText, delayTyping_text);
	}
}

// On Page Load
window.onload = function () {
	// Start Typing
	if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);

	// Hamburger Menu
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}

window.addEventListener('.scrollButton');


window.addEventListener('scroll', debounce(checkPosition));

function scrollToTop() {
	window.scroll({ top: 0, left: 0, behavior: "smooth" });
}




