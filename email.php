<?php
if ($_POST) {
//
  $email_to = "jesus.cab.lun@gmail.com";
//$email_to = "jvdetails@hotmail.com";
  $email_subject = "Contacto desde JVDetails.com";
//
  $headers = "From: $nombre "."<no-reply@jvdetails.com>";
  $headers .= "\r\n".'Content-type: text/html; charset=iso-8859-1'."\r\n";
  $headers .= 'MIME-Version: 1.0'."\r\n";
  $headers .= 'X-Mailer: PHP/'.phpversion();

//
  $email_message = "Detalles del formulario de contacto"."<br>";
  $email_message .= "Nombre: " . $_POST['name'] . "<br>";
  $email_message .= "e-mail: " . $_POST['email'] . "<br>";
  $email_message .= "Opciones: " .print_r($_POST['options']) . "<br>";
  $email_message .= "Mensaje: " . $_POST['mensaje'] . "<br>";
  $email_message .= "Media: " .print_r($_POST['options']) . "<br>";
  @mail($email_to, $email_subject, $email_message, $headers);
}else {

}
?>
