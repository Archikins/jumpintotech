(function($) {
	Drupal.behaviors.general = {
		attach: function(context, settings) {

			$(window).load(function(){
				Drupal.attachBehaviors();
			});



			if (Drupal.ajax !== undefined) {
				Drupal.ajax.prototype.commands.solicitarPresupuesto = function(ajax, response, status) {
					var titulo = response.titulo;
					var content = response.content;
					var url = response.url;
					var servicio = response.servicio;

					$.metroMessageBox({
						sound: false,
						title: titulo,
						content: content,
						backgroundcolor: '#373A3B',
						backgroundcontent: 'transparent',
						buttons: ['Enviar', "Cerrar"],
						icons: ["fa-paper-plane", "fa-times"],
						activebutton: "#23527c",
						normalbutton: '#373A3B',
						opacity: 0.8,
					}, function(action, button, value) {
						if (button == "Cerrar") {
							return;
						} else {
							$('.mbMsgBoxTextContent button.form-submit').mousedown();
						}
					});

					$('form.webform-client-form-14 .webform-component--url input').val(url);

					if(servicio)
						$('form.webform-client-form-14 .webform-component--servicio input').val(servicio);

					Drupal.attachBehaviors();
				};
			}

			

			//Asignar una altura fija a la sección del formulario de contacto *CONTACTO FIXED*
			if($('#block-admin-web-contacto').length){
				var contenedor = $('#block-admin-web-contacto');
				//contenedor.css('height', contenedor.find('.content').height());
				$('.boton-mostrar-contacto').click(function(e){
					e.stopImmediatePropagation();
					console.log("pasa");
					$('#block-admin-web-contacto').toggleClass('contactoAbierto');
				});
			}

			if($('.lista-equipo li').length){
				$($('.lista-equipo li')[1]).after('<br>');
			}
			if($('.lista-empleados-inicio li').length){
				$($('.lista-empleados-inicio li')[1]).after('<br>');
			}

			$(document).ready(function(){
				//Nuevo boton responsive
				$('button.navbar-toggle').html('<span class="icon"></span><span class="text">MENU</span>');

				$('button.navbar-toggle').on('click', function(e){
				    e.preventDefault();
				    e.stopImmediatePropagation();

				    if( $(this).hasClass('abierto') ){
				      $(this).removeClass('abierto');
				      $(this).addClass('cerrado');
				      $('#navbar-collapse').removeClass('collapsing');
				      $('#navbar-collapse').addClass('collapse');
				      $('body').removeClass('menu-abierto');
				    } else {
				      $(this).removeClass('cerrado');
				      $(this).addClass('abierto');
				      $('#navbar-collapse').removeClass('collapse');
				      $('#navbar-collapse').addClass('collapsing');
				      $('body').addClass('menu-abierto');
				    }
				});

				//Lista selectores pasos evolutivos
				if($('.lista-selectores-pasos-evolutivos').length){
					$($('.lista-selectores-pasos-evolutivos > li')[0]).addClass('selected').click(function(){
						$('.lista-selectores-pasos-evolutivos li.selected').removeClass('selected');
						$(this).addClass('selected');
						$($('.view-slider-como-trabajamos .carousel-indicators li')[0]).click();

						var scrollTop = $(window).scrollTop() + $('#navbar').height() + $('.lista-selectores-pasos-evolutivos').height() + 15;
						if(scrollTop >= $('.group-slider').offset().top + $('.group-slider').height()){
							$("html, body").animate({ scrollTop:
								$('.group-slider').offset().top - $('#navbar').height() + 40}
							, "slow");
						}
					});

					$($('.lista-selectores-pasos-evolutivos > li')[1]).click(function(){
						$('.lista-selectores-pasos-evolutivos li.selected').removeClass('selected');
						$(this).addClass('selected');
						$($('.view-slider-como-trabajamos .carousel-indicators li')[1]).click();

						var scrollTop = $(window).scrollTop() + $('#navbar').height() + $('.lista-selectores-pasos-evolutivos').height() + 15;
						if(scrollTop >= $('.group-slider').offset().top + $('.group-slider').height()){
							$("html, body").animate({ scrollTop:
								$('.group-slider').offset().top - $('#navbar').height() + 40 }
							, "slow");
						}
					});

					$($('.lista-selectores-pasos-evolutivos > li')[2]).click(function(){
						$('.lista-selectores-pasos-evolutivos li.selected').removeClass('selected');
						$(this).addClass('selected');
						$($('.view-slider-como-trabajamos .carousel-indicators li')[2]).click();

						var scrollTop = $(window).scrollTop() + $('#navbar').height() + $('.lista-selectores-pasos-evolutivos').height() + 15;
						if(scrollTop >= $('.group-slider').offset().top + $('.group-slider').height()){
							$("html, body").animate({ scrollTop:
								$('.group-slider').offset().top - $('#navbar').height() + 40 }
							, "slow");
						}
					});

					$('.carousel-inner').bind("DOMSubtreeModified",function(){
						$('.lista-selectores-pasos-evolutivos li.selected').removeClass('selected');
						if($($('.carousel-inner .item')[0]).hasClass('active')){
							$($('.lista-selectores-pasos-evolutivos > li')[0]).addClass('selected');
						}
						if($($('.carousel-inner .item')[1]).hasClass('active')){
							$($('.lista-selectores-pasos-evolutivos > li')[1]).addClass('selected');
						}
						if($($('.carousel-inner .item')[2]).hasClass('active')){
							$($('.lista-selectores-pasos-evolutivos > li')[2]).addClass('selected');
						}
					});
				}

				// Fijar enlaces
				if($('.page-node-13').length || $('.page-node-35').length){
		        	window.addEventListener('scroll', fijarPasos);
				}

				// Tab Proyectos
				$(".invisible").each(function( index ) {
				  var ruta = $(this).attr("id");
				   $('a[href$="'+ruta+'"]').parent().css('display','none');
				});
			});

			function fijarPasos(){
				var posicion1 = $('.group-slider').position();
				var top1 = posicion1.top - $('#navbar').height();

				var posicion2 = $('.group-titulo-descripcion-fondo').position();
				var top2 = posicion2.top - $('#navbar').height() - $('.lista-selectores-pasos-evolutivos').height();

				if($(window).scrollTop() > top1){
					if($(window).scrollTop() < top2  && $(window).scrollTop() > top1){
						$('.lista-selectores-pasos-evolutivos').css('transition', 'all 0s');
						$('.group-slider').css('position', 'relative');
						$('.lista-selectores-pasos-evolutivos').css('position', 'fixed');
						$('.lista-selectores-pasos-evolutivos').css('top', $('#navbar').height());
						$('.lista-selectores-pasos-evolutivos').addClass('pequeno');
						$('.lista-selectores-pasos-evolutivos').css('transition', 'background-color 1s');
					}else{
						$('.lista-selectores-pasos-evolutivos').css('transition', 'all 0s');
						$('.lista-selectores-pasos-evolutivos').css('transition', 'background-color 1s');
						$('.group-slider').css('position', 'initial');
						$('.lista-selectores-pasos-evolutivos').css('position', 'absolute');
						$('.lista-selectores-pasos-evolutivos').css('top', posicion2.top - $('.lista-selectores-pasos-evolutivos').height());

					}
				}else{
					$('.lista-selectores-pasos-evolutivos').removeClass('pequeno');
					$('.group-slider').css('position', 'relative');
					$('.lista-selectores-pasos-evolutivos').css('position', 'absolute');
					$('.lista-selectores-pasos-evolutivos').css('top', 'initial');

				}


				/*var contenedor = $('.group-slider');
				var contenedor2 = $('.group-titulo-descripcion-fondo');
				var posicion = contenedor2.position();

				var scrollTop = $(window).scrollTop() + $('#navbar').height();
				if(scrollTop > contenedor.offset().top && scrollTop < contenedor2.offset().top){
					$('.group-slider').css('position', 'relative');
					$('.lista-selectores-pasos-evolutivos').removeClass('pasos-absolute');
					$('.lista-selectores-pasos-evolutivos').addClass('pasos-fixed');
					$('.lista-selectores-pasos-evolutivos').css('top', '135px');

				}else{
					if(scrollTop > contenedor2.offset().top){
						$('.lista-selectores-pasos-evolutivos').removeClass('pasos-fixed');
						$('.lista-selectores-pasos-evolutivos').addClass('pasos-absolute');
						$('.pasos-absolute').css('top', posicion.top);
						$('.group-slider').css('position', 'initial');
					}else{
						$('.group-slider').css('position', 'relative');
						$('.lista-selectores-pasos-evolutivos').removeClass('pasos-fixed');
						$('.lista-selectores-pasos-evolutivos').removeClass('pasos-absolute');
						$('.lista-selectores-pasos-evolutivos').css('top', 0);

					}
				}*/
			}

		}
	};

	Drupal.behaviors.timeline = {
		attach: function(context, settings) {

			$.fn.timeline = function() {
		    var selectors = {
		      id: $(this),
		      item: $(this).find(".field-item"),
		      activeClass: "timeline-item--active",
		      img: ".timeline_fondo img"
		    };
		    selectors.item.eq(0).addClass(selectors.activeClass);
		    selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");

		    var itemLength = selectors.item.length;
		    $(window).scroll(function() {
		      var max, min;
		      var pos = $(this).scrollTop();
		      selectors.item.each(function(i) {
		        min = $(this).offset().top;
		        max = ($(this).height() + $(this).offset().top);
		        scroll = document.documentElement.scrollTop || document.body.scrollTop;
		        var visible = $(document).scrollTop() + 200;
		        /*if(min < scroll+300 && scroll+300 < max){
			        $(this).addClass('active');
			        $(this).css('opacity', 1);

		        }
		        if(max-300 < scroll || scroll+300 < min && scroll+300 < max){
			        $(this).removeClass('active');
			        $(this).css('opacity', 0);
		        }*/



		        var that = $(this)
		        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
		          selectors.item.removeClass(selectors.activeClass);
		          selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")");
		          selectors.item.last().addClass(selectors.activeClass)
		        } else if (pos <= max - 40 && pos >= min) {
		          selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")");
		          selectors.item.removeClass(selectors.activeClass);
		          $(this).addClass(selectors.activeClass);
		        }

		      });
		    });

		  }

		  $(".timeline-container").timeline();
		}
	};

})(jQuery);
