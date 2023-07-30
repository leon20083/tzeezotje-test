$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	$("#wdh_form").submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "wdh_send_form.php",
        data: $("#wdh_form").serialize(),
        success: function(data) {
            $("#wdh_result_form").html(data);
        }
    });
	});

});
const sliderThumbs = new Swiper('.swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'horizontal', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 3 превью
	spaceBetween: 24, // расстояние между слайдами
	navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', // кнопка Next
		prevEl: '.slider__prev' // кнопка Prev
	},
	loop: true,
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'horizontal', // вертикальная прокрутка
		}
	}
});

const buttons = document.getElementsByClassName('modal-button');
  for(let button of buttons){
    button.addEventListener('click', openModal);
  }
  const modalContainer = document.getElementById('modal__container');
  modalContainer.addEventListener('click', closeModal);

  function openModal(){
    modalContainer.classList.add('active');
  }

  function closeModal(event){
    if(event.target.id == 'modal-wrapper'){
        if(!modalContainer.classList.contains('active')) return;
        modalContainer.classList.remove('active');
    }
  }
