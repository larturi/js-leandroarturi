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

<div class="row">
  <div class="three columns">
    <img class="profile-pic" src="assets/images/profilephoto.jpg" alt="" />
  </div>

<div class="nine columns main-col">
    <h2><?php echo $content['acerca-de'][$_SESSION['langId']]?></h2>

    <p><?php echo $content['about'][$_SESSION['langId']]?></p>

    <div class="row">
      <div class="columns contact-details">
        <h2><?php echo $content['contactar'][$_SESSION['langId']]?></h2>
        <p class="address">

          <span style="margin-left: 2px;"><i class="fa fa-envelope"></i></span>
          <span class="item-contacto">
            <a href = "mailto:lea.arturi@gmail.com?subject=Contacto desde leandroarturi.com" target="_blank">
              lea.arturi@gmail.com
            </a>
          </span><br />

          <span style="margin-left: 2px;"><i class="fa fa-linkedin"></i></span>
          <span class="item-contacto">
            <a href = "https://www.linkedin.com/in/leandroarturi" target="_blank">
              LinkedIn
            </a>
          </span><br />

          <span style="margin-left: 2px;"><i class="fa fa-twitter"></i></span>
          <span class="item-contacto">
            <a href = "https://twitter.com/leandroarturi" target="_blank">
              Twitter
            </a>
          </span><br />
          

        </p>
      </div>
    </div>
    <!-- end row -->
  </div>
  <!-- end .main-col -->
</div>