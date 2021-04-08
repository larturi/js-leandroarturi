import * as mySections from './sections';
import * as myFunctions from './functions.js';
import * as myContent from './content';

import '../css/media-queries.css';

let allContent = [];
let landingContent = [];
let content = {};
let portfolio = [];
let cursos = [];

const links = document.querySelectorAll('.li-menu-item');
const sections = document.querySelectorAll('section');
localStorage.setItem('cargarSkillsBars', "false");

jQuery(document).ready(function($) {

    $('body').on('click', '#cargarMasCursos', function(event) {
        event.preventDefault();
        $('#cursosContentOculto').css('display', 'block');
        $('#cargarMasCursos').remove();
    });

    $('body').on('click', '#cargarMasPortfolio', function(event) {
        event.preventDefault();
        $('#portfolioContentOculto').css('display', 'block');
        $('#cargarMasPortfolio').remove();
    });

    $('#menu-oculto').on('click', function(event) {
        //event.preventDefault();
        let section = localStorage.getItem('section');
        $('#menu-oculto').attr("href", section);
    });

    // ==============================================================
    // Handle Scrolling
    // ==============================================================
    function validateAndShowAllSections() {
        if (allContent.length === 0) {
            setTimeout(() => {
                $('#showAllSections').click();
            }, 1);
        }
        return false;
    }

    document.addEventListener("wheel", function () {
        validateAndShowAllSections();
    }, true);

    document.addEventListener("keydown", function () {
        validateAndShowAllSections();
        return false;
    }, true);

    window.addEventListener('scroll', () => {
        changeLinkState();
    })

    $('#showAllSections').on('click', function(e) {
        e.preventDefault();

        if (!allContent) {
            loadAllSections();
        }
    });

    // ==============================================================
    // Al hacer clic en un elemento, actualizo hash de la url
    // ==============================================================
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();

        loadAllSections();

        var target = this.hash;
        
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing', function() {
            window.location.hash = target;
            localStorage.setItem('section', target);
        });
    });
    

    // ==============================================================
    // Highlight the current section in the navigation bar
    // ==============================================================

    function changeLinkState() {
        let index = sections.length;
      
        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        links.forEach((link) => link.classList.remove('current'));

        if(links[index]) {
            links[index].classList.add('current');
        }

        // Recargo las barras de skils cuando pasa por esa seccion
        if(index===4 && localStorage.getItem('cargarSkillsBars') === "false") {
            localStorage.setItem('cargarSkillsBars', "true");

            $('.bar-expand').removeClass('progress');
            setTimeout(() => {
                $('.bar-expand').addClass('progress');
            }, 100);
        } 

        if (index !== 4) {
            localStorage.setItem('cargarSkillsBars', "false");
        }

      }
      
    // ==============================================================
    // Assets
    // ==============================================================
    $('#profile-pic').attr('src', '..' + global.rootDir + '/src/assets/images/profilephoto.jpg');

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
    $('#lang').click( async function(e) {

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

        await start();
        loadAllSections();

        mySections.cambiarIdioma(idioma, allContent);

        buttonMenu.click();
        $(this).attr("href", current_section);

    });

});

export const start = async function() {

    Promise.all([
        myContent.getLanding()
      ])
    .then(arr => {
        const idioma = myFunctions.getIdiomaLocalStorage();
        landingContent = arr[0];
        mySections.cargarLanding(idioma, landingContent);
        mySections.hideLoadingMsg();
        fixClearSelectedMenu();
    });
        
};

export function fixClearSelectedMenu() {
    const countChangesLanguage = localStorage.getItem('countChangesLanguage');

    if(Number(countChangesLanguage) === 0) {
        $('#menu-portfolio').removeClass("current");
        $('#menu-inicio').addClass("current");
        window.location.hash = '#home';
    }

    localStorage.setItem('countChangesLanguage', Number(countChangesLanguage) + 1);

}

export function loadAllSections() {
    
    $('#about').show();
    $('#education').show();
    $('.education').show();
    $('#cursosDivTitulo').show();
    $('#cursosContent').show();
    $('.seccion-profile').show();
    $('#docencia').show();
    $('#skills').show();

    // Delay para que no se vaya hasta abajo y suba
    setTimeout(() => {
        $('#portfolio').show();
        $('#footer').show();
    }, 300);
    

    Promise.all([
                  myContent.getContenido(), 
                  myContent.getCursos(), 
                  myContent.getPortfolio()
                ])
            .then(arr => {
                const idioma = myFunctions.getIdiomaLocalStorage();
                content = arr[0];
                cursos =  arr[1];
                portfolio = arr[2];
                allContent = {content, cursos, portfolio};
                mySections.cargarSecciones(idioma, allContent);
                mySections.hideLoadingMsg();
            });

}
