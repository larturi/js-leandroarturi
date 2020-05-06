<?php 
   include_once('../helper.php'); 
?>

<div class="row education">
  
  <div class="three columns header-col">
    <h1><span><?php echo $content['docencia-titulo'][$_SESSION['langId']]?></span></h1>
  </div>

  <div class="nine columns main-col">
    <div class="row item">
      <div class="twelve columns">
        <h3>Universidad de Buenos Aires</h3>

        <p class="info">
          <span>Marzo de 2007 – Diciembre de 2012</span><br />
          <span>5 años y 10 meses</span><br />
        </p>

        <p>
            <?php echo $content['docencia'][$_SESSION['langId']]?>
        </p>

      </div>
    </div>
    <!-- item end -->
  </div>

</div>
