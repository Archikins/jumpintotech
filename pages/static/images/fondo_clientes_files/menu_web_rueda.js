(function($) {
	Drupal.behaviors.rueda = {
		attach: function() {
			$( "#rueda" ).mouseover(function() {
			  $('.ruedaAdmin .img-btn').addClass('mostrarRueda');
			});
			
			$(".ruedaAdmin .img-btn").mouseout(function(){
			  $(this).removeClass('mostrarRueda');
			});
		}
		
	};
})(jQuery);