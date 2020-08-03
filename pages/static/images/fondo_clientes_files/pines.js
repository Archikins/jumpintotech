(function($) {
	Drupal.behaviors.pines = {
		attach: function(context, settings) {
			$.fn.Pines = function(action) {
				var widthMapa = this.width();
				var heightMapa = this.height();
				this.find('.pin').each(function() {
					var widthPinImagen = $(this).find('img').attr('width');
					var heightPinImagen = $(this).find('img').attr('height');
					var widthPin = $(this).attr('data-w');
					var heightPin = $(this).attr('data-h');
					widthPin = parseInt(widthPin);
					heightPin = parseInt(heightPin);
					var topPin = $(this).attr('data-t');
					var leftPin = $(this).attr('data-l');
					topPin = parseFloat(topPin);
					leftPin = parseFloat(leftPin);
					if (widthMapa != widthPin) {
						leftPin = widthMapa * leftPin / widthPin;
						topPin = heightMapa * topPin / heightPin;
						widthPinImagen = widthMapa * widthPinImagen / widthPin;
						heightPinImagen = heightMapa * heightPinImagen / heightPin;
					}
					$(this).css({
						left: leftPin + 'px',
						top: topPin + 'px'
					});
					$(this).fadeIn();
					$(this).find('img').css({
						width: widthPinImagen + 'px',
						height: heightPinImagen + 'px'
					});
				})

				$('#admin-mapa-mundo .noter').click(function(){
					$('#content-mapa img').css('height', heightMapa + 'px');
					$('#content-mapa img').css('width', widthMapa + 'px');
				});

			}
			if ($('.content-mapa').length > 0) {
				$(window).load(function() {
					$('.content-mapa').Pines();
				});
				$(window).resize(function() {
					$('.content-mapa').Pines();
				});
			}

		}
	};
})(jQuery);
