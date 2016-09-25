;(function($){
var w = window.innerWidth ? window.innerWidth : $(window).width(); // Определяем ширину экрана


//Создание бобра
function createAnimal(cords) {
	var width = $('body canvas').width();
	var cordVal = (cords / 2) + '%';
	var object = $('#animal');
	//animate animal
	var anims = [
		{
			"style": {
				'-webkit-transform':'translateY(-40%)',
				'transform': 'translateY(-40%)',
				'will-change':'transform',
				'-webkit-transition':'-webkit-transform 150ms linear',
				'transition':'-webkit-transform 150ms linear',
				'transition':'transform 150ms linear',
				'transition':'transform 150ms linear, -webkit-transform 150ms linear'
			},
			"time": 150
		},
		{
			"style": {
				'-webkit-transform':'translateX(20%)',
				'transform': 'translateX(20%)',
				'will-change':'transform',
				'-webkit-transition':'-webkit-transform 150ms linear',
				'transition':'-webkit-transform 150ms linear',
				'transition':'transform 150ms linear',
				'transition':'transform 150ms linear, -webkit-transform 150ms linear'
			},
			"time": 150
		},
		{
			"style": {
				'-webkit-transform':'translateX(40%)',
				'transform': 'translateX(40%)',
				'will-change':'transform',
				'-webkit-transition':'-webkit-transform 150ms linear',
				'transition':'-webkit-transform 150ms linear',
				'transition':'transform 150ms linear',
				'transition':'transform 150ms linear, -webkit-transform 150ms linear'
			},
			"time": 150
		},
		{
			"style": {
				'-webkit-transform':'translateX('+cordVal+')',
				'transform': 'translateX('+cordVal+')',
				'will-change':'transform',
				'-webkit-transition':'-webkit-transform 1000ms linear',
				'transition':'-webkit-transform 1000ms linear',
				'transition':'transform 1000ms linear',
				'transition':'transform 1000ms linear, -webkit-transform 1000ms linear'
			},
			"time": 1000
		},
		{
			"style": {
				'-webkit-transition': 'ease 1000ms all',
				'transition': 'ease 1000ms all',
				'-webkit-transform':'translateX('+cordVal+')',
				'transform':'translateX('+cordVal+')',
				'will-change':'transform'
			},
			"time": 1000,
			"background": ""
		},
		{
			"style": {
				'-webkit-transition': 'ease 1000ms all',
				'transition': 'ease 1000ms all',
				'-webkit-transform':'translateX('+cordVal+')',
				'transform':'translateX('+cordVal+')',
				'will-change':'transform'
			},
			"time": 1000,
			"background": ""
		},
		{
			"style": {
				'-webkit-transform':'translateX(20%)',
				'transform': 'translateX(20%)',
				'will-change':'transform',
				'-webkit-transition':'-webkit-transform 1000ms linear',
				'transition':'-webkit-transform 1000ms linear',
				'transition':'transform 1000ms linear',
				'transition':'transform 1000ms linear, -webkit-transform 1000ms linear'
			},
			"time": 1000,
			"reverse": ""
		},
		{
			"style": {
				'-webkit-transform':'translateY(-40%)',
				'transform': 'translateY(-40%)',
				'will-change':'transform',
				'-webkit-transition':'-webkit-transform 150ms linear',
				'transition':'-webkit-transform 150ms linear',
				'transition':'transform 150ms linear',
				'transition':'transform 150ms linear, -webkit-transform 150ms linear'
			},
			"time": 150
		},
		{
			"style": {
				'-webkit-transform':'translateX(-150%)',
				'transform': 'translateX(-150%)',
				'will-change':'transform',
				'-webkit-transition':'-webkit-transform 150ms linear',
				'transition':'-webkit-transform 150ms linear',
				'transition':'transform 150ms linear',
				'transition':'transform 150ms linear, -webkit-transform 150ms linear'
			},
			"time": 150
		}
	];

		anims = anims.reverse();
		var ini_time = 1000;

		function update_anims() {
			var current_anim = anims.pop();
				if (current_anim) {
				setTimeout(function(){
					object.css(current_anim.style);
						if ("background" in current_anim) {
							object.addClass('background-eat');
						}
						if ("reverse" in current_anim) {
							object.removeClass('background-eat').addClass('reverse');
						};
					ini_time = current_anim.time;
					update_anims();
				}, ini_time);
			}
		};
		update_anims();


//stop animal
$(object).click(function(){
	$(object).css({
		'-webkit-transform':'translateX(3000%)',
		'transform':'translateX(3000%)',
		'-webkit-transition':'-webkit-transform 600ms linear',
		'transition':'-webkit-transform 300ms linear',
		'transition':'transform 600ms linear, -webkit-transform 600ms linear',
		'will-change':'transform',
	});
	anims = anims[0];
});
//end stop animal

};
//Запуск функции появления бобра
	createAnimal('400');
//Конец создания бобра


})(jQuery);