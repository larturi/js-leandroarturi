<?php 
   include_once('../helper.php'); 
   include_once('../content.php');

   switch ($_GET['lang']) {
      case 'es':
        $_SESSION['lang'] = "es";
        $_SESSION['langId'] = 0;
      break;
     
      case 'en':
        $_SESSION['lang'] = "en";
        $_SESSION['langId'] = 1;
      break;
   }
?>

<div class="banner-text">
  <h1 class="responsive-headline">Leandro Arturi</h1>
  <h3>
    <?php echo $content['header1'][$_SESSION['langId']] . ' ' . getExperiencia() . ' ' . $content['header2'][$_SESSION['langId']]; ?>
  </h3>
  <ul class="social">
      <li><a href="https://ar.linkedin.com/in/leandroarturi" target="_blank"><i class="fa fa-linkedin"></i></a></li>
      <li><a href="https://twitter.com/leandroarturi" target="_blank"><i class="fa fa-twitter"></i></a></li>
  </ul>

</div>


