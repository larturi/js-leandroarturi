<?php 
   include_once('../helper.php'); 
?>

<div class="row education last-section">

    <div class="three columns header-col">
        <h1><span>Portfolio</span></h1>
    </div>

    <div class="nine columns main-col">

    <?php

        $strPortfolio = file_get_contents("../services/portfolio.json");
        $arrayPortfolio = json_decode($strPortfolio, true);

        switch ($_SESSION['langId']) {
            case 0:
                foreach ($arrayPortfolio as $proyecto) {
                    echo '<div class="row">
                            <div class="twelve columns">
                                <h3><a href="'.$proyecto['url'].'"
                                        target="_blank">'.$proyecto['nombre'].'</a></h3>
                                <p class="detalle-cursos">
                                    <em class="detalle-cursos-em hash-lenguaje"><span>' . $proyecto['lenguaje'] . '</em></span><br />
                                    '.$proyecto['resumen']. '
                                </p>
                            </div>
                          </div>';
                    }
            break;

            case 1:
                foreach ($arrayPortfolio as $proyecto) {
                    echo '<div class="row">
                            <div class="twelve columns">
                                <h3><a href="'.$proyecto['url'].'"
                                        target="_blank">'.$proyecto['name'].'</a></h3>
                                <p class="detalle-cursos">
                                    <em class="detalle-cursos-em hash-lenguaje"><span>' . $proyecto['lenguaje'] . '</em></span><br />
                                    '.$proyecto['summary']. '
                                </p>
                            </div>
                          </div>';
                    }
            break;
        }

        ?>

    </div> <!-- nine columns -->

</div>