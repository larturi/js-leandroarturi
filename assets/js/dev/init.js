jQuery(document).ready(function($) {

    // ==============================================================
    // Idioma
    // ==============================================================

    $('#lang').click(function(e) {

        e.preventDefault();

        let idioma = 'es';

        switch (e.target.innerText) {
            case 'ENGLISH':
                idioma = 'en';
                e.target.innerText = 'ESPAÑOL';
            break;
        
            case 'ESPAÑOL':
                idioma = 'es';
                e.target.innerText = 'ENGLISH';
            break;
        }

        cargarSecciones(idioma);

    });

    // ==============================================================
    // Imagen de fondo y opacidad al inicio
    // ==============================================================

    var myopacity = 0;
    var img1 = document.createElement("img");
    img1.src = "./assets/images/home-background/home-background-1.jpg";

    img1.onload = function() {
        $('header').css('background', "url('./assets/images/home-background/home-background-1.jpg') no-repeat top center" );
        myFadeFunction();
        $('.loading').css('display', 'none');
    };

    function myFadeFunction() {
        if (myopacity < 1) {
            myopacity += 0.075;
            setTimeout(function(){
                myFadeFunction();
            }, 50);
        }
        document.getElementById('contenido').style.opacity = myopacity;
    }
  
    // ==============================================================
    // Version de la aplicacion
    // ==============================================================

    let version = '';
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === 'version') {
            version = metas[i].getAttribute('content');
        }
    }
    
    // ==============================================================
    // Flexslider
    // ==============================================================

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

    // ==============================================================
    // Carga secciones de forma asincrona
    // ==============================================================

    function cargarSecciones(idioma) {

        const idiomaLocalStorage = getIdiomaLocalStorage();

        if(idiomaLocalStorage !== idioma) {
            localStorage.setItem('lang', idioma);
        }

        $.ajax({
            url: 'helper.php?v='+version+'&lang='+idioma,
            success: function(respuesta) {}
        });

        $.ajax({
            url: 'menu.php?v='+version+'&lang='+idioma,
            success: function(respuesta) {

                const jsonResult = JSON.parse(respuesta);
                let idLang = 0;

                switch (idioma) {
                    case 'es':
                        idLang = 0;
                    break;
                
                    case 'en':
                        idLang = 1;
                    break;
                }

                $('#link-home').html(jsonResult.inicio[idLang]).hide().fadeIn(100);
                $('#link-acerca').html(jsonResult.acerca[idLang]).hide().fadeIn(100);
                $('#link-education').html(jsonResult.educacion[idLang]).hide().fadeIn(100);
                $('#link-work').html(jsonResult.trabajo[idLang]).hide().fadeIn(100);
                $('#link-skills').html(jsonResult.skills[idLang]).hide().fadeIn(100);
                $('#link-portfolio').html(jsonResult.portfolio[idLang]).hide().fadeIn(100);
                $('#lang').html(jsonResult.idioma[idLang]).hide().fadeIn(100);
            
            }
        });

        $.ajax({
            url: 'sections/header.php?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#content-header').html(respuesta).hide().fadeIn(1000);
                setTimeout(function() {
                    $('.fa.fa-chevron-circle-down').removeClass("hidden").hide().fadeIn(50);
                }, 50);
            }
        });
    
        $.ajax({
            url: 'sections/about.php?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#about').html(respuesta);
            }
        });
    
        $.ajax({
            url: 'sections/education.php?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#education').html(respuesta);
            }
        });
    
        $.ajax({
            url: 'sections/work.php?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#work').html(respuesta);
            }
        });
    
        $.ajax({
            url: 'sections/docencia.php?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#docencia').html(respuesta);
            }
        });
    
        $.ajax({
            url: 'sections/skills.php?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                var current_section = $("#nav li.current").text();

                $('#skills').html(respuesta);

                if(current_section==="Skills") {
                    $('.bar-expand').removeClass('progress').addClass('progress');
                }
            }
        });
    
        $.ajax({
            url: 'sections/portfolio.php?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#portfolio').html(respuesta);
            }
        });

    }

    function getIdiomaLocalStorage() {
        if (localStorage.getItem('lang')) {
            return localStorage.getItem('lang');
        } else {
            localStorage.setItem('lang', 'es');
            return localStorage.getItem('lang');
        }
    }

    
    let idioma = getIdiomaLocalStorage();
    cargarSecciones(idioma);
    
    // ==============================================================
    // Smooth Scrolling
    // ==============================================================

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


    // ==============================================================
    // Highlight the current section in the navigation bar
    // ==============================================================

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

    // ==============================================================
    // Make sure that #header-background-image height is equal 
    // to the browser height.
    // ==============================================================

    $('header').css({'height': $(window).height()});
    $(window).on('resize', function() {
        $('header').css({'height': $(window).height()});
        $('body').css({'width': $(window).width()});
    });


    // ==============================================================
    // Fade In/Out Primary Navigation
    // ==============================================================

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


