<?php 
   include_once('../helper.php'); 
?>

<div class="banner-text">
  <h1 class="responsive-headline">Leandro Arturi</h1>
  <h3>
    <?php echo $content['header1'][$_SESSION['langId']] . ' ' . getExperiencia($_SESSION['langId']) . ' ' . $content['header2'][$_SESSION['langId']]; ?>
  </h3>
  <ul class="social">
      <li><a href="https://ar.linkedin.com/in/leandroarturi" target="_blank"><i class="fa fa-linkedin"></i></a></li>
      <li><a href="https://twitter.com/leandroarturi" target="_blank"><i class="fa fa-twitter"></i></a></li>
  </ul>

</div>


