<div class="row education">

    <div class="three columns header-col">
        <h1><span>Educación</span></h1>
    </div>

    <div class="nine columns main-col">

        <div class="row item">

            <div class="twelve columns">

                <h3>Licenciatura en Sistemas de Información de las Organizaciones</h3>
                <p class="info">
                    <i class="fa iconos-cv fa-suitcase"></i><span>Universidad de Buenos Aires</span><br />
                    <i class="fa iconos-cv fa-calendar"></i><em class="date">2003 - 2009</em>
                </p>

                <p>
                </p>

            </div>

        </div> <!-- item end -->

        <div class="row item">

            <div class="twelve columns">

                <h3>Tecnicatura en Programación de Sistemas</h3>
                <p class="info">
                    <i class="fa iconos-cv fa-suitcase"></i><span>Universidad de Ciencias Empresariales y
                        Sociales</span><br />
                    <i class="fa iconos-cv fa-calendar"></i><em class="date">2011 - 2012 (restan cinco
                        materias)</em>
                </p>
                <p>
                </p>

            </div>

        </div> <!-- item end -->

    </div> <!-- main-col end -->

</div> <!-- End Education -->

<!-- Cursos -->
<div class="row education" style="margin-top: 50px;">

    <div class="three columns header-col">
        <h1><span>Cursos</span></h1>
    </div>

    <div class="nine columns main-col">

        <?php
           $strCursos = file_get_contents("../services/cursos.json");
           $arrayCursos = json_decode($strCursos, true);

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
                            <em class="detalle-cursos-em">' . $curso['anio'] . '  | ' . $curso['horas'] . ' h | ' . $curso['institucion'] . '</em>
                            <br />
                      </p>
                    </div>
                </div>';
            }
        ?>


    </div> <!-- main-col end -->

</div> <!-- End Education -->