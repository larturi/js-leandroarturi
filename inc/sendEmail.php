﻿<?php
// Replace this with your own email address
$siteOwnersEmail = 'lea.arturi@gmail.com';


if ($_POST) {

    $userIP = $_SERVER["REMOTE_ADDR"];
    $recaptchaResponse = $_POST['gresponse'];
    $secretKey = "6Lf4Fh4TAAAAAKA7OtuDvSYCUTaugGFT7MYkXvgc";
    $request = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$recaptchaResponse}&remoteip={$userIP}");

    if (!strstr($request, "true")) {
        echo "Demuestra que no eres un robot!";
    } else {

        $name = trim(stripslashes($_POST['contactName']));
        $email = trim(stripslashes($_POST['contactEmail']));
        $subject = trim(stripslashes($_POST['contactSubject']));
        $contact_message = trim(stripslashes($_POST['contactMessage']));

        // Check Name
        if (strlen($name) < 2) {
            $error['name'] = "Por favor ingrese su nombre";
        }
        // Check Email
        if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
            $error['email'] = "Por favor, ingrese una direccion de email correcta";
        }
        // Check Message
        if (strlen($contact_message) < 1) {
            $error['message'] = "Por favor, ingrese un mensaje";
        }
        // Subject
        if ($subject == '') {
            $subject = "Formulario de Contacto";
        }


        // Set Message
        $message .= "Email from: " . $name . "<br />";
        $message .= "Email address: " . $email . "<br />";
        $message .= "Message: <br />";
        $message .= $contact_message;
        $message .= "<br /> ----- <br /> Mensaje enviado desde leandroarturi.com <br />";

        // Set From: header
        $from = $name . " <" . $email . ">";

        // Email Headers
        $headers = "From: " . $from . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


        if (!$error) {

            ini_set("sendmail_from", $siteOwnersEmail); // for windows server
            $mail = mail($siteOwnersEmail, $subject, $message, $headers);

            if ($mail) {
                echo "OK";
            } else {
                echo "Ha ocurrido un error. Por favor intenta nuevamente.";
            }
        } # end if - no validation error
        else {

            $response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
            $response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
            $response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;

            echo $response;
        } # end if - there was a validation error
    }
}
?>