/*-----------------------------------------------------------------------------------
 /*
 /* Init JS
 /*
 -----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {
    
     /*----------------------------------------------------*/
    /*	Flexslider
     /*----------------------------------------------------*/
    $('.flexslider').flexslider({
        namespace: "flex-",
        controlsContainer: ".flex-container",
        animation: 'slide',
        controlNav: true,
        directionNav: false,
        smoothHeight: true,
        slideshowSpeed: 7000,
        animationSpeed: 400,
        randomize: false,
    });
    

    /*----------------------------------------------------*/
    /* Smooth Scrolling
     ------------------------------------------------------ */

    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
                $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
    });


    /*----------------------------------------------------*/
    /* Highlight the current section in the navigation bar
     ------------------------------------------------------*/

    var sections = $("section");
    var navigation_links = $("#nav-wrap a");

    sections.waypoint({
        handler: function(event, direction) {

            var active_section;

            active_section = $(this);

            if (direction === "up")
                active_section = active_section.prev();

            var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

            navigation_links.parent().removeClass("current");
            active_link.parent().addClass("current");

            //Color barra browser
            var current_section = active_section.attr("id");

            switch(current_section){
                case 'home':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;

                case 'about':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#292929">');
                break;

                case 'resume':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;

                case 'portfolio':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#292929">');
                break;

                case 'contact':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;                
            }

        },
        offset: '35%'

    });


    /*----------------------------------------------------*/
    /*	Make sure that #header-background-image height is
     /* equal to the browser height.
     ------------------------------------------------------ */

    $('header').css({'height': $(window).height()});
    $(window).on('resize', function() {

        $('header').css({'height': $(window).height()});
        $('body').css({'width': $(window).width()});
    });


    /*----------------------------------------------------*/
    /*	Fade In/Out Primary Navigation
     ------------------------------------------------------*/

    $(window).on('scroll', function() {

        var h = $('header').height();
        var y = $(window).scrollTop();
        var nav = $('#nav-wrap');

        if ((y > h * .20) && (y < h) && ($(window).outerWidth() > 768)) {
            nav.fadeOut('fast');
        }
        else {
            if (y < h * .20) {
                nav.removeClass('opaque').fadeIn('fast');
            }
            else {
                nav.addClass('opaque').fadeIn('fast');
            }
        }

    });


    /*----------------------------------------------------*/
    /*	Modal Popup
     ------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        removalDelay: 200,
        showCloseBtn: false,
        mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    /*----------------------------------------------------*/
    /*	contact form
     ------------------------------------------------------*/

    $('form#contactForm button.submit').click(function() {

        $('#image-loader').fadeIn();

        var contactName = $('#contactForm #contactName').val();
        var contactEmail = $('#contactForm #contactEmail').val();
        var contactSubject = $('#contactForm #contactSubject').val();
        var contactMessage = $('#contactForm #contactMessage').val();

        var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
                '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage + '&gresponse=' + grecaptcha.getResponse();

        $.ajax({
            type: "POST",
            url: "inc/sendEmail.php",
            data: data,
            success: function(msg) {
                
                grecaptcha.reset();


                // Message was sent
                if (msg == 'OK') {
                    $('#image-loader').fadeOut();
                    $('#message-warning').hide();
                    $('#contactForm').fadeOut();
                    $('#message-success').fadeIn();
                }
                // There was an error
                else {
                    $('#image-loader').fadeOut();
                    $('#message-warning').html(msg);
                    $('#message-warning').fadeIn();
                }

            }

        });
        return false;
    });


    $('#buton-mas-proyectos').click(function() {
        if ($('#buton-mas-proyectos').text() === "Mas Proyectos") {
            $(".mas-proyectos").css("display", "block");
            $('#buton-mas-proyectos').text("Menos Proyectos");
        } else {
            $(".mas-proyectos").css("display", "none");
            $('#buton-mas-proyectos').text("Mas Proyectos");
        }

    });

    $(window).load(function() {
        // Una vez se cargue al completo la página desaparecerá el div "cargando"
        $('#cargando').hide();
        $("#contenido").fadeIn("slow");
        
        /*----------------------------------------------------*/
        /* FitText Settings
         ------------------------------------------------------ */

        setTimeout(function() {
            $('h1.responsive-headline').fitText(1, {minFontSize: '40px', maxFontSize: '75px'});
        }, 100);
		
	    $("li").removeClass("current");
	    $("#nav li:first-child").addClass("current");

    });


});








