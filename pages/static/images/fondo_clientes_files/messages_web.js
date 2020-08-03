(function($) {
	Drupal.behaviors.messages_web = {
		attach: function(context, settings) {
			
			var mensaje = false;
			if(Drupal.settings.messages_web!== undefined)
				mensaje = json2array(Drupal.settings.messages_web.mensaje);
				
			
			if(mensaje){				
				$(document).ready(function() {
					
					for(i=0; i<mensaje.length; i++) {
						$.smallBox({
								sound:false,
							    title: mensaje[i]['titulo'],
								content: mensaje[i]['mensaje'],
								color: mensaje[i]['color'],
								fa : mensaje[i]['icono'],
								//timeout : mensaje[i]['tiempo'],
						});						
					}
				});
			}	
			
			
			function json2array(json) {
				var parsed = JSON.parse(json);
				var array = [];
				for (var i in parsed) {
					array.push(parsed[i]);
				}
				return array;
			}
			
			function jsonToArray(json) {				
				var array = [];
				for (var i in json) {
					array.push(json[i]);
				}
				return array;
			}		
		}
	};
})(jQuery);