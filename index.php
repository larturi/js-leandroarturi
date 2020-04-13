<!DOCTYPE html>
<!--[if lt IE 8 ]><html class="no-js ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="no-js ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 8)|!(IE)]><!-->
<html class="no-js" lang="es"> <!--<![endif]-->
<!--2020-->
    <head>

        <?php define("APPVERSION", "v1.1.1"); ?>

        <?php define("HOMEBACKGROUND", rand(1, 1)); ?>

        <script type="application/ld+json">
        {"@context" : "https://schema.org",
         "@type" : "Organization",  
          "name" : "Leandro Arturi",
          "url" : "https://www.leandroarturi.com", 
          "logo": "https://www.leandroarturi.com/images/profilephoto.jpg" }
        </script>

        <script>
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-43659401-7', 'auto');
            ga('send', 'pageview');

        </script>

        <?php
        include_once('helper.php');
        ?>

        <!--- Basic Page Needs
        ================================================== -->
        <meta charset="utf-8">
        <title>Leandro Arturi</title>
        <meta name="description" content="Leandro Arturi">
        <meta name="author" content="Leandro Arturi">

        <!-- Mobile Specific Metas
        ================================================== -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

        <?php

        switch (HOMEBACKGROUND) {
            case 1:
                ?>
                <meta name="theme-color" content="#24004a" />
                <?php
                break;

            case 2:
                ?>
                <meta name="theme-color" content="#590d4c" />
                <?php
                break;

            case 3:
                ?>
                <meta name="theme-color" content="#244c66" />
                <?php
                break;

            case 4:
                ?>
                <meta name="theme-color" content="#4c4354" />
                <?php
                break;
        }
        ?>

        <!-- CSS
    ================================================== -->
        <link rel="stylesheet" href="css/default.css?<?php echo APPVERSION ?>">
        <link rel="stylesheet" href="css/layout.css?<?php echo APPVERSION ?>">
        <link rel="stylesheet" href="css/media-queries.css?<?php echo APPVERSION ?>">
        <link rel="stylesheet" href="css/magnific-popup.css?">
        <link rel="stylesheet" href="css/font-awesome.min.css">

        <!-- Script
        ================================================== -->
        <script src="js/modernizr.js"></script>

        <!-- Favicons
             ================================================== -->
        <link rel="shortcut icon" href="favicon.ico" >

        <script src='https://www.google.com/recaptcha/api.js'></script>
    </head>

    <body>

        <!-- <div id="cargando">

        </div> -->

        <div id="contenido">

            <!-- Header
            ================================================== -->
            <header id="home" class="class<?php echo HOMEBACKGROUND; ?>">

                <nav id="nav-wrap">

                    <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" class="nav">
                        <li class="current"><a class="smoothscroll" href="#home">Inicio</a></li>
                        <li><a class="smoothscroll" href="#about">Acerca de mi</a></li>
                        <!-- <li><a class="smoothscroll" href="#resume">CV</a></li> -->
                        <li><a class="smoothscroll" href="#portfolio">Portfolio</a></li>
                        <li><a class="smoothscroll" href="#contact">Contacto</a></li>
                    </ul> <!-- end #nav -->



                </nav> <!-- end #nav-wrap -->

                <div class="row banner">
                    <div class="banner-text">
                        <h1 class="responsive-headline">Leandro Arturi</h1>
                        <h3>Soy profesional IT, Licenciado en Sistemas de Informaci&oacute;n con <?php echo getExperiencia(); ?> a&ntilde;os de experiencia en gesti&oacute;n y desarrollo de proyectos de software.
                            He trabajado en desarrollo de aplicaciones web, de escritorio y mobile.
                            Conoc&eacute; mas <a class="smoothscroll" href="#about">acerca de mi</a>.</h3>
                        <hr />
                        <ul class="social">
                            <li><a href="https://ar.linkedin.com/in/leandroarturi" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="https://twitter.com/leandroarturi" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>

                <p class="scrolldown">
                    <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
                </p>


            </header> <!-- Header End -->


            <!-- About Section
            ================================================== -->
            <section id="about">

                <div class="row">

                    <div class="three columns">

                        <img class="profile-pic"  src="images/profilephoto.jpg" alt="" />

                    </div>

                    <div class="nine columns main-col">

                        <h2>Acerca de mi</h2>

                        <p>Licenciado en Sistemas con experiencia en gesti&oacute;n y desarrollo de proyectos de software en diferentes tecnolog&iacute;as. 
                            A lo largo de mi carrera he cumplido diferentes roles, habiendo trabajado como desarrollador, 
                            analista programador, analista t&eacute;cnico funcional y l&iacute;der de proyectos en desarrollo de aplicaciones web, de escritorio y mobile. 
                        </p>

                        <div class="row">

                            <div class="columns contact-details">

                                <h2>Contactar</h2>
                                <p class="address">
                                    <span style="margin-left: 2px;"><i class="fa fa-user"></i></span><span class="item-contacto">Lic. Leandro Arturi</span><br/>
                                   <!--  <span><i class="fa fa-envelope-o"></i></span><span class="item-contacto">lea.arturi@gmail.com</span><br/> -->
                                    <span style="margin-left: 3px;"><i class="fa fa-map-marker"></i></span><span class="item-contacto">Ciudad Aut&oacute;noma de Bs. As</span><br/><br/>
                                    <span style="margin-left: 3px;"><a href="https://twitter.com/leandroarturi" class="twitter-follow-button" data-show-count="false">Follow @leandroarturi</a>
                                        <script>!function(d, s, id) {
                                                var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
                                                if (!d.getElementById(id)) {
                                                    js = d.createElement(s);
                                                    js.id = id;
                                                    js.src = p + '://platform.twitter.com/widgets.js';
                                                    fjs.parentNode.insertBefore(js, fjs);
                                                }
                                            }(document, 'script', 'twitter-wjs');</script></span><br/>
                                </p>

                            </div>

                        </div> <!-- end row -->

                    </div> <!-- end .main-col -->

                </div>

            </section> <!-- About Section End-->


            <!-- Resume Section -->
            <section id="resume">

                <!-- Education -->
                <div class="row education">

                    <div class="three columns header-col">
                        <h1><span>Educaci&oacute;n</span></h1>
                    </div>

                    <div class="nine columns main-col">

                        <div class="row item">

                            <div class="twelve columns">

                                <h3>Licenciatura en Sistemas de Informaci&oacute;n</h3>
                                <p class="info">
                                    <i class="fa iconos-cv fa-suitcase"></i><span>Universidad de Buenos Aires</span><br/> 
                                    <i class="fa iconos-cv fa-calendar"></i><em class="date">2003 - 2009</em>
                                </p>

                                <p>
                                </p>

                            </div>

                        </div> <!-- item end -->

                        <div class="row item">

                            <div class="twelve columns">

                                <h3>Tecnicatura en Programaci&oacute;n de Sistemas</h3>
                                <p class="info">
                                    <i class="fa iconos-cv fa-suitcase"></i><span>Universidad de Ciencias Empresariales y Sociales</span><br/> 
                                    <i class="fa iconos-cv fa-calendar"></i><em class="date">2011 - 2012 (restan cinco materias)</em>
                                </p>
                                <p>
                                </p>

                            </div>

                        </div> <!-- item end -->

                    </div> <!-- main-col end -->

                </div> <!-- End Education -->


                <!-- Cursos -->
                <div class="row education">

                    <div class="three columns header-col">
                        <h1><span>Cursos</span></h1>
                    </div>

                    <div class="nine columns main-col">

                        <div class="row item">
                            <div class="twelve columns">
                                <a href="https://www.udemy.com/certificate/UC-7dd74f29-2397-4f0f-843a-70679b07d8e4/" target="_blank">
                                    <h5>Angular: De cero a experto creando aplicaciones</h5>
                                </a>
                                <p class="detalle-cursos">
                                  <em class="detalle-cursos-em">2020 | 33.5h | Udemy</em>
                                  <br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->


                        <div class="row item">
                            <div class="twelve columns">
                                <a href="https://www.udemy.com/certificate/UC-36f27f2c-aea9-42a2-bebd-4c1a156b7444/" target="_blank">
                                   <h5>Node.js de cero a experto</h5>
                                </a>
                                <p class="detalle-cursos">
                                  <em class="detalle-cursos-em">2020 | 20h | Udemy</em><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <a href="https://www.udemy.com/certificate/UC-d95b9bbc-a8cc-4f59-8bcd-921cfbef140d/" target="_blank">
                                   <h5>GIT+GitHub: Todo un sistema de control de versiones de cero</h5>
                                </a>
                                <p class="detalle-cursos">
                                  <em class="detalle-cursos-em">2020 | 7h | Udemy</em><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->


                        <div class="row item">
                            <div class="twelve columns">
                                <a href="https://www.udemy.com/certificate/UC-08edb55a-cd92-4a36-80a5-f3bb6384d7ac/" target="_blank">
                                   <h5>Scrum Práctico en Proyectos de Software</h5>
                                </a>
                                <p class="detalle-cursos">
                                  <em class="detalle-cursos-em">2020 | 4.5h | Udemy</em><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <a href="https://www.udemy.com/certificate/UC-307cfd40-8e9c-4914-b6b3-9f9c611b4410/" target="_blank">
                                   <h5>Visual Studio Code: Mejora tu velocidad para programar</h5>
                                </a>
                                <p class="detalle-cursos">
                                  <em class="detalle-cursos-em">2020 | 1.5h | Udemy</em><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->
                        

                        <div class="row item">
                            <div class="twelve columns">
                                <a href="https://www.udemy.com/certificate/UC-1O1ERB81/" target="_blank">
                                   <h5>Scrum Master + La Revolución Ágil</h5>
                                </a>
                                <p class="detalle-cursos">
                                  <em class="detalle-cursos-em">2020 | 3h | Udemy</em><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <a href="https://www.udemy.com/certificate/UC-d0b356ad-73e3-4ad6-91bc-c0ce5b7d2dca/" target="_blank">
                                   <h5>Aprende Docker desde Cero a Swarm y Kubernetes</h5>
                                </a>
                                <p class="detalle-cursos">
                                  <em class="detalle-cursos-em">2020 | 11h | Udemy</em><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <a href="https://www.udemy.com/certificate/UC-6b320205-bb1c-46dc-8be4-3353236cccec/" target="_blank">
                                   <h5>Aprende a dominar GIT de cero a experto</h5>
                                </a>
                                <p class="detalle-cursos">
                                  <em class="detalle-cursos-em">2020 | 3h | Udemy</em><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <a href="https://www.udemy.com/certificate/UC-2e0fcccc-6c1a-426d-a6fc-79abda193a3e/" target="_blank">
                                   <h5>UX Design - Conceptos Básicos para principiantes</h5>
                                </a>
                                <p class="detalle-cursos">
                                  <em class="detalle-cursos-em">2020 | 1h | Udemy</em><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <h5>4to Encuentro de la Comunidad Digital AE</h5>
                                <p class="detalle-cursos">
                                   <em class="detalle-cursos-em">2019 | 34h | ONTI</em><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <h5>Los 7 hábitos de las personas altamente efectivas</h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>2018 | 16h | INAP</em></span><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <h5>Programación en Android</h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>2015 | 21h | UTN</em></span><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <h5>Programa de Formación Conducción y Gestión - Liderazgo Activo</h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>2014 | 18h | UBA</em></span><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <h5>Software Publico para el Desarrollo</h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>2013 | 8h | Subsecretaría de Tecnologías de Gestión</em></span><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <h5>Programa de Formación Conducción y Gestión - Liderazgo Activo II</h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>2013 | 18h | UBA</em></span><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <h5>Programa de Formación Conducción y Gestión - Liderazgo Activo</h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>2011 | 40h | UBA</em></span><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                        <div class="row item">
                            <div class="twelve columns">
                                <h5>Curso Programador Web UTN-FRBA</h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>2010 | 72h | UTN</em></span><br/> 
                                </p>
                            </div>
                        </div> <!-- item end --> 

                        <div class="row item">
                            <div class="twelve columns">
                                <h5>Curso Professional Webmaster UTN-FRBA</h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>2010 | 144h | UTN</em></span><br/> 
                                </p>
                            </div>
                        </div> <!-- item end -->

                    </div> <!-- main-col end -->

                </div> <!-- End Education -->


                <!-- Work -->
                <div class="row work">

                    <div class="three columns header-col">
                        <h1><span>Trabajo</span></h1>
                    </div>

                    <div class="nine columns main-col">

                        <div class="row item">

                            <div class="twelve columns">

                                <h3>IT Lead</h3>
                                <p class="info">
                                    <i class="fa iconos-cv fa-suitcase"></i><span>PAMI - Subgerencia de Gesti&oacute;n de la Demanda y An&aacute;lisis</span><br/> 
                                    <i class="fa iconos-cv fa-calendar"></i><em class="date">Septiembre 2015 - Presente</em>
                                </p>
                                <p>
                                  Responsable de 6 departamentos especializados en las diferentes áreas de negocio, 
                                  a través de los cuales se gestiona la cartera de proyectos de desarrollo de la institución. 
                                  Cada uno de mis equipos lidera diferentes proyectos de desarrollo, teniendo a cargo 
                                  la gestión de la demanda de requerimientos, el análisis funcional y su implementación.
                                </p>

                            </div>

                        </div> <!-- item end -->



                        <div class="row item">

                            <div class="twelve columns">

                                <h3>IT Project Manager</h3>
                                <p class="info">
                                    <i class="fa iconos-cv fa-suitcase"></i><span>PAMI - Subgerencia de Desarrollo</span><br/> 
                                    <i class="fa iconos-cv fa-calendar"></i><em class="date">Abril 2014 - Septiembre 2015</em>
                                </p>
                                <p>
                                   Responsable de la coordinación de 7 departamentos de desarrollo 
                                   (PHP, HTML5, JavaScript, JQuery | Oracle). Gestión de la demanda, 
                                   gestión de la capacidad, estimaciones y enlace con Infraestructura. 
                                   Implementación de Jenkins para los despliegues a los diferentes ambientes de 
                                   desarrollo.
                                </p>

                            </div>

                        </div> <!-- item end -->

                        <div class="row item">

                            <div class="twelve columns">

                                <h3>Web Developer Technical Lead</h3>
                                <p class="info">
                                    <i class="fa iconos-cv fa-suitcase"></i><span>PAMI - Departamento Desarrollo Web</span><br/> 
                                    <i class="fa iconos-cv fa-calendar"></i><em class="date">Julio 2012 - Abril 2014</em>
                                </p>

                                <p>
                                    Líder Técnico del Departamento Desarrollo Web en la Coordinación de Sistemas, 
                                    a cargo de un equipo de 7 desarrolladores. Análisis técnico, diseño, 
                                    desarrollo y mantenimiento de sistemas de información (PHP, HTML5, 
                                    JavaScript, JQuery | Oracle). Desarrollo e implementación de una solución 
                                    Single Sign On que permitió integrar ~40 sistemas que se encontraban 
                                    dispersos (CUP - Clave Única Pami). Desarrollo de un checksystem para 
                                    monitorear la salud de los sistemas.
                                </p>

                            </div>

                        </div> <!-- item end -->

                        <div class="row item">

                            <div class="twelve columns">

                                <h3>Technical Lead .NET</h3>
                                <p class="info">
                                    <i class="fa iconos-cv fa-suitcase"></i><span>PAMI - Divisi&oacute;n Desarrollo de Aplicaciones y Soporte Inform&aacute;tico</span><br/> 
                                    <i class="fa iconos-cv fa-calendar"></i><em class="date">Abril 2008 - Julio 2012</em>
                                </p>

                                <p>
                                    Líder técnico de un equipo de 4 desarrolladores. Análisis, diseño, 
                                    desarrollo y mantenimiento de más de 30 sistemas de información y 
                                    aplicaciones (Visual Basic .NET, C#, PHP, VB 6.0, VBA, | Oracle, 
                                    SQL Server y MySql).
                                </p>

                            </div>

                        </div> <!-- item end -->

                        <div class="row item">

                            <div class="twelve columns">

                                <h3>Technical Lead Visual Basic</h3>
                                <p class="info">
                                    <i class="fa iconos-cv fa-suitcase"></i><span>PAMI - Divisi&oacute;n An&aacute;lisis Funcional</span><br/> 
                                    <i class="fa iconos-cv fa-calendar"></i><em class="date">Noviembre 2007 - Abril 2008</em>
                                </p>

                                <p>
                                    Líder de un equipo de 4 analistas. Implementación del módulo de 
                                    distribución de cápitas del Sistema Interactivo de Información (SII) 
                                    en todo el país. Análisis de información con los sistemas gestores de 
                                    bases de datos Oracle y SQL Server.
                                </p>

                            </div>

                        </div> <!-- item end -->

                        <div class="row item">

                            <div class="twelve columns">

                                <h3>Desarrollador Freelance</h3>
                                <p class="info">
                                    <i class="fa iconos-cv fa-suitcase"></i><span>Desarrollo Web, Android y .Net</span><br/> 
                                    <i class="fa iconos-cv fa-calendar"></i><em class="date">Marzo 2010 - Presente</em>
                                </p>

                                <p>
                                    He trabajado en diversos desarrollos independientes y para terceros en las tecnolog&iacute;as mencionadas.
                                </p>

                            </div>

                        </div> <!-- item end -->

                    </div> <!-- main-col end -->

                </div> <!-- End Work -->


                <!-- Docencia -->
                <div class="row work">

                    <div class="three columns header-col">
                        <h1><span>Docencia</span></h1>
                    </div>

                    <div class="nine columns main-col">

                        <div class="row item">
                            <div class="twelve columns">
                                <h3>Universidad de Buenos Aires</h3>

                                <p class="info">
                                    <i class="fa iconos-cv fa-calendar"></i><em class="date">Marzo de 2007 – Diciembre de 2012</em><br/> 
                                    <i class="fa iconos-cv fa-clock-o"></i><em class="date">5 a&ntilde;os y 10 meses</em>
                                </p>


                                <p>Fui Auxiliar Docente de las materias Construcci&oacute;n de Aplicaciones Inform&aacute;ticas, An&aacute;lisis Num&eacute;rico, Estad&iacute;stica II y
                                    Administraci&oacute;n General en la Facultad de Ciencias Econ&oacute;micas de la UBA durante m&aacute;s de cinco a&ntilde;os.</p>
                            </div>
                        </div> <!-- item end -->

                    </div> <!-- main-col end -->

                </div> <!-- End Docencia -->


                <!-- Skills -->
                <div class="row work">

                    <div class="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div class="nine columns main-col">

                        <div class="bars">

                        <h5 class="mb-5 color-dark">DESARROLLO WEB</h5>
                            <ul class="skills">
                                <li><span class="bar-expand noventa"></span><em>Php</em></li>
                                <li><span class="bar-expand setentaycinco"></span><em>Laravel</em></li>
                                <li><span class="bar-expand ochenta"></span><em>Html</em></li>
                                <li><span class="bar-expand setentaycinco"></span><em>Css</em></li>
                                <li><span class="bar-expand ochenta"></span><em>JavaScript</em></li>
                                <li><span class="bar-expand setenta"></span><em>jQuery</em></li>
                                <li><span class="bar-expand setentaycinco"></span><em>Angular</em></li>
                                <li><span class="bar-expand setenta"></span><em>Node</em></li>
                            </ul>

                        <h5 class="mb-5 color-dark">DESARROLLO DESKTOP</h5>
                            <ul class="skills">
                                <li><span class="bar-expand noventa"></span><em>Visual Basic</em></li>
                                <li><span class="bar-expand ochenta"></span><em>Visual Basic .Net </em></li>
                                <li><span class="bar-expand setentaycinco"></span><em>C#</em></li>
                                <li><span class="bar-expand setenta"></span><em>C</em></li>
                                <li><span class="bar-expand setenta"></span><em>C++</em></li>
                                <li><span class="bar-expand cincuentaycinco"></span><em>Java</em></li>
                            </ul>

                        <h5 class="mb-5 color-dark">DESARROLLO MOBILE</h5>
                            <ul class="skills">
                                <li><span class="bar-expand sesenta"></span><em>Android Sdk</em></li>
                                <li><span class="bar-expand cincuentaycinco"></span><em>Ionic</em></li>
                            </ul>   
                        
                        <h5 class="mb-5 color-dark">BASES DE DATOS</h5>
                            <ul class="skills">
                                <li><span class="bar-expand noventa"></span><em>Oracle</em></li>
                                <li><span class="bar-expand ochenta"></span><em>Sql Server</em></li>
                                <li><span class="bar-expand ochenta"></span><em>MySql</em></li>
                            </ul>

                        <h5 class="mb-5 color-dark">OTROS SKILLS</h5>
                            <ul class="skills">
                                <li><span class="bar-expand setenta"></span><em>Git</em></li>
                                <li><span class="bar-expand noventa"></span><em>Visio / Office / Project</em></li>
                                <li><span class="bar-expand noventa"></span><em>Jira / Trello</em></li>
                                <li><span class="bar-expand cincuentaycinco"></span><em>Docker / Jenkins / Gitlab</em></li>
                            </ul>    

                        </div><!-- end skill-bars -->

                    </div> <!-- nine columns -->

                </div> <!-- End Skills -->


                <!-- Portfolio -->

                <section id="portfolio">

                <div class="row work">

                    <div class="three columns header-col">
                        <h1><span>Portfolio</span></h1>
                    </div>

                    <div class="nine columns main-col">

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="http://www.projectsapps.com/sixhattest/el-test-de-los-seis-sombreros.php" target="_blank">El Test de los Seis Sombreros</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Php</em></span><br/> 
                                Aplicaci&oacute;n Web que permite realizar el Test de los Seis Sombreros de Edward De Bono.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="http://www.famososentwitter.com/" target="_blank">Famosos en Twitter</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Php</em></span><br/> 
                                P&aacute;gina Web que consume el servicio de Twitter y muestra los tweets mas 
                                relevantes de las cuentas mas famosas en forma de noticias.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="https://apkpure.com/es/mi-pami/com.mipami.larturi.mipami" target="_blank">Mi Pami</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Mobile | Android SDK</em></span><br/> 
                                Aplicación para dispositivos Android que muestra las Agencias y Farmacias 
                                con cobertura PAMI mas cercanas. (No productivo).
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="http://projectsapps.com/hoyjugamos/public" target="_blank">HoyJugamos</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Php | Laravel</em></span><br/> 
                                Web App social que permite organizar partidos de fútbol.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="http://www.diseta.com.ar" target="_blank">Diseta</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Php</em></span><br/>
                                Sitio oficial de Diseta.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="http://laboratorioequis.com.ar/" target="_blank">Laboratorio Equis</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Php</em></span><br/> 
                                Sitio oficial de Laboratorio Equis, diagnóstico veterinario.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="http://projectsapps.com/triviaseries/trivia_series.php" target="_blank">Trivia Series</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Php</em></span><br/>
                                Trivia para poner a prueba tus conocimientos de Series de TV.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="http://programmerday.projectsapps.com/" target="_blank">Programmer Day</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Php</em></span><br/>
                                Sitio dedicado a los colegas programadores para recordar 
                                su d&iacute;a cada a&ntilde;o.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="https://www.leandroarturi.com/demo/firechat/" target="_blank">Chat Socket</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Angular | Firebase</em></span><br/>
                                Chat en Angular y Firebase con login por Google y Twitter
                                 (Curso Fernando Herrera Udemy).
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="https://www.leandroarturi.com/demo/goty/#/inicio" target="_blank">Game of the Year</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Angular | Firebase</em></span><br/>
                                Permite hacer la votación y muestra en tiempo real la gráfica 
                                de resultados (Curso Fernando Herrera Udemy).
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="https://www.leandroarturi.com/demo/spotiapp/#/home" target="_blank">SpotyApp</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Angular | Spotify Api</em></span><br/>
                                App que se conecta a la api de Spotify y muestra algunas listas del 
                                momento. También tiene un buscardor de artistas que lista las 
                                canciones mas populares (Curso Fernando Herrera Udemy).
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="https://www.leandroarturi.com/demo/upload-images/#/carga" target="_blank">Upload de fotos con Angular y Firebase</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Angular | Node | Firebase</em></span><br/>
                                Upload de fotos drag and drop con Angular y Firebase (Curso Fernando 
                                Herrera Udemy).
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="https://play.google.com/store/apps/details?id=com.larturi.calculadoraviajeroargento" target="_blank">Calculadora del Viajero</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Mobile | Android SDK</em></span><br/> 
                                Calculadora para dispositivos Android que permite configurar de manera sencilla el tipo de cambio y el porcentaje de percepción de 
                                impuestos para luego calcular el importe en pesos de una compra (2015).
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="http://maschefacts.projectsapps.com/" target="_blank">Los Mejores Maschefacts</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Php</em></span><br/>
                                Sitio homenaje a Javier Mascherano luego de las conocidas 
                                repercusiones en las redes sociales tras su destacada 
                                participaci&oacute;n en la copa del mundo 2014.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="http://chistescodificados.projectsapps.com/" target="_blank">Chistes Codificados</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | Php</em></span><br/> 
                                Sitio Web de chistes.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="twelve columns">
                                <h5><a href="http://projectsapps.com/visiontest/" target="_blank">The Vision Test</a></h5>
                                <p class="detalle-cursos">
                                <em class="detalle-cursos-em"><span>Web Development | JavaScript</em></span><br/>
                                Juego desarrollado en Javascript que pone a prueba la rapidez visual del jugador.
                                </p>
                            </div>
                        </div>

                        

                    </div> <!-- nine columns -->

                </div> <!-- End Portfolio -->

             </section> <!-- Portfolio Section End-->
                

            </section> <!-- Resume Section End-->



            <!-- Contact Section
            ================================================== -->
            <section id="contact">

                <div class="row section-head">

                    <div class="two columns header-col">

                        <h1><span>Contactame</span></h1>

                    </div>

                    <div class="ten columns">

                        <p style="margin-top: 20px;color:#C5C4C4;" class="lead">Por favor, completa el siguiente formulario para contactarme
                        </p>

                    </div>

                </div>

                <div class="row">

                    <div class="eight columns">

                        <!-- form -->
                        <form action="#" method="post" id="contactForm" name="contactForm">
                            <fieldset>

                                <div>
                                    <label for="contactName">Nombre <span class="required">*</span></label>
                                    <input type="text" value="" size="35" id="contactName" name="contactName">
                                </div>

                                <div>
                                    <label for="contactEmail">Email <span class="required">*</span></label>
                                    <input type="text" value="" size="35" id="contactEmail" name="contactEmail">
                                </div>

                                <div>
                                    <label for="contactSubject">Asunto</label>
                                    <input type="text" value="" size="35" id="contactSubject" name="contactSubject">
                                </div>

                                <div style="margin-bottom: 25px">
                                    <label for="contactMessage">Mensaje <span class="required">*</span></label>
                                    <textarea cols="50" rows="10" id="contactMessage" name="contactMessage"></textarea>

                                    <div class="g-recaptcha capcha" data-sitekey="6Lf4Fh4TAAAAAOfUMvmFyw5gQF75QWEbvtdLWl5u"></div>
                                    
                                </div>

                                


                                <button class="submit">Enviar</button>
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif">
                                </span>


                            </fieldset>
                        </form> <!-- Form End -->

                        <!-- contact-warning -->
                        <div id="message-warning"> Error boy</div>
                        <!-- contact-success -->
                        <div id="message-success">
                            <i class="fa fa-check"></i>Tu mensaje ha sido enviado, muchas gracias!<br>
                        </div>

                    </div>


                    <aside class="four columns footer-widgets">

                        <div class="widget widget_tweets">

                            <ul id="twitter">

                               <a class="twitter-timeline" data-height="600" data-theme="dark" href="https://twitter.com/leandroarturi?ref_src=twsrc%5Etfw">Tweets by leandroarturi</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

                            </ul>

                        </div>

                    </aside>



                </div>

            </section> <!-- Contact Section End-->


            <!-- footer
            ================================================== -->
            <footer>

                <div class="row">

                    <div class="twelve columns">

                        <ul class="social-links">
                            <li><a href="https://ar.linkedin.com/in/leandroarturi" target="_blank"><i class="fa fa-linkedin"></i></a></li> 
                            <li><a href="https://twitter.com/leandroarturi" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        </ul>

                        <ul class="copyright" style="color:#8C8C8C;">
                            <li>&copy; Copyright <?php echo date('Y') ?> | Leandro Arturi</li> 
                        </ul>

                    </div>

                    <div id="go-top"><a class="smoothscroll" title="Volver al Inicio" href="#home"><i class="icon-up-open"></i></a></div>

                </div>

            </footer> <!-- Footer End-->

            <!-- Java Script
            ================================================== -->
            <script src="js/jquery.min.js"></script>
            <script>window.jQuery || document.write('<script src="js/jquery-1.10.2.min.js"><\/script>')</script>
            <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>

            <script src="js/jquery.flexslider.js"></script>
            <script src="js/waypoints.js"></script>
            <script src="js/jquery.fittext.js"></script>
            <script src="js/init.js?<?php echo APPVERSION ?>"></script>

        </div> <!-- Contenido -->

    </body>

</html>