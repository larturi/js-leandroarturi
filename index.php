<!DOCTYPE html>
<!--[if lt IE 8 ]><html class="no-js ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="no-js ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 8)|!(IE)]><!-->
<html class="no-js" lang="es"> <!--<![endif]-->
<!--2020-->
    <head>

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
        <link rel="stylesheet" href="css/default.css?v1.5">
        <link rel="stylesheet" href="css/layout.css?v1.1">
        <link rel="stylesheet" href="css/media-queries.css?v1.5">
        <link rel="stylesheet" href="css/magnific-popup.css">
        <link rel="stylesheet" href="css/font-awesome.min.css">

        <!-- Owl Carousel Assets -->

        <link href="lib/owl-carousel/assets/css/custom.css?v1.1" rel="stylesheet">
        <link href="lib/owl-carousel/owl-carousel/owl.carousel.css" rel="stylesheet">
        <link href="lib/owl-carousel/owl-carousel/owl.theme.css" rel="stylesheet">

        <!-- Prettify -->
        <link href="lib/owl-carousel/assets/js/google-code-prettify/prettify.css" rel="stylesheet">


        <!-- Script
        ================================================== -->
        <script src="js/modernizr.js"></script>

        <!-- Favicons
             ================================================== -->
        <link rel="shortcut icon" href="favicon.ico" >


        <script src='https://www.google.com/recaptcha/api.js'></script>
    </head>

    <body>

        <div id="cargando">

        </div>

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
                        <h3>Soy profesional IT, <span>Licenciado en Sistemas de Informaci&oacute;n</span> con <?php echo getExperiencia(); ?> a&ntilde;os de experiencia en gesti&oacute;n y desarrollo de proyectos de software.
                            He trabajado en el desarrollo de aplicaciones <span>web</span>, de <span>escritorio</span> y <span>mobile</span>.
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

                        <p>Soy profesional IT con experiencia en gesti&oacute;n y desarrollo de proyectos de software en diferentes tecnolog&iacute;as. 
                            Actualmente trabajo como Coordinador en PAMI, gestionando la demanada de requerimientos de desarrollo provenientes de las distintas &aacute;reas y administrando una amplia cartera de proyectos institucionales. 
                            A lo largo de mi carrera he cumplido diferentes roles, habiendo trabajado como desarrollador, 
                            analista programador, analista t&eacute;cnico funcional y l&iacute;der de proyectos en el desarrollo de aplicaciones web, de escritorio y mobile. 
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

                <!-- Descarga CV 
                <div class="row education">

                    <div class="three columns header-col">
                        <h1><span>Descargar CV</span></h1>
                    </div>

                    <div class="nine columns main-col">

                        <div class="row item">

                            <div class="twelve columns">

                                <p class="info" id="buttonCV">
                                    <a class="button" target="_blank" style="color: white;" href="https://drive.google.com/open?id=1ne1KXW_e4aMT0MezTawO3TYcOVyDUS2D">CV Leandro Arturi.pdf</a>
                                </p>

                                <p>
                                </p>

                            </div>

                        </div> 

                    </div> 

                </div> -->

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
                                    Actualmente trabajo como Coordinador en PAMI gestionando la demanada de requerimientos de desarrollo provenientes de las distintas &aacute;reas 
                                    y administrando una amplia cartera de proyectos institucionales. 
                                    Mis objetivos consisten en gestionar la demanda, monitorear los avances de cada proyecto, detectar desv&iacute;os, riesgos, relaciones con otros 
                                    sistemas, facilitar los recursos necesarios a los L&iacute;deres de Proyecto y contar con infomaci&oacute;n consolidada que facilite la priorizaci&oacute;n y toma de decisiones.
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
                                    Trabaj&eacute; en la Coordinaci&oacute;n de Desarrollo como Project Manager gestionando la cartera de proyectos de software institucionales.
                                    Mis objetivos consistieron en monitorear los avances de cada proyecto, detectar desv&iacute;os, riesgos, facilitar los recursos necesarios a 
                                    los L&iacute;deres de T&eacute;cnicos, definir la arquitectura de desarrollo y la gesti&oacute;n de la configuraci&oacute;n.
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
                                    Durante casi dos años me desempe&ntilde;&eacute; como L&iacute;der de Proyectos de Software. Trabajamos en m&uacute;ltiples proyectos 
                                    con arquitectura orientada a servicios en tecnología PHP, HTML 5, JavaScript, JQuery y Oracle. Uno de los proyectos mas
                                    interesantes que llevamos a cabo fue el desarrollo de un sistema de seguridad single sign on (SSO) para administrar la 
                                    seguridad de mas de cuarenta sistemas web.
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
                                    En esta etapa de m&aacute;s de cuatro a&ntilde;os profundic&eacute; mi rol de l&iacute;der de equipo dando el salto a Visual Basic .NET 
                                    como principal herramienta de desarrollo. Desarrollamos m&aacute;s de decenas de aplicaciones de diversas &iacute;ndoles.
                                    Las tecnolog&iacute;as utilizadas fueron Vb6, VB.Net, C# .Net / Sql Server y Oracle.
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
                                    Esta fue mi primera experiencia coordinando un equipo de trabajo. Trabajamos puntualmente como mesa de
                                    ayuda t&eacute;cnica / funcional en la implementaci&oacute;n de un proyecto, siendo los intermediarios entre los usuarios
                                    de todo el pa&iacute;s y los desarrolladores. Para poder administrar la demanda, en paralelo desarrollamos herramientas
                                    en Visual Basic 6 / Sql Server y Oracle.
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

                                <br/> <br/>

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

                        <p>A lo largo de mi carrera profesional he cumplido diferentes roles, habiendo trabajado como Desarrollador, 
                            Analista Programador, Analista T&eacute;cnico Funcional, L&iacute;der de Proyectos y Project Manager. En todos estos a&ntilde;os
                            me he especializado en multiples tecnolog&iacute;as, lenguajes de programaci&oacute;n y herramientas de 
                            dise&ntilde;o y de gesti&oacute;n de proyectos.
                        </p>

                        <div class="bars">

                            <ul class="skills">
                                <li><span class="bar-expand ochenta"></span><em>Php</em></li>
                                <li><span class="bar-expand ochenta"></span><em>Laravel</em></li>
                                <li><span class="bar-expand ochenta"></span><em>Html / Css</em></li>
                                <li><span class="bar-expand ochenta"></span><em>Javascript / jQuery</em></li>
                                <li><span class="bar-expand noventa"></span><em>Visual Basic / .Net / C#</em></li>
                                <li><span class="bar-expand cincuentaycinco"></span><em>C / C++ / Java</em></li>
                                <li><span class="bar-expand noventa"></span><em>Oracle / Sql Server / MySql</em></li>
                                <li><span class="bar-expand sesenta"></span><em>Android</em></li>
                                <li><span class="bar-expand noventa"></span><em>Visio / Office / Project</em></li>
                            </ul>

                        </div><!-- end skill-bars -->

                    </div> <!-- nine columns -->

                </div> <!-- End Skills -->



                <!-- Tecnologias -->
                <div class="row skills">

                    <div class="three columns header-col">
                        <h1><span>Tecnolog&iacute;as</span></h1>
                    </div>

                    <!-- Tecnologias -->

                    <div class="nine columns main-col">

                        <p>Estas son algunas de las principales tecnolog&iacute;as con las que trabajo</p>

                        <div id="demo" style="margin-top: 50px;">
                            <div class="container">

                                <div class="row">
                                    <div class="span12">

                                        <div id="owl-example" class="owl-carousel">

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/html5.png" alt="Html5">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/css3.png" alt="CSS3">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/javascript.png" alt="Javascript">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/php.png" alt="PHP">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/jquery.png" alt="jQuery">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/laravel.png" alt="Laravel">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/visual.png" alt="Visual Studio">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/csharp.png" alt="C#">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/android.png" alt="Android Studio">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/java.png" alt="Java">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/c.png" alt="C">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/cplusplus.png" alt="C++">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/oracle.png" alt="Oracle">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/mysql.png" alt="MySql">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/sqlserver.png" alt="Sql Server">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/mongodb.png" alt="Mongodb">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/bootstrap.png" alt="Bootstrap">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/jira.png" alt="Jira">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/confluence.png" alt="Confluence">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/vba.png" alt="VBA">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/googlescript.png" alt="Google Apps Script">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/office.png" alt="Office">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/svn.png" alt="Svn">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/git.png" alt="Git">
                                            </div>

                                            <div class="item">
                                                <img src="lib/owl-carousel/assets/img/demo-slides/apache.png" alt="Apache">
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <!-- End Tecnologias -->

                </div> <!-- End Tecnologias -->



            </section> <!-- Resume Section End-->


            <!-- Portfolio Section
            ================================================== -->
            <section id="portfolio">

                <div class="row">

                    <div class="twelve columns collapsed">

                        <h1>Algunos de mis trabajos</h1>

                        <!-- portfolio-wrapper -->
                        <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">

                            <div class="columns portfolio-item">
                                <div class="item-wrap">

                                    <a href="#modal-01" title="">
                                        <img alt="" src="images/portfolio/modals/m-mipami.jpg">
                                        <div class="overlay">
                                            <div class="portfolio-item-meta">
                                                <h5>Mi PAMI</h5>
                                                <p>Android App</p>
                                            </div>
                                        </div>
                                        <div class="link-icon"><i class="icon-plus"></i></div>
                                    </a>

                                </div>
                            </div> <!-- item end -->

                            <div class="columns portfolio-item">

                                <div class="item-wrap">

                                    <a href="#modal-02" title="">
                                        <img alt="" src="images/portfolio/modals/m-diseta.jpg">
                                        <div class="overlay">
                                            <div class="portfolio-item-meta">
                                                <h5>Diseta - Ropa de Seda</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div class="link-icon"><i class="icon-plus"></i></div>
                                    </a>

                                </div>
                            </div> <!-- item end -->

                            <div class="columns portfolio-item">

                                    <div class="item-wrap">

                                        <a href="#modal-03" title="">
                                            <img alt="" src="images/portfolio/modals/m-laboratorioequis.jpg">
                                            <div class="overlay">
                                                <div class="portfolio-item-meta">
                                                    <h5>Laboratorio Equis</h5>
                                                    <p>Web Development</p>
                                                </div>
                                            </div>
                                            <div class="link-icon"><i class="icon-plus"></i></div>
                                        </a>

                                    </div>
                                </div>  <!-- item end -->


                            <div class="columns portfolio-item">

                                <div class="item-wrap">

                                    <a href="#modal-04" title="">
                                        <img alt="" src="images/portfolio/modals/m-sombreros.jpg">
                                        <div class="overlay">
                                            <div class="portfolio-item-meta">
                                                <h5>El Test de los Seis Sombreros</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div class="link-icon"><i class="icon-plus"></i></div>
                                    </a>

                                </div>
                            </div> <!-- item end -->

                            <div class="columns portfolio-item">

                                <div class="item-wrap">

                                    <a href="#modal-05" title="">
                                        <img alt="" src="images/portfolio/modals/m-famosos.jpg">
                                        <div class="overlay">
                                            <div class="portfolio-item-meta">
                                                <h5>Famosos en Twitter</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div class="link-icon"><i class="icon-plus"></i></div>
                                    </a>

                                </div>
                            </div> <!-- item end -->

                            <div class="columns portfolio-item">

                                <div class="item-wrap">

                                    <a href="#modal-06" title="">
                                        <img alt="" src="images/portfolio/modals/m-series.jpg">
                                        <div class="overlay">
                                            <div class="portfolio-item-meta">
                                                <h5>Trivia Series de TV</h5>
                                                <p>Game - Web Development</p>
                                            </div>
                                        </div>
                                        <div class="link-icon"><i class="icon-plus"></i></div>
                                    </a>

                                </div>
                            </div> <!-- item end -->
                            

                            <div class="columns portfolio-item">

                                    <div class="item-wrap">

                                        <a href="#modal-11" title="">
                                            <img alt="" src="images/portfolio/modals/m-programmerday.jpg">
                                            <div class="overlay">
                                                <div class="portfolio-item-meta">
                                                    <h5>Programmer Day</h5>
                                                    <p>Web Development</p>
                                                </div>
                                            </div>
                                            <div class="link-icon"><i class="icon-plus"></i></div>
                                        </a>

                                    </div>
                                </div>  <!-- item end -->
                                

                                <div class="columns portfolio-item">

                                <div class="item-wrap">

                                    <a href="#modal-10" title="">
                                        <img alt="" src="images/portfolio/modals/m-maschefacts.jpg">
                                        <div class="overlay">
                                            <div class="portfolio-item-meta">
                                                <h5>Los Mejores Maschefacts</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div class="link-icon"><i class="icon-plus"></i></div>
                                    </a>

                                </div>
                            </div>  <!-- item end -->


                            <!-- OCULTOS --> 



                            <div class="mas-proyectos">

                            <div class="columns portfolio-item">

                                <div class="item-wrap">

                                    <a href="#modal-07" title="">
                                        <img alt="" src="images/portfolio/modals/m-calculadora.jpg">
                                        <div class="overlay">
                                            <div class="portfolio-item-meta">
                                                <h5>Calculadora del Viajero</h5>
                                                <p>Android App</p>
                                            </div>
                                        </div>
                                        <div class="link-icon"><i class="icon-plus"></i></div>
                                    </a>

                                </div>
                            </div> <!-- item end -->


                            <div class="columns portfolio-item">

                                <div class="item-wrap">

                                    <a href="#modal-09" title="">
                                        <img alt="" src="images/portfolio/modals/m-chistes.jpg">
                                        <div class="overlay">
                                            <div class="portfolio-item-meta">
                                                <h5>Chistes Codificados</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div class="link-icon"><i class="icon-plus"></i></div>
                                    </a>

                                </div>
                            </div> <!-- item end -->

                            <div class="columns portfolio-item">

                                <div class="item-wrap">

                                    <a href="#modal-08" title="">
                                        <img alt="" src="images/portfolio/modals/m-visiontest.jpg">
                                        <div class="overlay">
                                            <div class="portfolio-item-meta">
                                                <h5>The Vision Test</h5>
                                                <p>Game - Web Development</p>
                                            </div>
                                        </div>
                                        <div class="link-icon"><i class="icon-plus"></i></div>
                                    </a>

                                </div>
                            </div> <!-- item end -->


                            <div class="columns portfolio-item">
                                <div class="item-wrap">

                                    <a href="#modal-12" title="">
                                        <img alt="" src="images/portfolio/modals/m-hoyjugamos.jpg">
                                        <div class="overlay">
                                            <div class="portfolio-item-meta">
                                                <h5>HoyJugamos</h5>
                                                <p>Laravel</p>
                                            </div>
                                        </div>
                                        <div class="link-icon"><i class="icon-plus"></i></div>
                                    </a>

                                </div>
                            </div> <!-- item end -->


                            </div>



                        </div> <!-- portfolio-wrapper end -->

                        <div class="section-mas-proyectos" id="section-mas-proyectos">
                            <button id="buton-mas-proyectos" class="submit">Mas Proyectos</button>
                        </div>


                    </div> <!-- twelve columns end -->


                    <!-- Modal Popup -->

                    <div id="modal-01" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-mipami-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>Mi PAMI</h4>
                            <p>Aplicaci&oacute;n para dispositivos Android que muestra las Agencias y Farmacias con cobertura PAMI mas cercanas.</p>
                            <span class="categories"><i class="fa fa-tag"></i>Android</span>
                        </div>

                        <div class="link-box">
                            <a href="https://play.google.com/store/apps/details?id=com.mipami.larturi.mipami&hl=es_419" target="_blank">Descargar App</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-01 End -->

                    <div id="modal-12" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-hoyjugamos-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>HoyJugamos</h4>
                            <p>Web App social que permite organizar partidos de fútbol.</p>
                            <span class="categories"><i class="fa fa-tag"></i>Laravel</span>
                        </div>

                        <div class="link-box">
                            <a href="http://projectsapps.com/hoyjugamos/public" target="_blank">Ir al Sitio</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-12 End -->

                    <div id="modal-02" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-diseta-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>Diseta</h4>
                            <p>Sitio oficial de Diseta</p>
                            <span class="categories"><i class="fa fa-tag"></i>Web Development</span>
                        </div>

                        <div class="link-box">
                            <a href="http://www.diseta.com.ar" target="_blank">Ir al Sitio</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-02 End -->

                    <div id="modal-03" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-laboratorioequis-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>Laboratorio Equis</h4>
                            <p>Laboratorio Equis es un laboratorio de diagnóstico veterinario especializado en las enfermedades reproductivas.</p>
                            <span class="categories"><i class="fa fa-tag"></i>Php, Web Development</span>
                        </div>

                        <div class="link-box">
                            <a href="http://laboratorioequis.com.ar/" target="_blank">Ir al Sitio</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-03 End -->


                    <div id="modal-04" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-sombreros-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>El Test de los Seis Sombreros</h4>
                            <p>Aplicaci&oacute;n Web que permite realizar el Test de los Seis Sombreros de Edward De Bono. Muy interesante para conocer perfiles r&aacute;pidamente y armar equipos sinergicos. 
                                Es util adem&aacute;s para saber que tendencia tiene uno mismo y tenerlo presente a la hora de tomar decisiones.</p>
                            <span class="categories"><i class="fa fa-tag"></i>Php, Web Development</span>
                        </div>

                        <div class="link-box">
                            <a href="http://www.projectsapps.com/sixhattest/el-test-de-los-seis-sombreros.php" target="_blank">Ir al Sitio</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-04 End -->

                    <div id="modal-05" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-famosos-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>Famosos en Twitter</h4>
                            <p>P&aacute;gina Web que consume el servicio de Twitter y muestra los tweets mas relevantes de las cuentas mas famosas en forma de noticias.</p>
                            <span class="categories"><i class="fa fa-tag"></i>Php, Web Development</span>
                        </div>

                        <div class="link-box">
                            <a href="http://www.famososentwitter.com/" target="_blank">Ir al Sitio</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-05 End -->

                    <div id="modal-06" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-series-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>Trivia Series de TV</h4>
                            <p>Trivia para poner a prueba tus conocimientos de Series Televisivas.</p>
                            <span class="categories"><i class="fa fa-tag"></i>Javascript, Web Development</span>
                        </div>

                        <div class="link-box">
                            <a href="http://projectsapps.com/triviaseries/trivia_series.php" target="_blank">Ir al Sitio</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-06 End -->


                    <div id="modal-07" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-calculadora-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>Calculadora del Viajero</h4>
                            <p>Calculadora para dispositivos Android que permite configurar de manera sencilla el tipo de cambio y el porcentaje de percepción de 
                                impuestos para luego calcular el importe en pesos de una compra.</p>
                            <span class="categories"><i class="fa fa-tag"></i>Android</span>
                        </div>

                        <div class="link-box">
                            <a href="https://play.google.com/store/apps/details?id=com.larturi.calculadoraviajeroargento" target="_blank">Descargar App</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-07 End -->

                    <div id="modal-08" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-visiontest-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>The Vision Test</h4>
                            <p>Juego desarrollado en Javascript que pone a prueba la rapidez visual del jugador.</p>
                            <span class="categories"><i class="fa fa-tag"></i>Javascript, Web Development</span>
                        </div>

                        <div class="link-box">
                            <a href="http://projectsapps.com/visiontest/" target="_blank">Ir al Sitio</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-08 End -->

                    <div id="modal-09" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-chistes-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>Chistes Codificados</h4>
                            <p>Sitio Web de chistes.</p>
                            <span class="categories"><i class="fa fa-tag"></i>Php, Web Development</span>
                        </div>

                        <div class="link-box">
                            <a href="http://chistescodificados.projectsapps.com/" target="_blank">Ir al Sitio</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-09 End -->

                    <div id="modal-10" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-maschefacts-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>Los Mejores Maschefacts</h4>
                            <p>Sitio homenaje a Javier Mascherano luego de las conocidas repercusiones en las redes sociales tras su destacada participaci&oacute;n en la copa del mundo 2014.</p>
                            <span class="categories"><i class="fa fa-tag"></i>Php, Web Development</span>
                        </div>

                        <div class="link-box">
                            <a href="http://maschefacts.projectsapps.com/" target="_blank">Ir al Sitio</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-10 End -->

                    <div id="modal-11" class="popup-modal mfp-hide">

                        <img class="scale-with-grid" src="images/portfolio/modals/m-programmerday-print.jpg" alt="" />

                        <div class="description-box">
                            <h4>Programmer Day</h4>
                            <p>Sitio dedicado a los colegas programadores para recordar su d&iacute;a cada a&ntilde;o.</p>
                            <span class="categories"><i class="fa fa-tag"></i>Php, Web Development</span>
                        </div>

                        <div class="link-box">
                            <a href="http://programmerday.projectsapps.com/" target="_blank">Ir al Sitio</a>
                            <a class="popup-modal-dismiss">Cerrar</a>
                        </div>

                    </div><!-- modal-11 End -->
                    

                </div> <!-- row End -->

            </section> <!-- Portfolio Section End-->

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
            <script src="js/magnific-popup.js"></script>
            <script src="js/init.js?v1.1"></script>



            <!-- Carrusel -->
            <script src="lib/owl-carousel/assets/js/jquery-1.9.1.min.js"></script>
            <script src="lib/owl-carousel/owl-carousel/owl.carousel.min.js"></script>

            <script>

                $(document).ready(function($) {
                    $("#owl-example").owlCarousel({
                        // Most important owl features
                        items: 5,
                        autoPlay: 2000,
                        responsive: true
                    });

                });


                $("body").data("page", "frontpage");

            </script>
            <script src="lib/owl-carousel/assets/js/bootstrap-collapse.js"></script>
            <script src="lib/owl-carousel/assets/js/bootstrap-transition.js"></script>
            <script src="lib/owl-carousel/assets/js/google-code-prettify/prettify.js"></script>
            <script src="lib/owl-carousel/assets/js/application.js"></script>

        </div> <!-- Contenido -->

    </body>

</html>