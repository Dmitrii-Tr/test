// Hamburger menu
$(document).ready(function () {
	$('.menuBurger').click(function () {
		$('.menuBurger').toggleClass('open');
		$('.headerNav').toggleClass('open');
	});
});

//Show/hide password
$('body').on('click', '.passwordControl', function () {
	if ($('#passwordInput').attr('type') == 'password') {
		$(this).addClass('view');
		$('#passwordInput').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#passwordInput').attr('type', 'password');
	}
	return false;
});

// Owl carousel
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 32,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1.2
			},
			580: {
				items: 1.5
			},
			800: {
				items: 2.2
			},
			1100: {
				items: 3.2
			}
		}
	});
});

// Input validation
$(document).ready(function () {
	$("#personForm").validate({
		rules: {
			personName: {
				required: true,
				minlength: 4,
				maxlength: 16,
			},
			account: {
				required: true,
				minlength: 6,
				maxlength: 16,
			},
			phone: {
				required: true,
				digits: true,
				minlength: 7,
				maxlength: 11,
			},
		},
		messages: {
			personName: {
				required: "Это поле обязательно для заполнения",
				minlength: "Логин должен быть минимум 4 символа",
				maxlength: "Максимальное число символов - 16",
			},
			account: {
				required: "Это поле обязательно для заполнения",
				minlength: "Это поле должно быть минимум 6 символ",
				maxlength: "Максимальное число символов - 16",
			},
			phone: {
				required: "Это поле обязательно для заполнения",
				minlength: "Телефон должен быть минимум 7 цифр",
				maxlength: "Это поле максимум 11 цифр",
			},
		}
	});
});












