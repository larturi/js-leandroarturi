<!DOCTYPE html>
<html class="no-js" lang="es"> 
<!--2020-->
    <head>

        <?php 
            define("APPVERSION", "1.7.3"); 
        ?>

        <script type="application/ld+json">
        {"@context" : "https://schema.org",
         "@type" : "Organization",  
          "name" : "Leandro Arturi",
          "url" : "https://www.leandroarturi.com", 
          "logo": "https://www.leandroarturi.com/images/profilephoto.jpg" }
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

         <!-- Fonts
        ================================================== -->
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <!-- CSS
        ================================================== -->
        <link rel="stylesheet" href="assets/css/style.css?<?php echo APPVERSION ?>"> 
        <link rel="stylesheet" href="assets/css/media-queries.css?<?php echo APPVERSION ?>"> 

        <!-- Favicon ==================================== -->
        <!-- <link rel="shortcut icon" href="assets/images/favicon.ico" > -->

        <link rel="apple-touch-icon" sizes="57x57" href="assets/images/favicon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="assets/images/favicon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="assets/images/favicon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="assets/images/favicon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="assets/images/favicon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="assets/images/favicon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="assets/images/favicon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="assets/images/favicon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="assets/images/favicon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="assets/images/favicon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon/favicon-16x16.png">
        <link rel="manifest" href="assets/images/favicon/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">

    </head>

    <body>

        <div id="contenido">

            <!-- Header
            ================================================== -->
            <header id="home" class="background-hide">

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

                <div id="content-header" class="row banner"></div>

                <p class="scrolldown">
                    <a class="smoothscroll" href="#about"><i class="fa fa-chevron-circle-down hidden" aria-hidden="true"></i></a>
                </p>

            </header> <!-- Header End -->

            <!-- Sections
            ================================================== -->
            
            <section id="about"></section>
            <section id="education" class="seccion-profile"></section>
            <section id="work" class="seccion-profile"></section>
            <section id="docencia" class="seccion-profile"></section>
            <section id="skills" class="seccion-profile"></section>
            <section id="portfolio" class="seccion-profile"></section>
            <footer id="footer"><?php include_once('sections/footer.php') ?></footer> 
  
            <!-- Java Script
            ================================================== -->
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/jquery.flexslider.js"></script>
            <script src="assets/js/waypoints.js"></script>
            <script src="assets/js/jquery.fittext.js"></script>
            <script src="assets/js/init.js?v=<?php echo APPVERSION ?>"></script>

            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-43659401-7"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-43659401-7');
            </script>

        </div> <!-- Contenido -->

    </body>

</html>