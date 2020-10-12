<?php
date_default_timezone_set("Asia/Kolkata");
$executionStartTime = microtime(true) / 1000;
$apikey = "f4f56083d5cd3b454727e174d1d01d34";

$city = $_POST['city'];

//$city = 'Coventry';


$googleApiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" .  $city . "&lang=en&units=metric&APPID=" . $apikey;

	$ch = curl_init();

	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_URL,$googleApiUrl);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_VERBOSE, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

	$result = curl_exec($ch);

	curl_close($ch);
	
	
	$decode = json_decode($result, true);
	//print_r($decode);
	 $currentTime = time();
	 
	 $output['status']['code'] = "200";
	 $output['status']['name'] = "ok";
	 $output['status']['description'] = "mission saved";
	 $output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	 $output['data'] = $decode;
	 
	 header('Content-Type: application/json; charset=UTF-8');
 
	 echo json_encode($output); 
	 //print_r($output);

?>


