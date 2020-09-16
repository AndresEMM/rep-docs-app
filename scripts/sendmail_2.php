<?php
// object for response
$jsondata = array();

$headers = "From: andresemm96@gmail.com";// . "\r\n" .
	//"CC: andresemm96@gmail.com";
	//"CC: administracion@transportesolmen.com";
	//"CC: fpozost@ducitec.com";
	//"CC: servicio@insadelgolfo.com";
$to = "andresemm96@gmail.com";
$subject = "Asunto de Tec. Veracruz: ";
$msg = "";

if( isset($_POST['uname'])){
	$subject = $subject . $_POST['uname'];
	$subject = $subject . $_POST['undname'];

	if( isset($_POST['email'])){
		$subject = $subject."  (".$_POST['email'].") ";

		if( isset($_POST['questn'])){
			$subject = $subject."  (".$_POST['questn'].") ";

			if( isset($_POST['msg'])){
				$jsondata['success'] = true;
				$jsondata['message'] = "Envío correcto.";
				$msg = $subject."  ".$_POST['questn']." ";
				$msg = $subject."  ".$_POST['msg']." ";
			} else {
				$jsondata['success'] = false;
				$jsondata['message'] = "Error. Falta mensaje.";
			}
		} else {
			$jsondata['success'] = false;
			$jsondata['message'] = "Error. Verificar telefono.";
		}
	} else {
		$jsondata['success'] = false;
		$jsondata['message'] = "Error. Verificar email.";
	}
} else {
	$jsondata['success'] = false;
	$jsondata['message'] = "Error. Faltan campos.";
}

// send email
mail($to, $subject, "PRODUCTO: ".$prod."/n PRESENTACIÓN: ".$pres."/n ".$msg, $headers);

header('Content-type: application/json; charset=utf-8');
json_encode($jsondata);
//exit();

header("Location:../contacto.html?conf=0");

?>
