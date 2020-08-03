(function($) {
	
	
	function DestroyMessageBox(MetroMessageBox) {
		var MetroBackground = $(MetroMessageBox.attr("data-background"));
		var tl = new TimelineLite();
		var txtLetterCounter = $("#mnLetterCounter");
		tl.to(txtLetterCounter, 0.3, {
			autoAlpha: 0
		}).to(MetroBackground, 0.3, {
			autoAlpha: 0
		}, "-=0.3").to(MetroMessageBox, 0.3, {
			autoAlpha: 0
		}, "-=0.3").to($("#mnLetterCounter"), 0.3, {
			autoAlpha: 0
		}, "-=0.3");
		setTimeout(function() {
			MetroBackground.remove();
			MetroMessageBox.remove();
		}, 300);
		document.body.style.overflow = "visible";
	}
	
	
	Drupal.behaviors.modalMetroWeb = {
		attach: function(context, settings) {
			
			//Settings
			var backgronudColor = Drupal.settings.modal_metro_web.backgronudcolor;
			var backgronudContent = Drupal.settings.modal_metro_web.backgronudcontent;	
			var textoCerrar = Drupal.settings.modal_metro_web.textocerrar;
			var iconoCerrar = Drupal.settings.modal_metro_web.iconocerrar;
			var activeButton = Drupal.settings.modal_metro_web.activebutton;
			var normalButton = Drupal.settings.modal_metro_web.normalbutton;
			var opacity = parseFloat(Drupal.settings.modal_metro_web.opacity);	
			
			if(Drupal.settings.modalBox!== undefined){
				if(Drupal.settings.modalBox.tipo=='modalBoton'){
					$.metroMessageBox({
						sound: false,
						title: Drupal.settings.modalBox.titulo,
						content: Drupal.settings.modalBox.content,
						backgroundcolor: backgronudColor,
						backgroundcontent: backgronudContent,
						buttons: [Drupal.settings.modalBox.boton, textoCerrar],
						icons: [Drupal.settings.modalBox.icono, iconoCerrar],
						activebutton: activeButton,							
						normalbutton : normalButton,
						opacity : opacity
					}, function(action, button, value) {
						if (button == "Cerrar") {
							return;
						}else{
							$('.mbMsgBoxTextContent form .form-submit').click();					
						}
					});	
				}else if(Drupal.settings.modalBox.tipo=='modal'){
					$.metroMessageBox({
						sound: false,
						title: Drupal.settings.modalBox.titulo,
						content: Drupal.settings.modalBox.content,
						backgroundcolor: backgronudColor,
						backgroundcontent: backgronudContent,
						buttons: [textoCerrar],
						icons: [iconoCerrar],
						activebutton: activeButton,							
						normalbutton :normalButton,
						opacity : opacity
					});
				}
			}
			
			
			$('.modal-metro',context).click(function(){
				var titulo = $(this).attr('data-titulo');
				var content = $('#'+$(this).attr('data-id')).html();
				
				$.metroMessageBox({
					sound: false,
					title: titulo,
					content: content,
					backgroundcolor: backgronudColor,
					backgroundcontent: backgronudContent,
					buttons: [textoCerrar],
					icons: [iconoCerrar],
					activebutton: activeButton,							
					normalbutton :normalButton,
					opacity : opacity
				});	
			})
			
			if (Drupal.ajax !== undefined) {
				Drupal.ajax.prototype.commands.modalBottomMetro = function(ajax, response, status) {
					var content = response.content;
					var titulo = response.titulo;
					var boton = response.boton;
					var icono = response.icono;
					
					$.metroMessageBox({
						sound: false,
						title: titulo,
						content: content,
						backgroundcolor: backgronudColor,
						backgroundcontent: backgronudContent,
						buttons: [boton, textoCerrar],
						icons: [icono, iconoCerrar],
						activebutton: activeButton,							
						normalbutton : normalButton,
						opacity : opacity
					}, function(action, button, value) {
						if (button == "Cerrar") {
							return;
						}else{
							$('.mbMsgBoxTextContent input.form-submit').click();					
						}
					});	
					
					Drupal.attachBehaviors();			
				}
				
				Drupal.ajax.prototype.commands.modalMetro = function(ajax, response, status) {
					var content = response.content;
					var titulo = response.titulo;
					
					$.metroMessageBox({
						sound: false,
						title: titulo,
						content: content,
						backgroundcolor: backgronudColor,
						backgroundcontent: backgronudContent,
						buttons: [textoCerrar],
						icons: [iconoCerrar],
						activebutton: activeButton,							
						normalbutton : normalButton,
						opacity : opacity
					});	
					
					$(document).on("click",function(e) {
				        var container = $(".mbMsgBoxTextContent");
				
				            if (!container.is(e.target) && container.has(e.target).length === 0) { 
					            
								DestroyMessageBox($('.mnMsgBox'));				
				            }
				    });			
				}
				
				Drupal.ajax.prototype.commands.cerrarMessageBox = function(ajax, response, status) {
					DestroyMessageBox($('.mnMsgBox'));
				};
			}
		}
	};
})(jQuery);