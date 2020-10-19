/* Бургер меню */

/*$('#burger').on('touchstart click', function (event) {*/
$('#burger').on('click', function (event) {
	/*if (event.type == "touchstart") { 
    	$(this).off('click'); 
        //alert("Only touch event is fired"); 
    } else if (event.type == "click") { 
        $(this).off('touchstart'); 
        //alert("Only click event is fired"); 
    } */

	/*var button = $(event.target); // Button that triggered event
	button.attr('aria-expanded') === 'true' ? button.attr('aria-expanded', 'false') : button.attr('aria-expanded', 'true');*/

	$(this).attr('aria-expanded') === 'true' ? $(this).attr('aria-expanded', 'false') : $(this).attr('aria-expanded', 'true');
});

/* END OF Бургер меню */



$(document).ready(function(){

	/* Карусель */

	var carouselParams = {
		loop:true,
  		/*center:true,*/
  		nav:true,
  		navText: [
  					"<span class='visually-hidden'>Назад</span><svg class='cases-controls__arrow' width='44' viewBox='0 0 50 50'><polygon points='5.414,24 11.707,17.707 10.293,16.293 1.586,25 10.293,33.707 11.707,32.293 5.414,26 49,26 49,24'/></svg>",
  					"<span class='visually-hidden'>Назад</span><svg class='cases-controls__arrow' width='44' viewBox='0 0 50 50'><polygon points='5.414,24 11.707,17.707 10.293,16.293 1.586,25 10.293,33.707 11.707,32.293 5.414,26 49,26 49,24'/></svg>"],
  		dots:false,
  		responsiveClass:true,
  		responsive:{
        	0:{
            	items:1
        	},
        	768:{
            	items:2
        	}
    	}
	};
	
	$(".owl-carousel").owlCarousel(carouselParams);

	/* Переинициализирует карусель после клика на ссылки IPO ICO */

	$('.cases-switcher__link').on('click', function (event) {
		event.preventDefault();

		var activeClass = 'cases-switcher__link_active';

		var link = $(event.target); // Link that triggered event

		if(!link.hasClass(activeClass)) { // Checks that link is not active

			$('.cases-switcher__link').each(function() {
				$(this).hasClass(activeClass) ? $(this).removeClass(activeClass) : false;
			});

			var model = link.attr('data-model'); // Определяем модель
			var html = '';

			// Находим лист с нужной моделью и копируем его элементы в переменную html
			$('.cases-list').each(function() {
				if($(this).attr('data-model') === model) {
					html = $(this).prop('innerHTML');
				}
			});

		}

		// Обновляем карусель
		$(".owl-carousel").trigger('replace.owl.carousel', html, carouselParams).trigger('refresh.owl.carousel');

		link.addClass(activeClass);
	});

	/* END OF Переинициализирует карусель после клика на ссылки IPO ICO */

	/* END OF Карусель */
});


/* Узнаем ширину скроллбара */

function ScroolbarWidth() {
	// создадим элемент с прокруткой
	let div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';

	// мы должны вставить элемент в документ, иначе размеры будут равны 0
	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;

	div.remove();

	
	return scrollWidth;
}

/* END OF Узнаем ширину скроллбара */



var scrollWidth;

/* Модалка по нажатию на кнопку "подробнее" внутри секции profit */

$('#profit-modal').on('show.bs.modal', function (event) {

	/* Узнаем ширину скроллбара */
	if(!scrollWidth)
		scrollWidth = ScroolbarWidth();

  var button = $(event.relatedTarget) // Button that triggered the modal
  var value = button.attr('data-content') // Extract info from data-* attributes

  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).

  var modal = $(this)

  modal.find('.modal__img').each(function() {
  	if($(this).attr('data-content') === value) {
  		$(this).css('display', 'flex');
  		$(this).css('margin-left', scrollWidth);
  	} else {
  		$(this).css('display', 'none');
  	}
  });

  modal.find('.modal__text').each(function() {
  	if($(this).attr('data-content') === value) {
  		$(this).css('display', 'flex');
  		$(this).css('margin-left', scrollWidth);
  	} else {
  		$(this).css('display', 'none');
  	}
  });
});

/* END OF Модалка по нажатию на кнопку "подробнее" внутри секции profit */