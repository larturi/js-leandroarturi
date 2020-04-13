<!DOCTYPE html>
<html class="no-js" lang="es"> 
<!--2020-->
    <head>

        <?php define("APPVERSION", "v1.3.1"); ?>

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

        <?php include_once('helper.php'); ?>

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
        <link rel="stylesheet" href="assets/css/default.css?<?php echo APPVERSION ?>">
        <link rel="stylesheet" href="assets/css/layout.css?<?php echo APPVERSION ?>">
        <link rel="stylesheet" href="assets/css/media-queries.css?<?php echo APPVERSION ?>">

        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <!-- Favicon ==================================== -->
        <link rel="shortcut icon" href="assets/images/favicon.ico" >

    </head>

    <body>

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
                        <li><a class="smoothscroll" href="#education">Educación</a></li>
                        <li><a class="smoothscroll" href="#work">Trabajo</a></li>
                        <li><a class="smoothscroll" href="#skills">Skills</a></li>
                        <li><a class="smoothscroll" href="#portfolio">Portfolio</a></li>
                    </ul> <!-- end #nav -->

                </nav> <!-- end #nav-wrap -->

                <div class="row banner">
                    <div class="banner-text">
                        <h1 class="responsive-headline">Leandro Arturi</h1>
                        <h3>Soy profesional IT, Licenciado en Sistemas de Información con <?php echo getExperiencia(); ?> años de experiencia
                            en gestión y desarrollo de proyectos de software.
                            He trabajado en desarrollo de aplicaciones web, de escritorio y mobile.
                            Conocé mas <a class="smoothscroll" href="#about">acerca de mi</a>.</h3>
                        <hr />
                        <ul class="social">
                            <li><a href="https://ar.linkedin.com/in/leandroarturi" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="https://twitter.com/leandroarturi" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>

                <p class="scrolldown">
                    <a class="smoothscroll" href="#about"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></a>
                </p>

            </header> <!-- Header End -->

            <!-- Sections
            ================================================== -->

            <?php include_once('sections/about.html'); ?>

            <?php include_once('sections/education.html'); ?>

            <?php include_once('sections/work.html'); ?>
            
            <?php include_once('sections/docencia.html'); ?>

            <?php include_once('sections/skills.html'); ?>

            <?php include_once('sections/portfolio.html'); ?>
            
            <?php include_once('sections/footer.php'); ?>

           

            <!-- Java Script
            ================================================== -->
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/jquery.flexslider.js"></script>
            <script src="assets/js/waypoints.js"></script>
            <script src="assets/js/jquery.fittext.js"></script>
            <script src="assets/js/init.js?<?php echo APPVERSION ?>"></script>

        </div> <!-- Contenido -->

    </body>

</html>