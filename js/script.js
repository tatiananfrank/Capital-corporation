/* Custom language-picker */

/*var languagePicker = document.querySelector(".language-picker");

languagePicker.addEventListener("click", function(evt) {
	let btn = languagePicker.querySelector(".language-picker__button");

	// Показать/скрыть дропдаун 
	let ariaExpanded = btn.getAttribute("aria-expanded") == "true" ? btn.setAttribute("aria-expanded", "false") : btn.setAttribute("aria-expanded", "true");
});

document.addEventListener("click", function(evt) {
	// Скрыть дропдаун по клику вне него 
	if(languagePicker !== evt.target && !languagePicker.contains(evt.target) && languagePicker.querySelector(".language-picker__button").getAttribute("aria-expanded") == "true") {

		languagePicker.querySelector(".language-picker__button").setAttribute("aria-expanded", "false");
	}
});

document.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		// Скрыть дропдаун по нажатию клавиши ESC 
		if(evt.target === languagePicker || languagePicker.contains(evt.target) && languagePicker.querySelector(".language-picker__button").getAttribute("aria-expanded") == "true") {
			languagePicker.querySelector(".language-picker__button").setAttribute("aria-expanded", "false");
		}
	}
});*/

/* END OF Custom language-picker */