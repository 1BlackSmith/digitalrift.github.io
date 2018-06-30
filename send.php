<?php 

if (isset($_GET['send'])) {
	$name = $_POST['name'];
	$tel = $_POST['tel'];

	$to = 'digital-rift@yandex.ru';
	$subject = '=?utf-8?B?'. base64_encode('Заявка с сайта DigitalRift') .'?=';
	
	$message = '
    <html>
      <head>
        <title>'.$subject.'</title>
      </head>
      <body>
				<p>Имя: '. $name .'</p>
				<p>Телефон: '. $tel .'</p>
      </body>
    </html>';

	$header = "From: ". base64_encode($name) ."\r\n";
	$header .= "MIME-Version: 1.0\r\n";
	$header .= "Content-type: text/html; charset=utf-8\r\n";
	

	/* Отправка письма */ 
	$result = mail($to, $subject, $message, $header);

	echo $result;
}