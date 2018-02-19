<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = "From:" . $email . "\r\n";
$header .= "X-Mailer: PHP /" . phpversion() . "\r\n";
$header	.= "Mime Version: 1.0 \r\n";
$header .= "Content Type: text/plain";

$comment = "Ce message à été envoyé par " . $name . "\r\n";
$comment .= "Son adresse mail est: ". $email . "\r\n";
$comment .= 'Son message: '$message . "\r\n";

$for = "contact@marionfanjaud.fr";
$Subject = " Contact sur le site";

mail($subject, utf8_decode($comment), $header);

echo json_encode(array(
	'Message' => sprintf("Votre message à bien été envoyée :) !", $name);
));

 ?>
