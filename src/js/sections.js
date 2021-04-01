import * as myFunctions from './functions.js';

export function cargarSecciones(idioma, allContent) {

    let version = myFunctions.getVersionApp();

    showLoading(idioma, allContent);

    // Menu
    showMenuSection(idioma, allContent);

    // Header
    showHeaderSection(idioma, allContent);
    setTimeout(function() {
        $('.fa.fa-chevron-circle-down').removeClass("hidden").hide().fadeIn(50);
    }, 1);

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
    var current_section = $("#nav li.current").text();
    showSkillsSection(idioma, allContent);

    if(current_section==="Skills") {
        $('.bar-expand').removeClass('progress').addClass('progress');
    }

    // Portfolio
    showPortfolioSection(idioma, allContent.portfolio);

    // Footer
    let anio = new Date().getFullYear();
    $('#footerYear').html(anio);
    
}

export function cambiarIdioma(idioma, allContent) {

    const idiomaLocalStorage = myFunctions.getIdiomaLocalStorage();

    if(idiomaLocalStorage !== idioma) {
        localStorage.setItem('lang', idioma);
    }

    // Loading
    showLoading(idioma, allContent);
    // Menu
    showMenuSection(idioma, allContent);
    // Header
    showHeaderSection(idioma, allContent);
    // About
    showAboutSection(idioma, allContent);
    // Education
    showEducationSection(idioma, allContent);
    // Cursos
    showCursos(idioma, allContent.cursos);
    // Education
    showWorkSection(idioma, allContent);
    // Docencia
    showDocenciaSection(idioma, allContent);
    // Skills
    showSkillsSection(idioma, allContent);
    // Portfolio
    showPortfolioSection(idioma, allContent.portfolio);
}

export function showLoading(idioma, allContent) {
    $("#loading").text(allContent.content.loading[idioma]);
}

export function showMenuSection(idioma, allContent) {

    $('#link-home').html(allContent.content.menu.inicio[idioma]).hide().fadeIn(1000);
    $('#link-acerca').html(allContent.content.menu.acerca[idioma]).hide().fadeIn(1000);
    $('#link-education').html(allContent.content.menu.educacion[idioma]).hide().fadeIn(1000);
    $('#link-work').html(allContent.content.menu.trabajo[idioma]).hide().fadeIn(1000);
    $('#link-skills').html(allContent.content.menu.skills[idioma]).hide().fadeIn(1000);
    $('#link-portfolio').html(allContent.content.menu.portfolio[idioma]).hide().fadeIn(1000);
    $('#lang').html(allContent.content.menu.idioma[idioma]).hide().fadeIn(1000);
}

export function showHeaderSection(idioma, allContent) {

    $("#content-header").hide();

    $("#header1").text(allContent.content.header1[idioma]);
    $("#header2").text(allContent.content.header2[idioma]);
    $("#headerAnios").text(myFunctions.getExperiencia(idioma));

    $("#content-header").fadeIn(1000);
}

export function showAboutSection(idioma, allContent) {
    
    $("#aboutTitulo").text(allContent.content.aboutTitulo[idioma]).hide().fadeIn(1000);
    $("#aboutParrafo").text(allContent.content.aboutParrafo[idioma]).hide().fadeIn(1000);
    $("#aboutContacto").text(allContent.content.aboutContacto[idioma]).hide().fadeIn(1000);
    $("#aboutLinks").hide().fadeIn(1000);
}

export function showEducationSection(idioma, allContent) {
    
    $('#education').hide();

    Object.entries(allContent.content.education).forEach(entry => {
        const [key, value] = entry;
        $("#" + key).text(value[idioma]).hide().fadeIn(1000);
    });

    $('#education').fadeIn(1000);
}

$('body').on('click', '#cargarMasCursos', function() {
    $('#cursosContentOculto').css('display', 'block');
    $('#cargarMasCursos').remove();
});

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
            tituloCurso = `<a href="${element.url}" target="_blank">
                                <h3>${nombreCurso}</h3>
                            </a>`;
        } else {
            tituloCurso = `<h3>${nombreCurso}</h3>`;
        }

        if (cantidadItems <= 10) {
            $('#cursosContentVisible').append(`
                <div class="row item">
                    <div class="twelve columns"> ${tituloCurso}
                        <p class="detalle-cursos">
                                <em class="detalle-cursos-em">${element.anio} • ${element.horas}h • ${element.institucion}</em>
                                <br/>
                        </p>
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
            <a id="cargarMasCursos" style="cursor: pointer;">${mostrarMasLink}</a>
        </div>
    `);

    $('#cursosContentVisible').fadeIn(1000);


}

export function showWorkSection(idioma, allContent) {

    $('#work').hide();

    Object.entries(allContent.content.work).forEach(entry => {
        const [key, value] = entry;
        $("#" + key).text(value[idioma]).hide().fadeIn(1000);
    });

    $('#work').fadeIn(1000);
}

export function showDocenciaSection(idioma, allContent) {

    Object.entries(allContent.content.docencia).forEach(entry => {
        const [key, value] = entry;
        $("#" + key).text(value[idioma]).hide().fadeIn(1000);
    });
}

export function showSkillsSection(idioma, allContent) {
    Object.entries(allContent.content.skills).forEach(entry => {
        const [key, value] = entry;
        $("#" + key).text(value[idioma]).hide().fadeIn(1000);
    });
}

$('body').on('click', '#cargarMasPortfolio', function() {
    $('#portfolioContentOculto').css('display', 'block');
    $('#cargarMasPortfolio').remove();
});

export function showPortfolioSection(idioma, portfolio) {

    $("#portfolioTitle").text('Portfolio').hide().fadeIn(1000);

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

        if (cantidadItems <= 10) {
            $('#portfolioContentVisible').append(`
                <div class="row">
                    <div class="twelve columns">
                    <h3><a href="${element.url}" target="_blank">${nombre}</a></h3>
                        <p class="detalle-cursos">
                            <em class="detalle-cursos-em hash-lenguaje"><span>${element.lenguaje}</em></span><br />
                            ${resumen}
                        </p>
                    </div>
                </div>
            `);
        } else {
            $('#portfolioContentOculto').append(`
                <div class="row">
                    <div class="twelve columns">
                        <h3><a href="${element.url}" target="_blank">${nombre}</a></h3>
                            <p class="detalle-cursos">
                                <em class="detalle-cursos-em hash-lenguaje"><span>${element.lenguaje}</em></span><br />
                                ${resumen}
                            </p>
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
            <a id="cargarMasPortfolio" style="cursor: pointer;">${mostrarMasLink}</a>
        </div>
    `);

    $('#portfolioContentVisible').fadeIn(1000);

}

export function cargarImagenBackground() {
    // Imagen de fondo y opacidad al inicio
    // var img1 = document.createElement("img");
    // img1.src = '..' + global.rootDir + '/src/assets/images/home-background/home-background-1.jpg';
    // img1.onload = function() {
    //     $('header').css('background', "url('.." + global.rootDir + "/src/assets/images/home-background/home-background-1.jpg') no-repeat top center" );
    //     myFunctions.myFadeFunction();
    //     $('.loading').css('display', 'none');
    // };
    $('.loading').css('display', 'none');

}