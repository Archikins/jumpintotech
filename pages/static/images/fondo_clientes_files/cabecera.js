(function($) {

    var width, height, largeHeader, canvas, ctx, points, target, animateHeader, menuHeight = true;
	$(document).ready(function(){
	    // Main
	    initHeader();
	    initAnimation();
	    addListeners();

	    //Slide imagen cabecera
	    /*if($('.field-name-field-foto-cabecera-home')){

		    $(window).load(function() {
			   var images = new Array();
			   $( ".field-name-field-foto-cabecera-home img" ).each(function(index) {
					images[index] = $(this).attr('src');
				});

				if(images.length > 1){
					var i = 0;

				    function changeBackground() {
				        $('.fondo-home').fadeOut(2000, function(){
				            $('.fondo-home').css('background-image', function () {
				            if (i >= images.length) {
				                    i = 0;
				                }

				                return 'url(' + images[i++] + ')';
				            });
				            $('.fondo-home').fadeIn(2000);
				        })
				    }
				    changeBackground();
				    setInterval(changeBackground, 2000);
				}

			});
		}*/

		$('svg').stop();

		$('.fondo0').addClass('active');

		function slideSwitch() {
		    var $active = $('#banner div.active');

		    if ( $active.length == 0 ) $active = $('#banner div:last');

		    // use this to pull the images in the order they appear in the markup
		    var $next =  $active.next().length ? $active.next()
		        : $('#banner div:first');

		    // uncomment the 3 lines below to pull the images in random order

		    // var $sibs  = $active.siblings();
		    // var rndNum = Math.floor(Math.random() * $sibs.length );
		    // var $next  = $( $sibs[ rndNum ] );

		    $active.addClass('last-active');
		    $('.last-active').css('opacity',0);

		    //$next.css({opacity: 0.0})
		        //.addClass('active')
		        //.animate({opacity: 1.0}, 1000, function() {
		            //$active.removeClass('active last-active');
		        //});
		}

		//$(function() {
		    //setInterval(function(){
			    //slideSwitch();
			//}, 6000 );
		//});


		$(window).scroll(function() {
		    var scroll = $(window).scrollTop();
		    if (scroll >= '10') {
				    $("body").addClass("modifyContent");
					//$("#navbar .container-fluid").animate({height: "inherit"});
					//$('.modifyContent #block-block-2').hide(500);


		    } else {
		        $("body").removeClass("modifyContent");
		        //$('#block-block-2').show(500);
				//$("#navbar .container-fluid").animate({height: $(window).height()+"px"});

		    }


		});


	});

	$(window).load(function(){

		$('.precarga').fadeOut(function(){
			$('.precarga').remove();
		});



	})



    function initHeader() {
        if($('body.page-node-15').length){
	        $('#navbar .container-fluid').height(window.innerHeight);
        }
        if($('body.page-node-36').length){
	        $('#navbar .container-fluid').height(window.innerHeight);
        }
        width = window.innerWidth;
        height = $('#navbar').height();
        menuHeight = $('#navbar .container-fluid').height();
        target = {x: width/2, y: height/2};

        //largeHeader = document.getElementById('navbar');
        //largeHeader.style.height = (height/2)+'px';

		if(document.getElementById('header-canvas') != null){
			canvas = document.getElementById('header-canvas');
	        canvas.width = width;
	        canvas.height = (height);
	        ctx = canvas.getContext('2d');
		}

        // create points
        var divisor = height / 48;
        var divisor_w = width / 80;
        points = [];
        for(var x = 0; x < width; x = x + width/divisor_w) {
            for(var y = 0; y < height; y = y + height/divisor) {
                var px = x + Math.random()*width/divisor_w;
                var py = y + Math.random()*height/divisor;
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for(var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for(var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if(!(p1 == p2)) {
                    var placed = false;
                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var i in points) {
            var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
        scrollCheck();
    }

    // Event handling
    function addListeners() {
        if(!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY)    {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;

        //Comprobar si la sección de contacto debe estar fixed o no *CONTACTO FIXED*
        if($('#block-admin-web-contacto').length){
			var contenedor = $('#block-admin-web-contacto');
			var scrollTop = $(window).scrollTop() + window.innerHeight;
			if(scrollTop > contenedor.offset().top){
				contenedor.removeClass('fixedcontacto');
				contenedor.removeClass('contactoAbierto');
			}else{
				if(!contenedor.hasClass('fixedcontacto')){
					contenedor.addClass('fixedcontacto');
				}
			}
		}
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        //largeHeader.style.height = (height/2)+'px';
        canvas.width = width;
        //canvas.height = height;
    }

    // animation
    function initAnimation() {
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in points) {
                // detect points in range
                if(Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.6;
                    points[i].circle.active = 1;
                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.5;
                    points[i].circle.active = 0.7;
                } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.1;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      
        TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
            y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }});

    }

    // Canvas manipulation
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if(!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

})(jQuery);
