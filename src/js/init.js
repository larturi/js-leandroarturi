import * as mySections from './sections';
import * as myFunctions from './functions.js';
import * as myContent from './content';

import '../css/media-queries.css';

let allContent = [];
let landingContent = [];
let landing = {};
let content = {};
let portfolio = [];
let cursos = [];

jQuery(document).ready(function($) {

    $('#showAllSections').on('click', function(e) {
        e.preventDefault();

        if (!allContent) {
            loadAllSections();
        }

        $('#menu-acerca').addClass("current");
    });

    // ==============================================================
    // Smooth Scrolling
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
        mySections.cargarImagenBackground();
    });
        
};

export function loadAllSections() {
    
    $('#about').show();
    $('#education').show();
    $('.education').show();
    $('#cursosContent').show();
    $('#cursosContent').show();
    $('.seccion-profile').show();
    $('#docencia').show();
    $('#skills').show();
    $('#portfolio').show();
    $('#footer').show();

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
                mySections.cargarImagenBackground();
            });

}
