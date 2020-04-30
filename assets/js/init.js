jQuery(document).ready(function($) {

    /*----------------------------------------------------*/
    /*	Version de la aplicacion
    /*----------------------------------------------------*/
    let version = '';
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === 'version') {
            version = metas[i].getAttribute('content');
        }
    }
    
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
    /*	Carga secciones de forma asincrona
    /*----------------------------------------------------*/
    
    $.ajax({
        url: 'sections/header.php?v='+version,
        success: function(respuesta) {
            $('#content-header').append(respuesta).hide().fadeIn(1500);

            setTimeout(function() {
                $('.fa.fa-chevron-circle-down').removeClass("hidden").hide().fadeIn(1500);
            }, 200);

        }
    });

    $.ajax({
        url: 'sections/about.html?v='+version,
        success: function(respuesta) {
            $('#about').append(respuesta);
        }
    });

    $.ajax({
        url: 'sections/education.php?v='+version,
        success: function(respuesta) {
            $('#education').append(respuesta);
        }
    });

    $.ajax({
        url: 'sections/work.html?v='+version,
        success: function(respuesta) {
            $('#work').append(respuesta);
        }
    });

    $.ajax({
        url: 'sections/docencia.html?v='+version,
        success: function(respuesta) {
            $('#docencia').append(respuesta);
        }
    });

    $.ajax({
        url: 'sections/skills.html?v='+version,
        success: function(respuesta) {
            $('#skills').append(respuesta);
        }
    });

    $.ajax({
        url: 'sections/portfolio.php?v='+version,
        success: function(respuesta) {
            $('#portfolio').append(respuesta);
        }
    });

    $.ajax({
        url: 'assets/images/home-background/home-background-1.jpg',
        success: function(respuesta) {
            setTimeout(function() {
                $("header").removeClass("background-hide").fadeIn(1500);
            }, 200);
        }
    });

    /*----------------------------------------------------*/
    /* Smooth Scrolling
     ------------------------------------------------------ */

    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing', function() {
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

                case 'education':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;

                case 'work':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;

                case 'docencia':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;

                case 'skills':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;

                case 'portfolio':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#292929">');
                break;
            }

            if(current_section==='skills'){
                $('.bar-expand').removeClass('progress').addClass('progress');
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

    $('#buton-mas-proyectos').click(function() {
        if ($('#buton-mas-proyectos').text() === "Mas Proyectos") {
            $(".mas-proyectos").css("display", "block");
            $('#buton-mas-proyectos').text("Menos Proyectos");
        } else {
            $(".mas-proyectos").css("display", "none");
            $('#buton-mas-proyectos').text("Mas Proyectos");
        }

    });

});


