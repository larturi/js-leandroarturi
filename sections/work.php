<?php 
   include_once('../helper.php'); 
?>

<div class="row education">
  <div class="three columns header-col">
    <h1><span><?php echo $content['trabajo-titulo'][$_SESSION['langId']]?></span></h1>
  </div>

  <div class="nine columns main-col">
    <!-- Work -->

    <div class="row item">
      <div class="twelve columns">
        <h3>IT Lead</h3>
        <p class="info">
          <span><?php echo $content['it-lead-sector'][$_SESSION['langId']]?></span><br />
          <span><?php echo $content['it-lead-fecha'][$_SESSION['langId']]?></span><br />
        </p>
        <p>
           <?php echo $content['it-lead'][$_SESSION['langId']]?>
        </p>
      </div>
    </div>
    <!-- item end -->

    <div class="row item">
      <div class="twelve columns">
        <h3>IT Project Manager</h3>
        <p class="info">
          <span><?php echo $content['it-project-manager-sector'][$_SESSION['langId']]?></span><br />
          <span><?php echo $content['it-project-manager-fecha'][$_SESSION['langId']]?></span><br />
        </p>
        <p>
        <?php echo $content['it-project-manager'][$_SESSION['langId']]?>
        </p>
      </div>
    </div>
    <!-- item end -->

    <div class="row item">
      <div class="twelve columns">
        <h3>Web Developer Technical Lead</h3>
        <p class="info">
          <span><?php echo $content['desarrolloweb-sector'][$_SESSION['langId']]?></span><br />
          <span><?php echo $content['desarrolloweb-fecha'][$_SESSION['langId']]?></span><br />
        </p>

        <p>
          <?php echo $content['desarrolloweb'][$_SESSION['langId']]?>
        </p>
      </div>
    </div>
    <!-- item end -->

    <div class="row item">
      <div class="twelve columns">
        <h3>Technical Lead .NET</h3>
        <p class="info">
           <span><?php echo $content['desarrollodesk-sector'][$_SESSION['langId']]?></span><br />
           <span><?php echo $content['desarrollodesk-fecha'][$_SESSION['langId']]?></span><br />
        </p>

        <p>
        <?php echo $content['desarrollodesk'][$_SESSION['langId']]?>
        </p>
      </div>
    </div>
    <!-- item end -->

    <div class="row item">
      <div class="twelve columns">
        <h3>Functional Technical Leader</h3>
        <p class="info">
          <span><?php echo $content['analisis-sector'][$_SESSION['langId']]?></span><br />
          <span><?php echo $content['analisis-fecha'][$_SESSION['langId']]?></span><br />
        </p>

        <p>
          <?php echo $content['analisis'][$_SESSION['langId']]?>
        </p>
      </div>
    </div>
    <!-- item end -->

    <div class="row item">
      <div class="twelve columns">
        <h3>Freelance Developer</h3>
        <p class="info">
          <span><?php echo $content['freelance-sector'][$_SESSION['langId']]?></span><br />
          <span><?php echo $content['freelance-fecha'][$_SESSION['langId']]?></span><br />
        </p>

        <p>
           <?php echo $content['freelance'][$_SESSION['langId']]?>
        </p>
      </div>
    </div>
    <!-- item end -->
  </div>
</div>

