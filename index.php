<!DOCTYPE html>
<html class="no-js" lang="es"> 
<!--2020-->
    <head>

        <!-- =========================================================== -->
        <!-- Version de la aplicacion                                    -->
        <!-- =========================================================== -->

        <?php 
           define("APPVERSION", "2.0.4"); 
           define("AMBIENTE", "dev"); 
           $_SESSION['lang'] = "es";
           $_SESSION['langId'] = 0;
        ?>

        <script type="application/ld+json">
        {"@context" : "https://schema.org",
         "@type" : "Organization",  
          "name" : "Leandro Arturi",
          "url" : "https://www.leandroarturi.com", 
          "logo": "https://www.leandroarturi.com/images/profilephoto.jpg" }
        </script>


        <?php 
            include('helper.php');
            include('content.php'); 
        ?>

        <!-- =========================================================== -->
        <!-- Basic Page Needs                                            -->
        <!-- =========================================================== -->

        <meta charset="utf-8">
        <title>Leandro Arturi</title>
        <meta name="description" content="Leandro Arturi">
        <meta name="author" content="Leandro Arturi">
        <meta name="version" content="<?php echo APPVERSION;?>">
        
        <!-- =========================================================== -->
        <!-- Mobile Specific Metas                                       -->
        <!-- =========================================================== -->

        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">


        <!-- =========================================================== -->
        <!-- Fonts                                                       -->
        <!-- =========================================================== -->

        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <!-- =========================================================== -->
        <!-- CSS                                                         -->
        <!-- =========================================================== -->

        <?php if(AMBIENTE === 'dev') { ?>

        <link rel="stylesheet" href="assets/css/dev/style.css?<?php echo APPVERSION ?>">
        <link rel="stylesheet" href="assets/css/dev/media-queries.css?<?php echo APPVERSION ?>">

        <?php } else { ?>

        <link rel="stylesheet" href="assets/css/min/style.min.css?<?php echo APPVERSION ?>">
        <link rel="stylesheet" href="assets/css/min/media-queries.min.css?<?php echo APPVERSION ?>">

        <?php } ?>

        <!-- =========================================================== -->
        <!-- Favicon                                                     -->
        <!-- =========================================================== -->

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

        <div class="loading">
           <?php echo $content['cargando'][0] . '...' ?>
        </div>

        <div id="contenido">

        <!-- =========================================================== -->
        <!-- Header                                                      -->
        <!-- =========================================================== -->

            <header id="home">

                <nav id="nav-wrap">

                    <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" class="nav">
                        <li class="current"><a id="link-home" class="smoothscroll" href="#home"></a></li>
                        <li><a id="link-acerca" class="smoothscroll" href="#about"><?php echo $menu['acerca-de'][0] ?></a></li>
                        <li><a id="link-education" class="smoothscroll" href="#education"><?php echo $menu['educacion'][0] ?></a></li>
                        <li><a id="link-work" class="smoothscroll" href="#work"><?php echo $menu['trabajo'][0] ?></a></li>
                        <li id="li-skills"><a id="link-skills" class="smoothscroll" href="#skills"><?php echo $menu['skills'][0] ?></a></li>
                        <li><a id="link-portfolio" class="smoothscroll" href="#portfolio"><?php echo $menu['portfolio'][0] ?></a></li>
                        <li><a id="lang" href=""><?php echo $menu['idioma'][0] ?></a></li>
                    </ul> <!-- end #nav -->

                </nav> <!-- end #nav-wrap -->

                <div id="content-header" class="row banner"></div>

                <p class="scrolldown">
                    <a class="smoothscroll" href="#about"><i class="fa fa-chevron-circle-down hidden" aria-hidden="true"></i></a>
                </p>

            </header> <!-- Header End -->


        <!-- =========================================================== -->
        <!-- Sections                                                    -->
        <!-- =========================================================== -->
            
            <section id="about"></section>
            <section id="education" class="seccion-profile"></section>
            <section id="work" class="seccion-profile"></section>
            <section id="docencia" class="seccion-profile"></section>
            <section id="skills" class="seccion-profile"></section>
            <section id="portfolio" class="seccion-profile"></section>
            <footer id="footer"><?php include_once('sections/footer.php') ?></footer> 
  

        <!-- =========================================================== -->
        <!-- Java Script                                                 -->
        <!-- =========================================================== -->

            <script src="assets/js/min/jquery.min.js"></script>
            <script src="assets/js/min/jquery.flexslider.min.js"></script>
            <script src="assets/js/min/waypoints.min.js"></script>
            
            <?php if(AMBIENTE === 'dev') { ?>

            <script src="assets/js/dev/init.js?v=<?php echo APPVERSION ?>"></script>
            <script src="assets/js/dev/jquery.fittext.js?v=<?php echo APPVERSION ?>"></script>
            
            <?php } else { ?>

            <script src="assets/js/min/init.min.js?v=<?php echo APPVERSION ?>"></script>
            <script src="assets/js/min/jquery.fittext.min.js?v=<?php echo APPVERSION ?>"></script>
            
            <?php } ?>
            
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