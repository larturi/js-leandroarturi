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
    }, 50);

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

    $("#educationTitulo").text(allContent.content.educationTitulo[idioma]);
    $("#educationLicenciado").text(allContent.content.educationLicenciado[idioma]);
    $("#educationLicUBA").text(allContent.content.educationLicUBA[idioma]);
    $("#educationLicPeriodo").text(allContent.content.educationLicPeriodo[idioma]);
    $("#educationTecnicatura").text(allContent.content.educationTecnicatura[idioma]);
    $("#educationUCES").text(allContent.content.educationUCES[idioma]);
    $("#educationUCESPeriodo").text(allContent.content.educationUCESPeriodo[idioma]);
    $("#educationPendienteUces").text(allContent.content.educationPendienteUces[idioma]);
    $("#educationCursosTitulo").text(allContent.content.educationCursosTitulo[idioma]);

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

    $("#trabajoTitulo").text(allContent.content.trabajoTitulo[idioma]);
    
    $("#trabajoITLead").text(allContent.content.trabajoITLead[idioma]);
    $("#trabajoItLeadSector").text(allContent.content.trabajoItLeadSector[idioma]);
    $("#trabajoItLeadFecha").text(allContent.content.trabajoItLeadFecha[idioma]);
    $("#trabajoItLeadText").text(allContent.content.trabajoItLeadText[idioma]);

    $("#trabajoPM").text(allContent.content.trabajoPM[idioma]);
    $("#trabajoProjectManagerSector").text(allContent.content.trabajoProjectManagerSector[idioma]);
    $("#trabajoProjectManagerFecha").text(allContent.content.trabajoProjectManagerFecha[idioma]);
    $("#trabajoProjectManagerText").text(allContent.content.trabajoProjectManagerText[idioma]);

    $("#trabajoWebDeveloper").text(allContent.content.trabajoWebDeveloper[idioma]);
    $("#trabajoDesaWebSector").text(allContent.content.trabajoDesaWebSector[idioma]);
    $("#trabajoDesaWebFecha").text(allContent.content.trabajoDesaWebFecha[idioma]);
    $("#trabajoDesaWebText").text(allContent.content.trabajoDesaWebText[idioma]);

    $("#trabajoNet").text(allContent.content.trabajoNet[idioma]);
    $("#trabajoDesaDeskSector").text(allContent.content.trabajoDesaDeskSector[idioma]);
    $("#trabajoDesaDeskFecha").text(allContent.content.trabajoDesaDeskFecha[idioma]);
    $("#trabajoDesaDeskText").text(allContent.content.trabajoDesaDeskText[idioma]);
    
    $("#trabajoFuncional").text(allContent.content.trabajoFuncional[idioma]);
    $("#trabajoAnalisisSector").text(allContent.content.trabajoAnalisisSector[idioma]);
    $("#trabajoAnalisisFecha").text(allContent.content.trabajoAnalisisFecha[idioma]);
    $("#trabajoAnalisisText").text(allContent.content.trabajoAnalisisText[idioma]);
   
    $("#trabajoFreelance").text(allContent.content.trabajoFreelance[idioma]);
    $("#trabajoFreelanceSector").text(allContent.content.trabajoFreelanceSector[idioma]);
    $("#trabajoFreelanceFecha").text(allContent.content.trabajoFreelanceFecha[idioma]);
    $("#trabajoFreelanceText").text(allContent.content.trabajoFreelanceText[idioma]);

    $('#work').fadeIn(1000);
}

export function showDocenciaSection(idioma, allContent) {

    $("#docenciaTitulo").text(allContent.content.docenciaTitulo[idioma]).hide().fadeIn(1000);
    $("#docenciaFecha").text(allContent.content.docenciaFecha[idioma]).hide().fadeIn(1000);
    $("#docenciaText").text(allContent.content.docenciaText[idioma]).hide().fadeIn(1000);
}

export function showSkillsSection(idioma, allContent) {

    $("#skillsTitulo").text(allContent.content.skillsTitulo[idioma]).hide().fadeIn(1000);
    $("#skillsLiderTitle").text(allContent.content.skillsLiderTitle[idioma]).hide().fadeIn(1000);
    $("#skillsWebTitle").text(allContent.content.skillsWebTitle[idioma]).hide().fadeIn(1000);
    $("#skillsDBTitle").text(allContent.content.skillsDBTitle[idioma]).hide().fadeIn(1000);
    $("#skillsDeskTitle").text(allContent.content.skillsDeskTitle[idioma]).hide().fadeIn(1000);
    $("#skillsMobileTitle").text(allContent.content.skillsMobileTitle[idioma]).hide().fadeIn(1000);
    $("#skillsOtrosTitle").text(allContent.content.skillsOtrosTitle[idioma]).hide().fadeIn(1000);
    $("#skillsResponsabilidad").text(allContent.content.skillsResponsabilidad[idioma]).hide().fadeIn(1000);
    $("#skillsProactividad").text(allContent.content.skillsProactividad[idioma]).hide().fadeIn(1000);
    $("#skillsComunicacion").text(allContent.content.skillsComunicacion[idioma]).hide().fadeIn(1000);
    $("#skillsMotivacion").text(allContent.content.skillsMotivacion[idioma]).hide().fadeIn(1000);
    $("#skillsDelegation").text(allContent.content.skillsDelegation[idioma]).hide().fadeIn(1000);
    $("#skillsAgile").text(allContent.content.skillsAgile[idioma]).hide().fadeIn(1000);
    $("#skillsHtml").text(allContent.content.skillsHtml[idioma]).hide().fadeIn(1000);
    $("#skillsCss").text(allContent.content.skillsCss[idioma]).hide().fadeIn(1000);
    $("#skillsJs").text(allContent.content.skillsJs[idioma]).hide().fadeIn(1000);
    $("#skillsJquery").text(allContent.content.skillsJquery[idioma]).hide().fadeIn(1000);
    $("#skillsPhp").text(allContent.content.skillsPhp[idioma]).hide().fadeIn(1000);
    $("#skillsLaravel").text(allContent.content.skillsLaravel[idioma]).hide().fadeIn(1000);
    $("#skillsAngular").text(allContent.content.skillsAngular[idioma]).hide().fadeIn(1000);
    $("#skillsNode").text(allContent.content.skillsNode[idioma]).hide().fadeIn(1000);
    $("#skillsMySql").text(allContent.content.skillsMySql[idioma]).hide().fadeIn(1000);
    $("#skillsOracle").text(allContent.content.skillsOracle[idioma]).hide().fadeIn(1000);
    $("#skillsSqlServer").text(allContent.content.skillsSqlServer[idioma]).hide().fadeIn(1000);
    $("#skillsVb").text(allContent.content.skillsVb[idioma]).hide().fadeIn(1000);
    $("#skillsVbNet").text(allContent.content.skillsVbNet[idioma]).hide().fadeIn(1000);
    $("#skillsC").text(allContent.content.skillsC[idioma]).hide().fadeIn(1000);
    $("#skillsJava").text(allContent.content.skillsJava[idioma]).hide().fadeIn(1000);
    $("#skillsAndroid").text(allContent.content.skillsAndroid[idioma]).hide().fadeIn(1000);
    $("#skillsIonic").text(allContent.content.skillsIonic[idioma]).hide().fadeIn(1000);
    $("#skillsGit").text(allContent.content.skillsGit[idioma]).hide().fadeIn(1000);
    $("#skillsVisio").text(allContent.content.skillsVisio[idioma]).hide().fadeIn(1000);
    $("#skillsJira").text(allContent.content.skillsJira[idioma]).hide().fadeIn(1000);
    $("#skillsDocker").text(allContent.content.skillsDocker[idioma]).hide().fadeIn(1000);
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
    var img1 = document.createElement("img");
    img1.src = "../src/assets/images/home-background/home-background-1.jpg";
    img1.onload = function() {
        $('header').css('background', "url('../src/assets/images/home-background/home-background-1.jpg') no-repeat top center" );
        myFunctions.myFadeFunction();
        $('.loading').css('display', 'none');
    };
}