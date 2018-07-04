<?php 

if (isset($_GET['send'])) {
	$name = mb_convert_encoding($_POST['name'], 'windows-1251');
	$tel = mb_convert_encoding($_POST['tel'], 'windows-1251');

	$to = 'info@digitalrift.agency';
	$subject = 'DigitalRift';
	
	$message = '
    <html>
      <body>
				<p>Имя: '. $name .'</p>
				<p>Телефон: '. $tel .'</p>
      </body>
    </html>';

	$header = "From: DigitalRift\r\n";
	$header .= "MIME-Version: 1.0\r\n";
	$header .= "Content-type: text/html; charset=\"windows-1251\"";
	

	$result = mail($to, $subject, $message, $header);

	echo $result;
}