$(document).ready(function() {
	
/* Animate On Scroll */

	/*AOS.init({
		once: true,
	});*/

/* END OF Animate On Scroll */


/* Бургер меню */

	$('#burger').on('click', function (event) {
		$(this).attr('aria-expanded') === 'true' ? $(this).attr('aria-expanded', 'false') : $(this).attr('aria-expanded', 'true');
	});

/* END OF Бургер меню */


/* Карусель */

	// Параметры для инициализации карусели
	var carouselParams = {
		loop:true,
  		// center:true,
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
	
	// Инициализация карусели, если она существует на странице
	if($(document).find('.owl-carousel').length !== 0)
		$(".owl-carousel").owlCarousel(carouselParams);

	// Переинициализирует карусель после клика на ссылки IPO, ICO, Посмотреть все планы
	$('.cases-switcher__link').on('click', function (event) {
		event.preventDefault();

		var activeClass = 'cases-switcher__link_active';

		var link = $(event.target);

		if(!link.hasClass(activeClass)) { // Если произошел клик на неактивную ссылку

			$('.cases-switcher__link').each(function() {
				$(this).hasClass(activeClass) ? $(this).removeClass(activeClass) : false;
			});

			var model = link.attr('data-model'); // Определяет модель (IPO, ICO)
			var html = '';

			// Находит список с нужной моделью и копирует его элементы в переменную html
			$('.cases-list').each(function() {
				if($(this).attr('data-model') === model) {
					html = $(this).prop('innerHTML');
				}
			});

			// Обновляет карусель
			$(".owl-carousel").trigger('replace.owl.carousel', html, carouselParams).trigger('refresh.owl.carousel');

			// Подсвечивает активную ссылку
			link.addClass(activeClass);
		}
	});

/* END OF Карусель */


/* Модалка по нажатию на кнопку "подробнее" внутри секции profit */

	$('#profit-modal').on('show.bs.modal', function (event) {
		// Узнает ширину скроллбара
		if(!scrollWidth)
			scrollWidth = ScroolbarWidth();

		var button = $(event.relatedTarget);
		var value = button.attr('data-content'); // Извлекает значение атрибута data-content у кнопки, которая была нажата, чтоб открыть модалку

		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).

		var modal = $(this);

		// Отображает ту картинку и текст, значение атрибута data-content которых совпадает со значением этого атрибута у кнопки, нажатой для открытия модалки
		modal.find('.modal__img').each(function() {
			ShowModalContent($(this), value)
		});

		modal.find('.modal__text').each(function() {
			ShowModalContent($(this), value);
		});
	});

	$('#profit-modal').on('hide.bs.modal', function (event) {
		// Возвращает прокрутку в начало модалки при ее закрытии
		$(this).find('.magic').scrollTop(0);
	});

/* END OF Модалка по нажатию на кнопку "подробнее" внутри секции profit */


/* Модалка по нажатию на логотип банка внутри секции about */

	$('#bank-modal').on('show.bs.modal', function (event) {
		// Узнает ширину скроллбара
		if(!scrollWidth)
			scrollWidth = ScroolbarWidth();

		var button = $(event.relatedTarget);
		var value = button.attr('data-content'); // Извлекает значение атрибута data-content у кнопки, которая была нажата, чтоб открыть модалку

		var modal = $(this);

		// Отображает ту картинку и текст, значение атрибута data-content которых совпадает со значением этого атрибута у кнопки, нажатой для открытия модалки
		modal.find('.bank-modal.modal-dialog').attr('data-content', value);

		modal.find('.modal__text').each(function() {
			ShowModalContent($(this), value);
		});
	});

	$('#bank-modal').on('hide.bs.modal', function (event) {
		// Возвращает прокрутку в начало модалки при ее закрытии
		$(this).find('.magic').scrollTop(0);
	});

/* END OF Модалка по нажатию на логотип банка внутри секции about */


/* Модалка по нажатию на новость в разделе "новости" личного кабинета */

	$('#user-news-modal').on('show.bs.modal', function (event) {
		var newsItem = $(event.relatedTarget.parentElement);
		var shadow = newsItem.attr('data-shadow');

		var modalContent = newsItem.find('.user-news-item__content').prop('innerHTML');

		var modal = $(this);
		modal.find('.modal-news').prop('innerHTML', modalContent);
		modal.find('.modal-news').attr('data-shadow', shadow);
	});

/* END OF Модалка по нажатию на новость в разделе "новости" личного кабинета */


/* Страница регистрации/входа в личный кабинет */

	// Подмена форм входа/регистрации после клика на соответствующие ссылки
	$('.sign_link').on('click', function (event) {
		event.preventDefault();

		var activeClass = 'welcome__active-form';

		var link = $(event.target);

		if(!link.hasClass(activeClass)) { // Если произошел клик на неактивную ссылку

			var form = link.attr('data-form'); // Определяет нужную форму

			// Находит нужную форму и показывает ее, а остальные скрывает
			$('.welcome_form').each(function() {
				if($(this).attr('data-form') === form) {
					$(this).css("display", "flex");
				} else {
					$(this).css("display", "none");
				}
			});
		}
	});

	// Переход на второй шаг по нажатию кнопки "Далее" в форме регистрации
	$('.sign-up-form__btn-next').on('click', function (event) {
		event.preventDefault();

		$('.sign-up-form__step-one').css('display', 'none');
		$('.sign-up-form__step-two').css('display', 'flex');
	});

	// Переход на первый шаг по нажатию кнопки "Предыдущий шаг" в форме регистрации
	$('.sign-up-form__prev-step').on('click', function (event) {
		event.preventDefault();
		
		$('.sign-up-form__step-two').css('display', 'none');
		$('.sign-up-form__step-one').css('display', 'flex');
	});

	// Показ/сокрытие пароля по нажатию на иконку глаза
	$('.sign-in-form__pass-show').on('click', function (event) {
		event.preventDefault();

		if($(this).attr('data-show') === 'false') {
			$(this).attr('data-show', 'true');
			$('#password_field_sign-in').prop('type', 'text');
			$(this).find('#in-show').css('display', 'none');
			$(this).find('#in-hide').css('display', 'block');

		} else {
			$(this).attr('data-show', 'false');
			$('#password_field_sign-in').prop('type', 'password');
			$(this).find('#in-hide').css('display', 'none');
			$(this).find('#in-show').css('display', 'block');
		}
	});

	$('.sign-up-form__pass-show').on('click', function (event) {
		event.preventDefault();

		if($(this).attr('data-show') === 'false') {
			$(this).attr('data-show', 'true');
			$('#password_field_sign-up').prop('type', 'text');
			$(this).find('#up-show').css('display', 'none');
			$(this).find('#up-hide').css('display', 'block');

		} else {
			$(this).attr('data-show', 'false');
			$('#password_field_sign-up').prop('type', 'password');
			$(this).find('#up-hide').css('display', 'none');
			$(this).find('#up-show').css('display', 'block');
		}
	});

	$('.sign-up-form__pass-show-2').on('click', function (event) {
		event.preventDefault();

		if($(this).attr('data-show') === 'false') {
			$(this).attr('data-show', 'true');
			$('#password_conf_field_sign-up').prop('type', 'text');
			$(this).find('#up-show2').css('display', 'none');
			$(this).find('#up-hide2').css('display', 'block');
		} else {
			$(this).attr('data-show', 'false');
			$('#password_conf_field_sign-up').prop('type', 'password');
			$(this).find('#up-hide2').css('display', 'none');
			$(this).find('#up-show2').css('display', 'block');
		}
	});

/* END OF Страница регистрации/входа в личный кабинет */


/* Личный кабинет */

	// Изменение ширины полосы, отражающей уровень пользователя
	$('.user-data__level-progress-value').each(function() {
		var n = $(this).attr('data-perc');
		$(this).css('width', $(this).attr('data-perc'));
	});

	// Модалка по нажатию на кнопку "купить" внутри инвестиционного портфеля
	$('#user-buy-modal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var value = button.attr('data-investment_block'); // Извлекает значение атрибута data-investment_block у кнопки, которая была нажата, чтоб открыть модалку
		var price = button.attr('data-investment-price');

		var modal = $(this);

		modal.find('#investment-block-title').text(value);
		modal.find('#investment-block-price').text(price);
	});

	// Изменение ширины полосы, отражающей чистую прибыль
	$('.my-investment-block__profit-progress-value').each(function() {
		var n = $(this).attr('data-perc');
		$(this).css('width', $(this).attr('data-perc'));
	});

	// Клик на переключатель "страховка"
	$('.my-investment-block__insurance-btn').on('click', function (event) {
		event.preventDefault();

		$(this).attr('aria-expanded') === 'true' ? $(this).attr('aria-expanded', 'false') : $(this).attr('aria-expanded', 'true');
	});

	// Модалка по нажатию на переключатель "страховка" внутри инвестиционного портфеля
	$('#user-confirm-insurance-modal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var target_id = button.attr('id'); // Извлекает значение атрибута id у кнопки, которая была нажата, чтоб открыть модалку

		var modal = $(this);

		modal.find('#confirm-insurance-no').attr('data-target-id', target_id);
	});

	// Клик на кнопку "нет" внутри модалки "подтвердите активацию услуги страхование"
	$('#confirm-insurance-no').on('click', function (event) {
		event.preventDefault();

		var target_id = '#' + $(this).attr('data-target-id');
		$(target_id).attr('aria-expanded', 'false');
	});

	// Изменение ширины полосы, отражающей карьерный уровень пользователя
	$('.user-careeer-block__progress-value').each(function() {
		var n = $(this).attr('data-perc');
		$(this).css('width', $(this).attr('data-perc'));
	});

	// Пополнить/вывести средства - клик на картинку
	$('.replenish__pay-img').on('click', function (event) {
		event.preventDefault();
		var payId = $(this).attr('data-pay-id');

		var input = '#pay' + payId;
		$(input).prop('checked', true).trigger('click');
	});
	$('.withdraw__pay-img').on('click', function (event) {
		event.preventDefault();
		var payId = $(this).attr('data-pay-id');

		var input = '#with_pay' + payId;
		$(input).prop('checked', true).trigger('click');
	});

	// Копирование реферальной ссылки
	$('#copy_ref_link').on('click', function (event) {
		event.preventDefault();
		$('#ref_link').select();
		document.execCommand("copy");
	});

	// Модалка "заполните адрес вашего кошелька"
	$('#user-pay-sys-modal').on('show.bs.modal', function (event) {
		var payVar = $(event.relatedTarget.parentElement);
		var wallet_adress = payVar.attr('data-number');

		var modal = $(this);

		modal.find('#pay_wallet_number').prop('value', wallet_adress);
	});








	// Клик на переключатель "апгрейд"
	$('.upgrade-investment-block__upgrade-btn').on('click', function (event) {
		event.preventDefault();

		$(this).attr('aria-expanded') === 'true' ? $(this).attr('aria-expanded', 'false') : $(this).attr('aria-expanded', 'true');
	});

/* END OF Личный кабинет */

});


// Узнает ширину скроллбара
var scrollWidth;
function ScroolbarWidth() {
	let div = document.createElement('div');
	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';
	document.body.append(div);

	let scrollWidth = div.offsetWidth - div.clientWidth;

	div.remove();
	
	return scrollWidth;
}


// Показывает содержимое модалки
function ShowModalContent(element, content) {
	var screenWidth = document.documentElement.clientWidth + scrollWidth;

	if(element.attr('data-content') === content) {
	  	/*element.css('display', 'flex');*/
	  	element.css('display', 'block');

	  	if(screenWidth >= 768)
	  		element.css('margin-left', scrollWidth);
	} else {
	  	element.css('display', 'none');
	}
}



