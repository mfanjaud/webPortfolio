



$(document).ready(function() {
	
	$('section#experience a').on('click', function() {
			$('div#modal img').attr('src', $(this).attr('data-image-url') ); 
	});
	
	$('#about .grey-circle').waypoint(function(){
		$('#about .grey-circle').addClass('animated fadeInUp')
	}, {
		offset: '40%'
	});

	$('#skills .grey-circle').waypoint(function(){
		$(this.element).addClass('animated fadeInUp')
	}, {
		offset: '40%'
	});

	$('.center-skills img').waypoint(function(){
		$('.center-skills img').addClass('animated shake')
	}, {
		offset: '40%'
	});

	$('#experience .col-sm-4').waypoint(function(){
		$(this.element).addClass('animated zoomIn');
		$(this.element).css({'opacity':1});
	}, {
		offset: '40%'
	});

	$('#resume div.image-left img').waypoint(function(){
		$(this.element).addClass('animated fadeInRight')
	}, {
		offset: '40%'
	});

	$('#resume .mode > div').waypoint(function(){
		$(this.element).addClass('animated fadeInUp')
	}, {
		offset: '40%'
	});

	$('#form').bootstrapValidator({
		message: 'Désolée ce n\'est pas bon...',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh',
		},
		fields: {
			name: {
				validators: {
					notEmpty: {
						message: 'Désolée mais j\'ai vraiment besoin de cette information :) !'
					}
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: 'Désolée mais j\'ai vraiment besoin de cette information :) !'
					},
					emailAddress: {
						message: 'Cela ne me semble pas être une adresse valide...!'
					}
				}
			},
			message: {
				validators: {
					notEmpty: {
						message: 'Malheureusement le message ne peut pas être vide, sinon à quoi bon envoyer un message ???'
					}
				}
			}
		}
	}).on('success.form.bv', function(e){
		e.preventDefault();
		var $form = $(e.target);
		var bv = $form.data('bootstrapValidator');

		$.post($form.attr('action'), $form.serialize(), function(result) {
			console.log(result);
		},'json');
	});


});

smoothScroll.init({
	speed: 1000,
	easing: 'easeInQuad',
	updateURL: false,
	offset: 0,
});

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #4EC3E0 }";
  document.body.appendChild(css);
};
