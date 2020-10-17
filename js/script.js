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
  var value = button.data('content') // Extract info from data-* attributes

  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).

  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)

  /*modal.find('.modal__img').attr('src', 'C:/Users/ученик/Desktop/Таня/Capital corporation/img/modal-picture_' + value + '_cropped.png');*/
  modal.find('.modal__img').attr('src', '../img/modal-picture_' + value + '_cropped.png');

  var text_1 = 'Инвестиции в перспективные стартапы по разработке платформ для создания приложений на основе блокчейн относятся к самым рискованным видам вложений личного капитала. Однако это реальный шанс для каждого человека, чтобы заработать свой первый миллион за пару лет. Новейшая история знает немало примеров, когда инвесторы покупали токены по минимальной цене размещения в момент проведения ICO и впоследствии получали фантастические прибыли. Например, токен Wings за два года показал доходность 1488% или более 385% годовых. Абсолютный рекордсмен по общей доходности в блокчейн стартапах – это токен NXT. За шесть лет его стоимость выросла на 765 000%. Самые терпеливые ранние инвесторы с железными нервами увеличили свой капитал в 7 600 раз! Мы предлагаем инвестиционные портфели с разумной диверсификацией активов в инновационные блокчейн стартапы (ICO). Наши инвесторы получают прибыль, которая превышает отдачу от консервативных способов вложения капитала.';
  var text_2 = 'Современный технологичный сектор превратился в драйвер мировой экономики. Крупнейшие IT-корпорации генерируют глобальные изменения в различных сферах экономики, порождая сильнейшие импульсы для развития отдельных сегментов и отраслей. Они развиваются даже на стагнирующих или падающих рынках. Акции таких компаний обладают огромным потенциалом к долгосрочному росту; инвестиции приносят стабильную прибыль на протяжении многих лет. Например, Facebook, Google и Microsoft на практике реализовали эффект масштаба, когда компания вышла на мировой уровень, а капитализация стали исчисляться десятками миллиардов долларов. Сегодня перед инвесторами открываются захватывающие возможности для вложений в высокие технологии. Наши специалисты включили в инвестиционные портфели акции самых надёжных и быстрорастущих сегментов цифровой экономики. Инвестируйте вместе с нами в успешные IT-компании и делайте долгосрочные вложения в собственное будущее.';
  var text_3 = 'Фьючерсная торговля открывает огромные возможности для продвинутых инвесторов. Мгновенное заключение сделок, упрощенная система расчетов, низкие транзакционные издержки привлекают инвесторов с небольшим капиталом. Огромное количество активных участников обеспечивает высокую ликвидность операций с фьючерсными контрактами. Безопасное хеджирование потенциальных рисков защищает позиции от убытков. Прибыль можно получить как при покупке, так и при продаже фьючерсов. Гарантированное исполнение обязательств по контракту делают фьючерсную торговлю одним из самых надежных финансовых инструментов. Наша компания предоставляет возможности для неограниченных заработков при операциях с индексными, товарными, сырьевыми, валютными фьючерсами. Выстраивая собственные торговые стратегии, хеджируя риски по базовым активам, мы извлекаем безрисковую арбитражную прибыль и максимизируем доход от операций с производными инструментами.';
   var text_4 = 'Участие в IPO представляет собой быстрый и достаточно доходный способ для приумножения капитала. При умеренном уровне риска у инвесторов с небольшим капиталом появляется возможность принять участие в первичном публичном размещении акций, чтобы выгодно вложиться в перспективные компании. Средняя доходность инвестиций в IPO на порядок выше, чем рост курсовой стоимости акций и многократно превышает проценты по банковскому депозиту. В первые дни и недели после проведения IPO отмечается высокая волатильность акций. В это время инвесторы фиксируют солидную прибыль. По статистике, цена акций после IPO растет и порядка 70-80% инвестиций приносят ожидаемую прибыль. Доходность в одной сделке составляет от 30 до 100%, время сделки до одного месяца. Инвестируйте в IPO вместе с нашей компанией и наслаждайтесь высокой прибылью от краткосрочных вложений в акции с высоким потенциалом к росту.';

   switch (value) { 
	   	case 1: 
			value = text_1;
			break;
		case 2: 
			value = text_2;
			break;
		case 3: 
			value = text_3;
			break;
		case 4: 
			value = text_4;
			break;
		default: 
			value = 'Oops';
			break;
   }
   modal.find('.modal__text').text(value);
})

/* END OF Модалка по нажатию на кнопку "подробнее" внутри секции profit */


/* Бургер меню */

$('#burger').on('touchstart click', function (event) {
	if (event.type == "touchstart") { 
    	$(this).off('click'); 
        //alert("Only touch event is fired"); 
    } else if (event.type == "click") { 
        $(this).off('touchstart'); 
        //alert("Only click event is fired"); 
    } 

	var button = $(event.target); // Button that triggered event
	button.attr('aria-expanded') === 'true' ? button.attr('aria-expanded', 'false') : button.attr('aria-expanded', 'true');
})
/* END OF Бургер меню */