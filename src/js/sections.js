import * as myFunctions from './functions.js';

export function cargarSecciones(idioma, allContent) {

    let idLang = myFunctions.getIdLang(idioma);
    let version = myFunctions.getVersionApp();

    showLoading(idLang, allContent);

    // Menu
    showMenuSection(idLang, allContent);

    // Header
    showHeaderSection(idioma, allContent);
    setTimeout(function() {
        $('.fa.fa-chevron-circle-down').removeClass("hidden").hide().fadeIn(50);
    }, 50);

    // About
    $.ajax({
            url: '../src/sections/about.html?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#about').html(respuesta);
                showAboutSection(idioma, allContent);
            }
    });

    // Educacion
    $.ajax({
        url: '../src/sections/education.html?v='+version+'&lang='+idioma,
        success: function(respuesta) {
            $('#education').html(respuesta);
            showEducationSection(idioma, allContent);
            showCursos(idioma, allContent.cursos);
        }
    });

    // Trabajo
    $.ajax({
        url: '../src/sections/work.html?v='+version+'&lang='+idioma,
        success: function(respuesta) {
            $('#work').html(respuesta);
            showWorkSection(idioma, allContent);
        }
    });

    // Docencia
    $.ajax({
        url: '../src/sections/docencia.html?v='+version+'&lang='+idioma,
        success: function(respuesta) {
            $('#docencia').html(respuesta);
            showDocenciaSection(idioma, allContent);
        }
    });

    // Skills
    $.ajax({
        url: '../src/sections/skills.html?v='+version+'&lang='+idioma,
        success: function(respuesta) {
            var current_section = $("#nav li.current").text();

            $('#skills').html(respuesta);
            showSkillsSection(idioma, allContent);

            if(current_section==="Skills") {
                $('.bar-expand').removeClass('progress').addClass('progress');
            }
        }
    });

    // Portfolio
    $.ajax({
        url: '../src/sections/portfolio.html?v='+version+'&lang='+idioma,
        success: function(respuesta) {
            $('#portfolio').html(respuesta);
            showPortfolioSection(idioma, allContent.portfolio);
        }
    });

    
}

export function cambiarIdioma(idioma, allContent) {

    const idiomaLocalStorage = myFunctions.getIdiomaLocalStorage();

    if(idiomaLocalStorage !== idioma) {
        localStorage.setItem('lang', idioma);
    }

    let idLang = myFunctions.getIdLang(idioma);

    // Loading
    showLoading(idLang, allContent);
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
    let idLang = myFunctions.getIdLang(idioma);
    $("#loading").text(allContent.content.loading[idLang]);
}

export function showMenuSection(idioma, allContent) {

    let idLang = myFunctions.getIdLang(idioma);

    $('#link-home').html(allContent.content.menu.inicio[idLang]).hide().fadeIn(1000);
    $('#link-acerca').html(allContent.content.menu.acerca[idLang]).hide().fadeIn(1000);
    $('#link-education').html(allContent.content.menu.educacion[idLang]).hide().fadeIn(1000);
    $('#link-work').html(allContent.content.menu.trabajo[idLang]).hide().fadeIn(1000);
    $('#link-skills').html(allContent.content.menu.skills[idLang]).hide().fadeIn(1000);
    $('#link-portfolio').html(allContent.content.menu.portfolio[idLang]).hide().fadeIn(1000);
    $('#lang').html(allContent.content.menu.idioma[idLang]).hide().fadeIn(1000);
}

export function showHeaderSection(idioma, allContent) {
    let idLang = myFunctions.getIdLang(idioma);

    $("#content-header").hide();

    $("#header1").text(allContent.content.header1[idLang]);
    $("#header2").text(allContent.content.header2[idLang]);
    $("#headerAnios").text(myFunctions.getExperiencia(idLang));

    $("#content-header").fadeIn(1000);
}

export function showAboutSection(idioma, allContent) {

    let idLang = myFunctions.getIdLang(idioma);
    
    $("#aboutTitulo").text(allContent.content.aboutTitulo[idLang]).hide().fadeIn(1000);
    $("#aboutParrafo").text(allContent.content.aboutParrafo[idLang]).hide().fadeIn(1000);
    $("#aboutContacto").text(allContent.content.aboutContacto[idLang]).hide().fadeIn(1000);
    $("#aboutLinks").hide().fadeIn(1000);
}

export function showEducationSection(idioma, allContent) {
    
    let idLang = myFunctions.getIdLang(idioma);

    $('#education').hide();

    $("#educationTitulo").text(allContent.content.educationTitulo[idLang]);
    $("#educationLicenciado").text(allContent.content.educationLicenciado[idLang]);
    $("#educationTecnicatura").text(allContent.content.educationTecnicatura[idLang]);
    $("#educationPendienteUces").text(allContent.content.educationPendienteUces[idLang]);
    $("#educationCursosTitulo").text(allContent.content.educationCursosTitulo[idLang]);

    $('#education').fadeIn(1000);
}

$('body').on('click', '#cargarMasCursos', function() {
    $('#cursosContentOculto').css('display', 'block');
    $('#cargarMasCursos').remove();
});

export function showCursos(idioma, cursos) {

    let idLang = myFunctions.getIdLang(idioma);
    
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

        if (idLang === 0) {
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

    let idLang = myFunctions.getIdLang(idioma);

    $('#work').hide();

    $("#trabajoTitulo").text(allContent.content.trabajoTitulo[idLang]);
    
    $("#trabajoItLeadSector").text(allContent.content.trabajoItLeadSector[idLang]);
    $("#trabajoItLeadFecha").text(allContent.content.trabajoItLeadFecha[idLang]);
    $("#trabajoItLeadText").text(allContent.content.trabajoItLeadText[idLang]);

    $("#trabajoProjectManagerSector").text(allContent.content.trabajoProjectManagerSector[idLang]);
    $("#trabajoProjectManagerFecha").text(allContent.content.trabajoProjectManagerFecha[idLang]);
    $("#trabajoProjectManagerText").text(allContent.content.trabajoProjectManagerText[idLang]);

    $("#trabajoDesaWebSector").text(allContent.content.trabajoDesaWebSector[idLang]);
    $("#trabajoDesaWebFecha").text(allContent.content.trabajoDesaWebFecha[idLang]);
    $("#trabajoDesaWebText").text(allContent.content.trabajoDesaWebText[idLang]);

    $("#trabajoDesaDeskSector").text(allContent.content.trabajoDesaDeskSector[idLang]);
    $("#trabajoDesaDeskFecha").text(allContent.content.trabajoDesaDeskFecha[idLang]);
    $("#trabajoDesaDeskText").text(allContent.content.trabajoDesaDeskText[idLang]);
    
    $("#trabajoAnalisisSector").text(allContent.content.trabajoAnalisisSector[idLang]);
    $("#trabajoAnalisisFecha").text(allContent.content.trabajoAnalisisFecha[idLang]);
    $("#trabajoAnalisisText").text(allContent.content.trabajoAnalisisText[idLang]);
    
    $("#trabajoFreelanceSector").text(allContent.content.trabajoFreelanceSector[idLang]);
    $("#trabajoFreelanceFecha").text(allContent.content.trabajoFreelanceFecha[idLang]);
    $("#trabajoFreelanceText").text(allContent.content.trabajoFreelanceText[idLang]);

    $('#work').fadeIn(1000);
}

export function showDocenciaSection(idioma, allContent) {

    let idLang = myFunctions.getIdLang(idioma);

    $("#docenciaTitulo").text(allContent.content.docenciaTitulo[idLang]).hide().fadeIn(1000);
    $("#docenciaFecha").text(allContent.content.docenciaFecha[idLang]).hide().fadeIn(1000);
    $("#docenciaText").text(allContent.content.docenciaText[idLang]).hide().fadeIn(1000);
}

export function showSkillsSection(idioma, allContent) {

    let idLang = myFunctions.getIdLang(idioma);

    $("#skillsResponsabilidad").text(allContent.content.skillsResponsabilidad[idLang]).hide().fadeIn(1000);
    $("#skillsProactividad").text(allContent.content.skillsProactividad[idLang]).hide().fadeIn(1000);
    $("#skillsComunicacion").text(allContent.content.skillsComunicacion[idLang]).hide().fadeIn(1000);
    $("#skillsMotivacion").text(allContent.content.skillsMotivacion[idLang]).hide().fadeIn(1000);
    $("#skillsDelegation").text(allContent.content.skillsDelegation[idLang]).hide().fadeIn(1000);
}

$('body').on('click', '#cargarMasPortfolio', function() {
    $('#portfolioContentOculto').css('display', 'block');
    $('#cargarMasPortfolio').remove();
});

export function showPortfolioSection(idioma, portfolio) {

    let idLang = myFunctions.getIdLang(idioma);

    $('#portfolioContentVisible').html('');
    $('#portfolioContentOculto').html('');
    $('#portfolioContentVisible').hide();
    $('#portfolioContentOculto').hide();

    let cantidadItems = 0;

    var nombre;
    var resumen;
    var mostrarMasLink;

    portfolio.forEach(element => {

        switch (idLang) {
            case 0:
                nombre = element.nombre;
                resumen = element.resumen;
                mostrarMasLink = 'Mostrar mas';
                break;

            case 1:
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
    var img1 = document.createElement("img");
    img1.src = "../src/assets/images/home-background/home-background-1.jpg";
    img1.onload = function() {
        $('header').css('background', "url('../src/assets/images/home-background/home-background-1.jpg') no-repeat top center" );
        myFunctions.myFadeFunction();
        $('.loading').css('display', 'none');
    };
}