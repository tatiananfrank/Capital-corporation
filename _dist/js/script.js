$(document).ready(function() {
	$('#burger').on('click', function (event) {
		$(this).attr('aria-expanded') === 'true' ? $(this).attr('aria-expanded', 'false') : $(this).attr('aria-expanded', 'true');
	});


	var carouselParams = {
		loop:true,
  		autoplay:true,
	    autoplayTimeout:2000,
	    autoplaySpeed:500,
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
	
	if($(document).find('.owl-carousel').length !== 0)
		$(".owl-carousel").owlCarousel(carouselParams);

	$('.cases-switcher__link').on('click', function (event) {
		event.preventDefault();

		var activeClass = 'cases-switcher__link_active';

		var link = $(event.target);

		if(!link.hasClass(activeClass)) { 

			$('.cases-switcher__link').each(function() {
				$(this).hasClass(activeClass) ? $(this).removeClass(activeClass) : false;
			});

			var model = link.attr('data-model'); 
			var html = '';

			$('.cases-list').each(function() {
				if($(this).attr('data-model') === model) {
					html = $(this).prop('innerHTML');
				}
			});

			$(".owl-carousel").trigger('replace.owl.carousel', html, carouselParams).trigger('refresh.owl.carousel');
			$(".owl-carousel").trigger('play.owl.autoplay');

			link.addClass(activeClass);
		}
	});



	$('#profit-modal').on('show.bs.modal', function (event) {
		if(!scrollWidth)
			scrollWidth = ScroolbarWidth();

		var button = $(event.relatedTarget);
		var value = button.attr('data-content'); 

		var modal = $(this);

		
		modal.find('.modal__img').each(function() {
			ShowModalContent($(this), value)
		});

		modal.find('.modal__text').each(function() {
			ShowModalContent($(this), value);
		});
	});

	$('#profit-modal').on('hide.bs.modal', function (event) {
		$(this).find('.magic').scrollTop(0);
	});


	$('#bank-modal').on('show.bs.modal', function (event) {
		if(!scrollWidth)
			scrollWidth = ScroolbarWidth();

		var button = $(event.relatedTarget);
		var value = button.attr('data-content'); 

		var modal = $(this);

		modal.find('.bank-modal.modal-dialog').attr('data-content', value);

		modal.find('.modal__text').each(function() {
			ShowModalContent($(this), value);
		});
	});

	$('#bank-modal').on('hide.bs.modal', function (event) {
		$(this).find('.magic').scrollTop(0);
	});


	$('#user-news-modal').on('show.bs.modal', function (event) {
		var newsItem = $(event.relatedTarget.parentElement);
		var shadow = newsItem.attr('data-shadow');

		var modalContent = newsItem.find('.user-news-item__content').prop('innerHTML');

		var modal = $(this);
		modal.find('.modal-news').prop('innerHTML', modalContent);
		modal.find('.modal-news').attr('data-shadow', shadow);
	});


	$('.sign_link').on('click', function (event) {
		event.preventDefault();

		var activeClass = 'welcome__active-form';

		var link = $(event.target);

		if(!link.hasClass(activeClass)) { 

			var form = link.attr('data-form'); 

			$('.welcome_form').each(function() {
				if($(this).attr('data-form') === form) {
					$(this).css("display", "flex");
				} else {
					$(this).css("display", "none");
				}
			});
		}
	});

	$('.sign-up-form__btn-next').on('click', function (event) {
		event.preventDefault();

		$('.sign-up-form__step-one').css('display', 'none');
		$('.sign-up-form__step-two').css('display', 'flex');
	});

	$('.sign-up-form__prev-step').on('click', function (event) {
		event.preventDefault();
		
		$('.sign-up-form__step-two').css('display', 'none');
		$('.sign-up-form__step-one').css('display', 'flex');
	});

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



	$('.user-data__level-progress-value').each(function() {
		var n = $(this).attr('data-perc');
		$(this).css('width', $(this).attr('data-perc'));
	});

	$('#user-buy-modal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var value = button.attr('data-investment_block'); 
		var price = button.attr('data-investment-price');

		var modal = $(this);

		modal.find('#investment-block-title').text(value);
		modal.find('#investment-block-price').text(price);
	});

	$('.my-investment-block__profit-progress-value').each(function() {
		var n = $(this).attr('data-perc');
		$(this).css('width', $(this).attr('data-perc'));
	});

	$('.my-investment-block__insurance-btn').on('click', function (event) {
		event.preventDefault();

		if($(this).attr('aria-expanded') === 'false') {
			$(this).attr('aria-expanded', 'true');
			$('#user-confirm-insurance-modal').attr('data-btn', $(this).attr('id')); 
			$('#user-confirm-insurance-modal').modal('show');
		} else {
			$(this).attr('aria-expanded', 'false');
		}
	});

	$('#user-confirm-insurance-modal').on('show.bs.modal', function (event) {
		var modal = $(this);
		var target_id = $(this).attr('data-btn');

		modal.find('#confirm-insurance-no').attr('data-target-id', target_id);
	});

	$('#confirm-insurance-no').on('click', function (event) {
		event.preventDefault();

		var target_id = '#' + $(this).attr('data-target-id');
		$(target_id).attr('aria-expanded', 'false');
	});

	$('.user-careeer-block__progress-value').each(function() {
		var n = $(this).attr('data-perc');
		$(this).css('width', $(this).attr('data-perc'));
	});

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

	$('#copy_ref_link').on('click', function (event) {
		event.preventDefault();
		$('#ref_link').select();
		document.execCommand("copy");
	});

	$('#user-pay-sys-modal').on('show.bs.modal', function (event) {
		var payVar = $(event.relatedTarget.parentElement);
		var wallet_adress = payVar.attr('data-number');

		var modal = $(this);

		modal.find('#pay_wallet_number').prop('value', wallet_adress);
	});


	$('.upgrade-investment-block__upgrade-btn').on('click', function (event) {
		event.preventDefault();

		$(this).attr('aria-expanded') === 'true' ? $(this).attr('aria-expanded', 'false') : $(this).attr('aria-expanded', 'true');
	});
});


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


function ShowModalContent(element, content) {
	var screenWidth = document.documentElement.clientWidth + scrollWidth;

	if(element.attr('data-content') === content) {
	  	element.css('display', 'block');

	  	if(screenWidth >= 768)
	  		element.css('margin-left', scrollWidth);
	} else {
	  	element.css('display', 'none');
	}
}