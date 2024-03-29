import * as myFunctions from './functions.js';
import { loadAllSections, fixClearSelectedMenu } from './init.js';

export function cargarLanding(idioma, landingContent) {

    let version = myFunctions.getVersionApp();

    showLoading(idioma, landingContent);

    // Menu
    showMenuSection(idioma, landingContent);

    // Header
    showHeaderSection(idioma, landingContent);
    
}

export function cargarSecciones(idioma, allContent) {

    let version = myFunctions.getVersionApp();

    // About
    showAboutSection(idioma, allContent);

    // Educacion
    showEducationSection(idioma, allContent);
    showCursos(idioma, allContent.cursos);

    // Trabajo
    showWorkSection(idioma, allContent);

    // Docencia
    showDocenciaSection(idioma, allContent);

    // Skills
    showSkillsSection(idioma, allContent);

    // Portfolio
    showPortfolioSection(idioma, allContent.portfolio);

    // Footer
    let anio = new Date().getFullYear();
    $('#footerYear').html(anio);
    
}

export function cambiarIdioma(idioma, allContent) {

    let countChangesLanguage = localStorage.getItem('countChangesLanguage');
    
    if(allContent.length === 0 || allContent.length === 'undefined') {
        loadAllSections();
    } else {
        localStorage.setItem('countChangesLanguage', Number(countChangesLanguage) + 1);
    }


    fixClearSelectedMenu();

    const idiomaLocalStorage = myFunctions.getIdiomaLocalStorage();
    
    if(idiomaLocalStorage !== idioma) {
        localStorage.setItem('lang', idioma);
    }
}

export function showLoading(idioma, allContent) {
    $("#loading").text(allContent.loading[idioma]);
}

export function showMenuSection(idioma, allContent) {
    $('#link-home').html(allContent.menu.inicio[idioma]).hide().fadeIn(300);
    $('#link-acerca').html(allContent.menu.acerca[idioma]).hide().fadeIn(300);
    $('#link-education').html(allContent.menu.educacion[idioma]).hide().fadeIn(300);
    $('#link-work').html(allContent.menu.trabajo[idioma]).hide().fadeIn(300);
    $('#link-skills').html(allContent.menu.skills[idioma]).hide().fadeIn(300);
    $('#link-portfolio').html(allContent.menu.portfolio[idioma]).hide().fadeIn(300);
    $('#lang').html(allContent.menu.idioma[idioma]).hide().fadeIn(300);
}

export function showHeaderSection(idioma, allContent) {

    $("#content-header").hide();

    $("#header1").text(allContent.header1[idioma]);
    $("#header2").text(allContent.header2[idioma]);
    $("#header3").text(allContent.header3[idioma]);
    $("#showAllSections").text(allContent.header4[idioma]);
    $("#headerAnios").text(myFunctions.getExperiencia(idioma));

    $("#content-header").fadeIn(200);

    $(".landing-github").hide().slideDown('normal');
    $(".landing-linkedin").hide().slideDown('normal');
    $(".landing-twitter").hide().slideDown('normal');

}

export function showAboutSection(idioma, allContent) {
    
    $("#aboutTitulo").text(allContent.content.aboutTitulo[idioma]).hide().fadeIn(300);
    $("#aboutParrafo").text(allContent.content.aboutParrafo[idioma]).hide().fadeIn(300);
    $("#aboutContacto").text(allContent.content.aboutContacto[idioma]).hide().fadeIn(300);
    $("#aboutLinks").hide().fadeIn(300);
}

export function showEducationSection(idioma, allContent) {
    
    $('#education').hide();

    Object.entries(allContent.content.education).forEach(entry => {
        const [key, value] = entry;
        $("#" + key).text(value[idioma]).hide().fadeIn(300);
    });

    $('#education').fadeIn(300);
}

export function showCursos(idioma, cursos) {
    
    var tituloCurso;
    var nombreCurso;
    let cantidadItems = 0;
    var mostrarMasLink = '';

    $('#cursosContentVisible').html('');
    $('#cursosContentOculto').html('');
    $('#cursosContentVisible').hide();
    $('#cursosContentOculto').hide();

    cursos.forEach(element => {

        cantidadItems++;

        if (idioma === 'es') {
            nombreCurso = element.nombre;
            mostrarMasLink = 'Mostrar mas';
        } else {
            nombreCurso = element.name;
            mostrarMasLink = 'Show more';
        }

        if(element.url.length > 1) {
            tituloCurso = `<a href="${element.url}" target="_blank" rel="noreferrer">
                                <h2><i class="${element.logo}"></i> ${nombreCurso}</h2>
                            </a>`;
        } else {
            tituloCurso = `<h2>${nombreCurso}</h2>`;
        }

        let tecnologias = '';
        element.tecnologias.forEach(tecnologia => {
            tecnologias = tecnologias + '<span class="badge badge-secondary">#' + tecnologia + '</span>';
        });

        if (cantidadItems <= 10) {
            $('#cursosContentVisible').append(`
                <div class="row item">
                    <div class="twelve columns"> ${tituloCurso}
                        <p class="detalle-cursos">
                                <em class="detalle-cursos-em">${element.anio} • ${element.horas}h • ${element.institucion}</em>
                                <br/>
                        </p>
                        <div class="cursos-tecnologias">${tecnologias}</div>
                    </div>
                </div>
            `);
        } else {
            $('#cursosContentOculto').append(`
                <div class="row item">
                    <div class="twelve columns"> ${tituloCurso}
                        <p class="detalle-cursos">
                                <em class="detalle-cursos-em">${element.anio} • ${element.horas}h • ${element.institucion}</em>
                                <br/>
                        </p>
                        <div class="cursos-tecnologias">${tecnologias}</div>
                    </div>
                </div>
            `);
        }    


    });

    if ($('#cargarMasCursos').length > 0) {
        $('#cargarMasCursos').remove();
    }

    $('#cursosContentMostrarMas').append(`
        <div>
            <a href="#" id="cargarMasCursos" style="cursor: pointer;">${mostrarMasLink}</a>
        </div>
    `);

    $('#cursosContentVisible').fadeIn(300);


}

export function showWorkSection(idioma, allContent) {

    $('#trabajos').html('');
    $('#work').hide();

    $('#trabajoTitulo').text(allContent.content.work.trabajoTitulo[idioma]);

    allContent.content.work.trabajos.forEach( trabajo => {

        let tecnologias = '';
        trabajo.tecnologias.forEach(tecnologia => {
            tecnologias = tecnologias + '<span class="badge badge-white">#' + tecnologia + '</span>';
        });

        $('#trabajos').append(`
            <div class="row item">
                <div class="twelve columns">
                    <h2>${trabajo.titulo[idioma]}</h2>
                    <p class="info">
                        <span>${trabajo.sector[idioma]}</span><br />
                        <span>${trabajo.fechas[idioma]}</span><br />
                    </p>
                    <p class="trabajo-detalle">${trabajo.detalle[idioma]}</p>
                    <p>${tecnologias}</p>
                </div>
            </div>
        `);

    });

    $('#work').fadeIn(300);
    
}

export function showDocenciaSection(idioma, allContent) {
    Object.entries(allContent.content.docencia).forEach(entry => {
        const [key, value] = entry;
        $("#" + key).text(value[idioma]).hide().fadeIn(300);
    });
}

export function showSkillsSection(idioma, allContent) {
    Object.entries(allContent.content.skills).forEach(entry => {
        const [key, value] = entry;
        $("#" + key).html(value[idioma]).hide().fadeIn(300);
    });
}

export function showPortfolioSection(idioma, portfolio) {

    $("#portfolioTitle").text('Portfolio').hide().fadeIn(300);

    $('#portfolioContentVisible').html('');
    $('#portfolioContentOculto').html('');
    $('#portfolioContentVisible').hide();
    $('#portfolioContentOculto').hide();

    let cantidadItems = 0;

    var nombre;
    var resumen;
    var mostrarMasLink;

    portfolio.forEach(element => {

        switch (idioma) {
            case 'es':
                nombre = element.nombre;
                resumen = element.resumen;
                mostrarMasLink = 'Mostrar mas';
                break;

            case 'en':
                nombre = element.name;
                resumen = element.summary;
                mostrarMasLink = 'Show more';
                break;
        }

        cantidadItems++;

        let tecnologias = '';
        element.tecnologias.forEach(tecnologia => {
            tecnologias = tecnologias + '<span class="badge badge-secondary">#' + tecnologia + '</span>';
        });

        if (cantidadItems <= 10) {
            $('#portfolioContentVisible').append(`
                <div class="row">
                    <div class="twelve columns">
                        <h2 class="titulo-portfolio-item">
                            <a href="${element.url}" target="_blank" rel="noreferrer">${nombre}</a>
                        </h2>
                        <p class="portfolio-item">${resumen}</p>
                        <div class="portfolio-tecnologias">${tecnologias}</div>
                    </div>
                </div>
            `);
        } else {
            $('#portfolioContentOculto').append(`
                <div class="row">
                    <div class="twelve columns">
                        <h2 class="titulo-portfolio-item">
                            <a href="${element.url}" target="_blank" rel="noreferrer">${nombre}</a>
                        </h2>
                        <p class="portfolio-item">${resumen}</p>
                        <div class="portfolio-tecnologias">${tecnologias}</div>
                    </div>
                </div>
            `);
        }

        
    }); 

    if ($('#cargarMasPortfolio').length > 0) {
        $('#cargarMasPortfolio').remove();
    }

    $('#portfolioContent').append(`
        <div>
            <a href="#" id="cargarMasPortfolio" style="cursor: pointer;">${mostrarMasLink}</a>
        </div>
    `);

    $('#portfolioContentVisible').fadeIn(300);

}

export function hideLoadingMsg() {
    $('.loading').css('display', 'none');
}