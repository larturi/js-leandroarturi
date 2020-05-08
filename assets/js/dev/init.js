jQuery(document).ready(function($) {

    var content = [];
    var portfolio = [];
    var cursos = [];
    var myopacity = 0;

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
    // Make sure that #header-background-image height is = browser height
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

        if ((y > h * 0.20) && (y < h) && ($(window).outerWidth() > 768)) {
            nav.fadeOut('fast');
        }
        else {
            if (y < h * 0.20) {
                nav.removeClass('opaque').fadeIn('fast');
            }
            else {
                nav.addClass('opaque').fadeIn('fast');
            }
        }

    });

    // ==============================================================
    // Cambiar Idioma
    // ==============================================================
    $('#lang').click(function(e) {

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

        var current_section = $("#nav li.current").children().attr('href');
        var buttonMenu = $('#nav-wrap').children().eq(1);

        $("#lang").parent().removeClass("current");

        cambiarIdioma(idioma, content);

        buttonMenu.click();
        $(this).attr("href", current_section);

    });

    // ==============================================================
    // Funciones
    // ==============================================================
    function numeroEnLetras(num, idioma) {

        switch (idioma) {
            case 0:

                switch (num) {
                    case 12:
                        return 'doce';
                    case 13:
                        return 'trece';
                    case 14:
                        return 'catorce';
                    case 15:
                        return 'quince';
                    case 16:
                        return 'dieciséis';
                    case 17:
                        return 'diecisiete';
                    case 18:
                        return 'dieciocho';
                    case 19:
                        return 'diecinueve';
                    case 20:
                        return 'veinte';
                    case 21:
                        return 'veintiun';
                    case 22:
                        return 'veintidos';
                    case 23:
                        return 'veintitres';
                    case 24:
                        return 'veinticuatro';
                    case 25:
                        return 'veinticino';
                    case 26:
                        return 'veintiseis';
                    case 27:
                        return 'veintidossiete';
                    case 28:
                        return 'veintidosocho';
                    case 29:
                        return 'veintidosnueve';
                    case 30:
                        return 'treinta';
                    case 31:
                        return 'treinta y un';
                    case 32:
                        return 'treinta y dos';
                    case 33:
                        return 'treinta y tres';
                    case 34:
                        return 'treinta y cuatro';
                    case 35:
                        return 'treinta y cinco';
                    case 36:
                        return 'treinta y seis';
                    case 37:
                        return 'treinta y siete';
                    case 38:
                        return 'treinta y ocho';
                    case 39:
                        return 'treinta y nueve';
                    case 40:
                        return 'cuarenta';
                    default:
                        return 'mas de cuarenta';
                }
                
                break;
        
            case 1:

                switch (num) {
                    case 12:
                        return 'twelve';
                    case 13:
                        return 'thirteen';
                    case 14:
                        return 'fourteen';
                    case 15:
                        return 'fifteen';
                    case 16:
                        return 'sixteen';
                    case 17:
                        return 'seventeen';
                    case 18:
                        return 'eighteen';
                    case 19:
                        return 'nineteen';
                    case 20:
                        return 'twenty';
                    case 21:
                        return 'twenty one';
                    case 22:
                        return 'twenty two';
                    case 23:
                        return 'twenty three';
                    case 24:
                        return 'twenty four';
                    case 25:
                        return 'twenty five';
                    case 26:
                        return 'twenty six';
                    case 27:
                        return 'twenty seven';
                    case 28:
                        return 'twenty eigth';
                    case 29:
                        return 'twenty nine';
                    case 30:
                        return 'thirty';
                    case 31:
                        return 'thirty one';
                    case 32:
                        return 'thirty two';
                    case 33:
                        return 'thirty three';
                    case 34:
                        return 'thirty four';
                    case 35:
                        return 'thirty five';
                    case 36:
                        return 'thirty six';
                    case 37:
                        return 'thirty seven';
                    case 38:
                        return 'thirty eigth';
                    case 39:
                        return 'thirty nine';
                    case 40:
                        return 'forty';
                    default:
                        return 'more then forty';
                }

                break;
        }
        
    }
    
    function getExperiencia(idioma) {
        const datetimeInicioLaboral = new Date('September 1, 2006');
        const hoy = new Date();

        let antiguedad = hoy.getFullYear() - datetimeInicioLaboral.getFullYear();
        const m = hoy.getMonth() - datetimeInicioLaboral.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < datetimeInicioLaboral.getDate())) {
            antiguedad--;
        }

        return numeroEnLetras(antiguedad, idioma);
    }

    function getVersionApp() {
        let version = '';
        const metas = document.getElementsByTagName('meta');
        for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('name') === 'version') {
                version = metas[i].getAttribute('content');
            }
        }

        return version;
    }

    function getIdiomaLocalStorage() {
        if (localStorage.getItem('lang')) {
            return localStorage.getItem('lang');
        } else {
            localStorage.setItem('lang', 'es');
            return localStorage.getItem('lang');
        }
    }

    function getIdLang(idioma) {

       switch (idioma) {
           case 'es':
               idLang = 0;
           break;
       
           case 'en':
               idLang = 1;
           break;
       }

       return idLang;
    }

    // ==============================================================
    // Carga de secciones asincrona
    // ==============================================================

    function cambiarIdioma(idioma, content) {

        const idiomaLocalStorage = getIdiomaLocalStorage();

        if(idiomaLocalStorage !== idioma) {
            localStorage.setItem('lang', idioma);
        }

        // Loading
        showLoading(idLang, content);
        // Menu
        showMenuSection(idioma, content);
        // Header
        showHeaderSection(idioma, content);
        // About
        showAboutSection(idioma, content);
        // Education
        showEducationSection(idioma, content);
        // Cursos
        showCursos(idioma, cursos);
        // Education
        showWorkSection(idioma, content);
        // Docencia
        showDocenciaSection(idioma, content);
        // Skills
        showSkillsSection(idioma, content);
        // Portfolio
        showPortfolioSection(idioma, portfolio);
    }
    
    function cargarSecciones(idioma, content) {

        let idLang = getIdLang(idioma);
        showLoading(idLang, content);

        // Menu
        showMenuSection(idLang, content);

        // Header
        showHeaderSection(idioma, content);
        setTimeout(function() {
            $('.fa.fa-chevron-circle-down').removeClass("hidden").hide().fadeIn(50);
        }, 50);

        // About
        $.ajax({
                url: 'sections/about.html?v='+version+'&lang='+idioma,
                success: function(respuesta) {
                    $('#about').html(respuesta);
                    showAboutSection(idioma, content);
               }
        });
    
        // Educacion
        $.ajax({
            url: 'sections/education.html?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#education').html(respuesta);
                showEducationSection(idioma, content);
                showCursos(idioma, cursos);
            }
        });
    
        // Trabajo
        $.ajax({
            url: 'sections/work.html?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#work').html(respuesta);
                showWorkSection(idioma, content);
            }
        });
    
        // Docencia
        $.ajax({
            url: 'sections/docencia.html?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#docencia').html(respuesta);
                showDocenciaSection(idioma, content);
            }
        });
    
        // Skills
        $.ajax({
            url: 'sections/skills.html?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                var current_section = $("#nav li.current").text();

                $('#skills').html(respuesta);
                showSkillsSection(idioma, content);

                if(current_section==="Skills") {
                    $('.bar-expand').removeClass('progress').addClass('progress');
                }
            }
        });
    
        // Portfolio
        $.ajax({
            url: 'sections/portfolio.html?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#portfolio').html(respuesta);
                showPortfolioSection(idioma, portfolio);
            }
        });

        // Footer
        current_date = new Date();
        $("#footerYear").text(current_date.getFullYear());

    }

    function showLoading(idioma, content) {
        idLang = getIdLang(idioma);
        $("#loading").text(content.loading[idLang]);
    }

    function showMenuSection(idioma, content) {
        idLang = getIdLang(idioma);
        $('#link-home').html(content.menu.inicio[idLang]).hide().fadeIn(1000);
        $('#link-acerca').html(content.menu.acerca[idLang]).hide().fadeIn(1000);
        $('#link-education').html(content.menu.educacion[idLang]).hide().fadeIn(1000);
        $('#link-work').html(content.menu.trabajo[idLang]).hide().fadeIn(1000);
        $('#link-skills').html(content.menu.skills[idLang]).hide().fadeIn(1000);
        $('#link-portfolio').html(content.menu.portfolio[idLang]).hide().fadeIn(1000);
        $('#lang').html(content.menu.idioma[idLang]).hide().fadeIn(1000);
    }

    function showHeaderSection(idioma, content) {
        idLang = getIdLang(idioma);
        $("#content-header").hide();

        $("#header1").text(content.header1[idLang]);
        $("#header2").text(content.header2[idLang]);
        $("#headerAnios").text(getExperiencia(idLang));

        $("#content-header").fadeIn(1000);
    }

    function showAboutSection(idioma, content) {
       idLang = getIdLang(idioma);
       
       $("#aboutTitulo").text(content.aboutTitulo[idLang]).hide().fadeIn(1000);
       $("#aboutParrafo").text(content.aboutParrafo[idLang]).hide().fadeIn(1000);
       $("#aboutContacto").text(content.aboutContacto[idLang]).hide().fadeIn(1000);
       $("#aboutLinks").hide().fadeIn(1000);
    }

    function showEducationSection(idioma, content) {
        
       idLang = getIdLang(idioma);

       $('#education').hide();

       $("#educationTitulo").text(content.educationTitulo[idLang]);
       $("#educationLicenciado").text(content.educationLicenciado[idLang]);
       $("#educationTecnicatura").text(content.educationTecnicatura[idLang]);
       $("#educationPendienteUces").text(content.educationPendienteUces[idLang]);
       $("#educationCursosTitulo").text(content.educationCursosTitulo[idLang]);

       $('#education').fadeIn(1000);
    }

    function showCursos(idioma, cursos) {

        idLang = getIdLang(idioma);
        var tituloCurso;
        var nombreCurso;

        $('#cursosContent').html('');
        $('#cursosContent').hide();

        cursos.forEach(element => {

            if (idLang === 0) {
               nombreCurso = element.nombre;
            } else {
               nombreCurso = element.name;
            }

            if(element.url.length > 1) {
                tituloCurso = `<a href="${element.url}" target="_blank">
                                  <h3>${nombreCurso}</h3>
                               </a>`;
            } else {
                tituloCurso = `<h3>${nombreCurso}</h3>`;
            }

            $('#cursosContent').append(`
                <div class="row item">
                    <div class="twelve columns"> ${tituloCurso}
                        <p class="detalle-cursos">
                                <em class="detalle-cursos-em">${element.anio} • ${element.horas}h • ${element.institucion}</em>
                                <br/>
                        </p>
                    </div>
                </div>
           `);
        });

        $('#cursosContent').hide().fadeIn(1000);

    }

    function showWorkSection(idioma, content) {
        idLang = getIdLang(idioma);

        $('#work').hide();

        $("#trabajoTitulo").text(content.trabajoTitulo[idLang]);
        
        $("#trabajoItLeadSector").text(content.trabajoItLeadSector[idLang]);
        $("#trabajoItLeadFecha").text(content.trabajoItLeadFecha[idLang]);
        $("#trabajoItLeadText").text(content.trabajoItLeadText[idLang]);

        $("#trabajoProjectManagerSector").text(content.trabajoProjectManagerSector[idLang]);
        $("#trabajoProjectManagerFecha").text(content.trabajoProjectManagerFecha[idLang]);
        $("#trabajoProjectManagerText").text(content.trabajoProjectManagerText[idLang]);

        $("#trabajoDesaWebSector").text(content.trabajoDesaWebSector[idLang]);
        $("#trabajoDesaWebFecha").text(content.trabajoDesaWebFecha[idLang]);
        $("#trabajoDesaWebText").text(content.trabajoDesaWebText[idLang]);

        $("#trabajoDesaDeskSector").text(content.trabajoDesaDeskSector[idLang]);
        $("#trabajoDesaDeskFecha").text(content.trabajoDesaDeskFecha[idLang]);
        $("#trabajoDesaDeskText").text(content.trabajoDesaDeskText[idLang]);
        
        $("#trabajoAnalisisSector").text(content.trabajoAnalisisSector[idLang]);
        $("#trabajoAnalisisFecha").text(content.trabajoAnalisisFecha[idLang]);
        $("#trabajoAnalisisText").text(content.trabajoAnalisisText[idLang]);
        
        $("#trabajoFreelanceSector").text(content.trabajoFreelanceSector[idLang]);
        $("#trabajoFreelanceFecha").text(content.trabajoFreelanceFecha[idLang]);
        $("#trabajoFreelanceText").text(content.trabajoFreelanceText[idLang]);

        $('#work').fadeIn(1000);
    }

    function showDocenciaSection(idioma, content) {
        idLang = getIdLang(idioma);
        $("#docenciaTitulo").text(content.docenciaTitulo[idLang]).hide().fadeIn(1000);
        $("#docenciaFecha").text(content.docenciaFecha[idLang]).hide().fadeIn(1000);
        $("#docenciaText").text(content.docenciaText[idLang]).hide().fadeIn(1000);
    }

    function showSkillsSection(idioma, content) {
        idLang = getIdLang(idioma);
        $("#skillsResponsabilidad").text(content.skillsResponsabilidad[idLang]).hide().fadeIn(1000);
        $("#skillsProactividad").text(content.skillsProactividad[idLang]).hide().fadeIn(1000);
        $("#skillsComunicacion").text(content.skillsComunicacion[idLang]).hide().fadeIn(1000);
        $("#skillsMotivacion").text(content.skillsMotivacion[idLang]).hide().fadeIn(1000);
        $("#skillsDelegation").text(content.skillsDelegation[idLang]).hide().fadeIn(1000);
    }

    function showPortfolioSection(idioma, portfolio) {

        idLang = getIdLang(idioma);

        $('#portfolioContent').html('');
        $('#portfolioContent').hide();

        switch (idLang) {
            case 0:

                portfolio.forEach(element => {
                    $('#portfolioContent').append(`
                        <div class="row">
                            <div class="twelve columns">
                                <h3><a href="${element.url}" target="_blank">${element.nombre}</a></h3>
                                    <p class="detalle-cursos">
                                        <em class="detalle-cursos-em hash-lenguaje"><span>${element.lenguaje}</em></span><br />
                                        ${element.resumen}
                                    </p>
                            </div>
                        </div>
                    `);
                }); 
                
                break;

            case 1:

                portfolio.forEach(element => {
                    $('#portfolioContent').append(`
                        <div class="row">
                            <div class="twelve columns">
                                <h3><a href="${element.url}" target="_blank">${element.name}</a></h3>
                                    <p class="detalle-cursos">
                                        <em class="detalle-cursos-em hash-lenguaje"><span>${element.lenguaje}</em></span><br />
                                        ${element.summary}
                                    </p>
                            </div>
                        </div>
                    `);
                }); 
                
                break;
        }

        $('#portfolioContent').fadeIn(1000);

        

    }

    function cargarImagenBackground() {
        // Imagen de fondo y opacidad al inicio
        var img1 = document.createElement("img");
        img1.src = "./assets/images/home-background/home-background-1.jpg";
        img1.onload = function() {
            $('header').css('background', "url('./assets/images/home-background/home-background-1.jpg') no-repeat top center" );
            myFadeFunction();
            $('.loading').css('display', 'none');
        };
    }

    // ==============================================================
    // Promesas con datos json 
    // ==============================================================
    const getContenido = async function() {
        const result = await $.ajax({
            url: 'services/content.json?v='+version
        });
        return result;
    };

    const getPortfolio = async function() {
        const result = await $.ajax({
            url: 'services/portfolio.json?v='+version
        });
        return result;
    };

    const getCursos = async function() {
        const result = await $.ajax({
            url: 'services/cursos.json?v='+version
        });
        return result;
    };

    // ==============================================================
    // Inicializacion
    // ==============================================================
    const version = getVersionApp();
    var idioma = getIdiomaLocalStorage();

    const start = async function() {

        Promise.all([getContenido(), getCursos(), getPortfolio()])
               .then(arr => {
                    content = arr[0];
                    cursos =  arr[1];
                    portfolio = arr[2];
                    cargarSecciones(idioma, content);
                    cargarImagenBackground();
               });
        
    };
      
    start();

});


