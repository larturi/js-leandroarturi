<?php

if(!isset($_GET['lang'])){
    $_GET['lang'] = "es";
}

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
function getAmbiente(){
    return "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
}


?>