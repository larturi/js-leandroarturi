<?php 
   include_once('../helper.php'); 
?>

<div class="row education">

    <div class="three columns header-col">
        <h1><span><?php echo $content['educacion-titulo'][$_SESSION['langId']]?></span></h1>
    </div>

    <div class="nine columns main-col">

        <div class="row item">

            <div class="twelve columns">

                <h3><?php echo $content['licenciado'][$_SESSION['langId']]?></h3>
                <p class="info">
                    <span>Universidad de Buenos Aires</span><br />
                    <span>2003 • 2009</span><br />
                </p>

            </div>

        </div> <!-- item end -->

        <div class="row item">

            <div class="twelve columns">

                <h3><?php echo $content['tecnicatura'][$_SESSION['langId']]?></h3>
                <p class="info">
                    <span>Universidad de Ciencias Empresariales y Sociales</span><br />
                    <span>2011 • 2012 (<?php echo $content['pendiente-uces'][$_SESSION['langId']]?>)</span><br />
                </p>

            </div>

        </div> <!-- item end -->

    </div> <!-- main-col end -->

</div> <!-- End Education -->

<!-- Cursos -->
<div class="row education" style="margin-top: 50px;">

    <div class="three columns header-col">
        <h1><span><?php echo $content['cursos-titulo'][$_SESSION['langId']]?></span></h1>
    </div>

    <div class="nine columns main-col">

        <?php
           $strCursos = file_get_contents("../services/cursos.json");
           $arrayCursos = json_decode($strCursos, true);

           switch ($_SESSION['langId']) {
               case 0:
                foreach ($arrayCursos as $curso) {
                    echo '<div class="row item">
                             <div class="twelve columns">';
                            
                        if($curso['url']!="") {
                            echo '<a href="' . $curso['url'] . '" target="_blank">
                                     <h3>' . $curso['nombre'] . '</h3>
                                  </a>';
                        } else {
                            echo '<h3>' . $curso['nombre'] . '</h3>';
                        }  
                        
                        echo '<p class="detalle-cursos">
                                    <em class="detalle-cursos-em">' . $curso['anio'] . '  • ' . $curso['horas'] . ' h • ' . $curso['institucion'] . '</em>
                                    <br />
                              </p>
                            </div>
                        </div>';
                    }
                   break;
               
               
                case 1:
                    foreach ($arrayCursos as $curso) {
                        echo '<div class="row item">
                             <div class="twelve columns">';
                            
                        if($curso['url']!="") {
                            echo '<a href="' . $curso['url'] . '" target="_blank">
                                     <h3>' . $curso['name'] . '</h3>
                                  </a>';
                        } else {
                            echo '<h3>' . $curso['name'] . '</h3>';
                        }  
                        
                        echo '<p class="detalle-cursos">
                                    <em class="detalle-cursos-em">' . $curso['anio'] . '  • ' . $curso['horas'] . ' h • ' . $curso['institucion'] . '</em>
                                    <br />
                              </p>
                            </div>
                        </div>';
                    }
                   break;
           }

           
        ?>


    </div> <!-- main-col end -->

</div> <!-- End Education -->