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






/* Секция traders, подсвечивание активных ссылок в блоке cases-switcher */

var casesSwitcherLinks = document.querySelectorAll(".cases-switcher__link");

for (var link of casesSwitcherLinks) {
	link.addEventListener("click", function(evt) { /* TOUCHSTART */
		evt.preventDefault();

		var activeClass = "cases-switcher__link_active";

		if(!evt.target.classList.contains(activeClass)) {
			for(let i = 0; i < casesSwitcherLinks.length; i++) {
				casesSwitcherLinks[i].classList.contains(activeClass) ? casesSwitcherLinks[i].classList.remove(activeClass) : false;
			}
			evt.target.classList.add(activeClass);
		}
	})
}

/* END OF Секция traders, подсвечивание активных ссылок в блоке cases-switcher */




/* Модалка по нажатию на кнопку "подробнее" внутри секции profit */

$('#profit-modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  //var recipient = button.data('whatever') // Extract info from data-* attributes

  var attr = 'img';

  var value = button.data(attr) // Extract info from data-* attributes

  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).

  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  
  //modal.find('.modal-title').text('New message to ' + recipient)
  //$('#profit-modal').find('.round-modal__content').attr('data-img', '2')
  modal.find('.round-modal__content').data(attr, value)
  var test = modal.find('.round-modal__content')
  var test2 = test.data(attr)


  //modal.find('.modal-body input').val(recipient)
})

/* END OF Модалка по нажатию на кнопку "подробнее" внутри секции profit */